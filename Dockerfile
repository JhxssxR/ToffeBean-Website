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

# Switch to root temporarily to fix permissions, or just use --chown in COPY
USER root

# Copy the Laravel files with correct ownership
COPY --chown=www-data:www-data . /var/www/html

# Copy the built Vite assets from Stage 1
COPY --chown=www-data:www-data --from=frontend /app/public/build /var/www/html/public/build

# Switch back to www-data before running composer
USER www-data

# Install PHP dependencies (production)
RUN composer install --no-dev --optimize-autoloader

# Run Laravel optimizations
RUN php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache
