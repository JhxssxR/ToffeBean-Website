# Stage 1: Build Frontend Assets
FROM node:20 AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve PHP/Laravel App
FROM serversideup/php:8.2-fpm-nginx

# Set the document root for Laravel
ENV WEB_DOCUMENT_ROOT=/var/www/html/public

# Copy the Laravel files
COPY . /var/www/html

# Copy the built Vite assets from Stage 1
COPY --from=frontend /app/public/build /var/www/html/public/build

# Install PHP dependencies (production)
RUN composer install --no-dev --optimize-autoloader

# Run Laravel optimizations
RUN php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

# Ensure correct permissions (must be root)
USER root
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
USER www-data
