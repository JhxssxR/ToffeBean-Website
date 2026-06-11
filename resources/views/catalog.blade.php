<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalog - ToffeeBean</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Vite Assets -->
    @vite(['resources/css/app.css'])

    <!-- React & ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <!-- Babel -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    @verbatim
    <script type="text/babel">
        const { useState, useEffect } = React;

        // Custom Inline SVGs to replace emoticons
        const Icons = {
            Home: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
            Palette: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
            Sparkles: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>,
            Calendar: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
            Sliders: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>,
            User: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            ShoppingBag: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
            ChevronDown: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>,
            Heart: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        };

        function Navbar() {
            const currentPath = '/catalog'; // Hardcoded for this blade file

            const links = [
                { href: '/', label: 'Home', icon: Icons.Home, activeIconColor: 'text-white', defaultIconColor: 'text-[#f08967]' },
                { href: '/catalog', label: 'Catalog', icon: Icons.Palette, activeIconColor: 'text-white', defaultIconColor: 'text-[#ff7ab8]' },
                { href: '/oc-planner', label: 'OC Planner', icon: Icons.Sparkles, activeIconColor: 'text-white', defaultIconColor: 'text-[#f08967]' },
                { href: '/commissions', label: 'Commissions', icon: Icons.Calendar, activeIconColor: 'text-white', defaultIconColor: 'text-[#60a5fa]' },
                { href: '/order-tracker', label: 'Order Tracker', icon: Icons.Sliders, activeIconColor: 'text-white', defaultIconColor: 'text-[#4ade80]' },
            ];

            return (
                <nav className="flex items-center justify-between px-10 py-5 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                        <div className="w-10 h-10 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center bg-white shadow-brutal-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <a href="/" className="ml-2 font-bold hover:opacity-80">toffeebean_</a><svg width="18" height="18" viewBox="0 0 24 24" className="inline-block ml-1 relative -top-1" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4.5A2.5 2.5 0 0 0 12 2a2.5 2.5 0 0 0-2.5 2.5c0 .76.35 1.45.89 1.9A3.49 3.49 0 0 0 7.5 5.5 2.5 2.5 0 0 0 5 8c0 .76.35 1.45.89 1.9A3.49 3.49 0 0 0 5 12a2.5 2.5 0 0 0 2.5 2.5c.76 0 1.45-.35 1.9-.89.28.6.68 1.12 1.15 1.54C10.08 15.6 9.5 16.27 9.5 17.06a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5c0-.79-.58-1.46-1.05-1.91.47-.42.87-.94 1.15-1.54.45.54 1.14.89 1.9.89A2.5 2.5 0 0 0 19 12a3.49 3.49 0 0 0-.89-2.1c.54-.45.89-1.14.89-1.9A2.5 2.5 0 0 0 16.5 5.5a3.49 3.49 0 0 0-2.89.9A2.5 2.5 0 0 0 14.5 4.5z"/></svg>
                    </div>
                    
                    <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">
                        {links.map((link) => {
                            const isActive = currentPath === link.href;
                            const Icon = link.icon;
                            
                            return (
                                <a 
                                    key={link.label}
                                    href={link.href} 
                                    className={`px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 font-bold ${
                                        isActive 
                                            ? 'bg-[#ff7ab8] text-white border-[3px] border-[#4a2c11] shadow-brutal-sm' 
                                            : 'bg-white/40 hover:bg-white text-[#4a2c11]'
                                    }`}
                                >
                                    <Icon width={18} height={18} className={isActive ? link.activeIconColor : link.defaultIconColor} />
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                    
                    <div>
                        <button className="w-11 h-11 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal flex items-center justify-center hover:-translate-y-1 transition-transform">
                            <Icons.ShoppingBag width={20} height={20} className="text-[#4a2c11]" />
                        </button>
                    </div>
                </nav>
            );
        }

        function Footer() {
            return (
                <div className="relative pt-8 mt-auto">
                    <div className="absolute top-0 left-0 w-full h-8" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0 L 40 20 L 0 20 Z' fill='%23161413'/%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundPosition: 'center bottom'
                    }}></div>
                    
                    <footer className="bg-[#161413] text-gray-400 py-16 px-8 border-t-[4px] border-[#4a2c11] border-opacity-0">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-1 text-2xl font-bold tracking-tight text-white">
                                    <span>toffeebean_</span><svg width="18" height="18" viewBox="0 0 24 24" className="inline-block ml-1 relative -top-1" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4.5A2.5 2.5 0 0 0 12 2a2.5 2.5 0 0 0-2.5 2.5c0 .76.35 1.45.89 1.9A3.49 3.49 0 0 0 7.5 5.5 2.5 2.5 0 0 0 5 8c0 .76.35 1.45.89 1.9A3.49 3.49 0 0 0 5 12a2.5 2.5 0 0 0 2.5 2.5c.76 0 1.45-.35 1.9-.89.28.6.68 1.12 1.15 1.54C10.08 15.6 9.5 16.27 9.5 17.06a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5c0-.79-.58-1.46-1.05-1.91.47-.42.87-.94 1.15-1.54.45.54 1.14.89 1.9.89A2.5 2.5 0 0 0 19 12a3.49 3.49 0 0 0-.89-2.1c.54-.45.89-1.14.89-1.9A2.5 2.5 0 0 0 16.5 5.5a3.49 3.49 0 0 0-2.89.9A2.5 2.5 0 0 0 14.5 4.5z"/></svg>
                                </div>
                                <p className="text-[13px] font-medium max-w-sm leading-relaxed text-gray-400">
                                    Cute kemono character illustrations, customized stickers, and reference guides matching warm, rustic autumn colors.
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-start md:items-end gap-4">
                                <button className="bg-transparent border border-gray-700 text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-gray-800 transition">
                                    Philippines | PHP ₱
                                </button>
                                <div className="flex flex-wrap gap-2">
                                    {['PAYPAL', 'VISA', 'MASTERCARD', 'DISCOVER', 'GPAY', 'APPLEPAY'].map(method => (
                                        <span key={method} className="text-[10px] font-bold tracking-wider border border-gray-700 px-2 py-1 rounded bg-[#201d1c] text-gray-300">{method}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-gray-500 gap-4">
                            <p>© 2026 ToffeeBean Digital Workshop. All rights of illustrations maintained strictly by the artist.</p>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-white transition flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 font-bold">IG</a>
                                <a href="#" className="hover:text-white transition flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 font-bold">TW</a>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }

        const products = [
            {
                id: 1,
                title: "Acorn Acrylic Shaker Keychain",
                description: "Double-sided acrylic keychain filled with tiny rolling pieces of acorns, leaves, and a sleepy squirrel character. Shakable an...",
                price: "650.00",
                category: "Keychains",
                isNew: false,
                image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&h=500&fit=crop",
                buttonText: "Add to cart",
                buttonVariant: "orange"
            },
            {
                id: 2,
                title: "Toffee's Autumn Sticker Sheet",
                description: "Cute customized kiss-cut sticker pack with hand-drawn illustrations of fat foxes, cozy maple cups, and fallen leaves....",
                price: "800.00",
                category: "Stickers",
                isNew: true,
                image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&h=500&fit=crop",
                buttonText: "Preorder",
                buttonVariant: "pink"
            },
            {
                id: 3,
                title: "Rolo Plushie 2.0",
                description: "The official soft, cuddly 20cm plushie of our squirrel mascot in a warm oversized pumpkin-themed hoodie. Perfect cozy...",
                price: "2,400.00",
                category: "Plushies",
                isNew: true,
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=500&fit=crop",
                buttonText: "Preorder",
                buttonVariant: "pink"
            }
        ];

        function CatalogApp() {
            return (
                <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
                    <Navbar />
                    
                    <div className="w-full h-5 relative" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundPosition: 'center bottom'
                    }}></div>
                    
                    <main className="max-w-[1200px] mx-auto px-6 w-full flex-1 pt-8 pb-24">
                        
                        {/* Filter Bar */}
                        <div className="bg-white border-[4px] border-[#4a2c11] rounded-[1.5rem] p-3 shadow-brutal flex flex-col md:flex-row items-center justify-between mb-8">
                            <div className="flex flex-wrap items-center gap-1 md:gap-2">
                                <button className="bg-[#ffce54] text-[#4a2c11] px-5 py-2 rounded-full font-bold text-sm tracking-wide border-2 border-transparent">
                                    All
                                </button>
                                <button className="text-[#4a2c11]/60 hover:text-[#4a2c11] hover:bg-[#faead6] px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-colors">
                                    Stickers
                                </button>
                                <button className="text-[#4a2c11]/60 hover:text-[#4a2c11] hover:bg-[#faead6] px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-colors">
                                    Plushies
                                </button>
                                <button className="text-[#4a2c11]/60 hover:text-[#4a2c11] hover:bg-[#faead6] px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-colors">
                                    Keychains
                                </button>
                                <button className="text-[#4a2c11]/60 hover:text-[#4a2c11] hover:bg-[#faead6] px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-colors">
                                    Reference Sheets
                                </button>
                            </div>
                            
                            <div className="flex items-center gap-4 mt-4 md:mt-0 px-2">
                                <span className="text-[#4a2c11]/60 font-bold text-[11px] tracking-wider uppercase">
                                    6 PRODUCTS FOUND
                                </span>
                                <button className="flex items-center gap-2 bg-white border-[3px] border-[#4a2c11] px-4 py-2 rounded-full font-bold text-sm shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                                    Price: Low to High
                                    <Icons.ChevronDown width={16} height={16} />
                                </button>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white border-[4px] border-[#4a2c11] rounded-[2rem] p-4 shadow-brutal-lg flex flex-col h-full group">
                                    
                                    <div className="rounded-2xl border-[3px] border-[#4a2c11] overflow-hidden aspect-[4/3] relative mb-5 bg-[#fffcf7]">
                                        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-white border-[2.5px] border-[#4a2c11] text-[#4a2c11] px-3 py-1 rounded-full text-[12px] font-bold tracking-wide shadow-brutal-sm">
                                                {product.category}
                                            </span>
                                        </div>
                                        {product.isNew && (
                                            <div className="absolute top-3 right-3">
                                                <span className="bg-[#faead6] border-[2.5px] border-[#4a2c11] text-[#4a2c11] px-3 py-1 rounded-full text-[12px] font-bold tracking-wide shadow-brutal-sm flex items-center gap-1">
                                                    <Icons.Sparkles width={12} height={12} className="text-[#f08967]" />
                                                    NEW
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="flex flex-col flex-1 px-1">
                                        <h3 className="font-bold text-xl leading-tight mb-2">{product.title}</h3>
                                        <p className="text-[13px] font-medium text-[#4a2c11]/70 leading-relaxed mb-4 line-clamp-2">
                                            {product.description}
                                        </p>
                                        
                                        <div className="mt-auto mb-4">
                                            <span className="font-bold text-xl">₱{product.price}</span>
                                            <span className="text-[11px] font-bold ml-1 text-[#4a2c11]/60">PHP</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 w-full">
                                            <button className={`flex-1 font-bold rounded-full py-3 transition-transform hover:-translate-y-1 active:translate-y-0 border-[3px] border-[#4a2c11] shadow-brutal text-white text-sm tracking-wide ${
                                                product.buttonVariant === 'orange' ? 'bg-[#f08967]' : 'bg-[#ff7ab8]'
                                            }`}>
                                                {product.buttonText}
                                            </button>
                                            <button className="w-[50px] h-[50px] shrink-0 bg-[#fef1df] rounded-2xl border-[3px] border-[#4a2c11] shadow-brutal flex items-center justify-center hover:-translate-y-1 transition-transform">
                                                <Icons.Heart width={20} height={20} className="text-[#ff7ab8]" />
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>

                    </main>
                    
                    <Footer />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CatalogApp />);
    </script>
    @endverbatim
</body>
</html>
