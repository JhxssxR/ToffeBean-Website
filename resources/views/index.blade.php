<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToffeeBean - Cute Illustrations & Stickers</title>
    
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

        function Button({ children, variant = 'primary', className = '', href }) {
            const base = "font-bold rounded-full px-6 py-3 transition-transform hover:-translate-y-1 active:translate-y-0 border-[3px] border-[#4a2c11] flex items-center justify-center gap-2 inline-flex cursor-pointer";
            const variants = {
                primary: "bg-[#ff7ab8] text-white shadow-brutal",
                secondary: "bg-white text-[#4a2c11] shadow-brutal",
            };
            
            if (href) {
                return (
                    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
                        {children}
                    </a>
                );
            }
            
            return (
                <button className={`${base} ${variants[variant]} ${className}`}>
                    {children}
                </button>
            );
        }

        const Icons = {
            Home: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
            Palette: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
            Sparkles: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>,
            Calendar: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
            Sliders: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>,
            User: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            ShoppingBag: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
        };

        function Navbar() {
            const currentPath = '/';

            const links = [
                { href: '/', label: 'Home', icon: Icons.Home, activeIconColor: 'text-white', defaultIconColor: 'text-[#4a2c11]' },
                { href: '/catalog', label: 'Catalog', icon: Icons.Palette, activeIconColor: 'text-white', defaultIconColor: 'text-[#4a2c11]' },
                { href: '/oc-planner', label: 'OC Planner', icon: Icons.Sparkles, activeIconColor: 'text-white', defaultIconColor: 'text-[#4a2c11]' },
                { href: '/commissions', label: 'Commissions', icon: Icons.Calendar, activeIconColor: 'text-white', defaultIconColor: 'text-[#4a2c11]' },
                { href: '/order-tracker', label: 'Order Tracker', icon: Icons.Sliders, activeIconColor: 'text-white', defaultIconColor: 'text-[#4a2c11]' },
            ];

            return (
                <nav className="flex items-center justify-between px-10 py-5 w-full bg-[#fff8f0]">
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                        <div className="w-10 h-10 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center bg-white shadow-brutal-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <span className="ml-2 font-bold">toffeebean_</span><svg width="18" height="18" viewBox="0 0 24 24" className="inline-block ml-1 relative -top-1" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4.5A2.5 2.5 0 0 0 12 2a2.5 2.5 0 0 0-2.5 2.5c0 .76.35 1.45.89 1.9A3.49 3.49 0 0 0 7.5 5.5 2.5 2.5 0 0 0 5 8c0 .76.35 1.45.89 1.9A3.49 3.49 0 0 0 5 12a2.5 2.5 0 0 0 2.5 2.5c.76 0 1.45-.35 1.9-.89.28.6.68 1.12 1.15 1.54C10.08 15.6 9.5 16.27 9.5 17.06a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5c0-.79-.58-1.46-1.05-1.91.47-.42.87-.94 1.15-1.54.45.54 1.14.89 1.9.89A2.5 2.5 0 0 0 19 12a3.49 3.49 0 0 0-.89-2.1c.54-.45.89-1.14.89-1.9A2.5 2.5 0 0 0 16.5 5.5a3.49 3.49 0 0 0-2.89.9A2.5 2.5 0 0 0 14.5 4.5z"/></svg>
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
                    
                    <div className="flex items-center gap-4">
                        <button className="w-11 h-11 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal flex items-center justify-center hover:-translate-y-1 transition-transform">
                            <Icons.ShoppingBag width={20} height={20} className="text-[#4a2c11]" />
                        </button>
                        <a href="/login" className="flex items-center gap-2 px-6 py-2 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal text-[#4a2c11] font-bold hover:bg-[#fff8f0] hover:text-[#4a2c11] hover:-translate-y-1 transition-all">
                            <Icons.User width={18} height={18} />
                            Sign In
                        </a>
                    </div>
                </nav>
            );
        }

        function Hero() {
            return (
                <section className="flex flex-col md:flex-row items-center gap-12 pt-12 pb-8">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-[#f08967] text-white px-4 py-1.5 rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[11px] font-bold uppercase tracking-wider">
                            🍁 Digital Art & Stickers Workshop
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight">
                            <span className="text-[#4a2c11]">Cute illustrations,</span><br/>
                            <span className="text-[#ff7ab8]">creativity filled!</span>
                        </h1>
                        
                        <p className="text-base font-medium leading-relaxed max-w-md text-[#4a2c11]/80">
                            Welcome to the cozy autumn corner of <span className="text-[#4a2c11] font-bold">**ToffeeBean**</span>! We specialize in custom kiss-cut sticker sheets, character guides, and expressive illustrations made to help clients express their Original Characters (OCs) affordably.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button variant="primary" href="/catalog">Browse Shop</Button>
                            <Button variant="secondary" href="/oc-planner">OC Design Planner &rarr;</Button>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full">
                        <div className="rounded-[2rem] border-[4px] border-[#4a2c11] shadow-brutal-lg overflow-hidden bg-[#fffdfa] w-full h-[320px] md:h-[400px]">
                            <img src="/images/hero-banner.png" alt="Autumn Sketch Club" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
            );
        }

        function Collections() {
            const items = [
                { title: "Plushies!", desc: "Collect super-soft huggable plushies", img: "https://images.unsplash.com/photo-1559418386-35c82a03c200?w=500&h=300&fit=crop" },
                { title: "Vinyl Stickers!", desc: "Weatherproof kiss-cut chibi sticker packs", img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=500&h=300&fit=crop" },
                { title: "Reference Guides!", desc: "Custom layout front/back guides for commissions", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=500&h=300&fit=crop" }
            ];

            return (
                <section className="space-y-6 pt-16 relative">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        MY COLLECTIONS! <span className="text-[#ff7ab8] text-xl">⭐</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="bg-[#fffcf7] border-[4px] border-[#4a2c11] rounded-[2rem] p-4 shadow-brutal-lg flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform">
                                <div className="rounded-2xl border-[3px] border-[#4a2c11] overflow-hidden h-[200px] mb-4 bg-white relative">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex justify-between items-end px-2 pb-1">
                                    <div>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-[13px] font-medium text-[#4a2c11]/60 mt-0.5">{item.desc}</p>
                                    </div>
                                    <span className="text-[#ff7ab8] font-bold text-xl leading-none">&rarr;</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            );
        }

        function PromoBanner() {
            return (
                <section className="bg-[#faead6] border-[4px] border-[#4a2c11] rounded-[2rem] p-8 md:p-10 shadow-brutal-lg relative overflow-hidden mt-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                Is this what you're here for? <span className="text-2xl">😏</span>
                            </h2>
                            <div className="bg-[#fef1df]/60 p-5 rounded-xl">
                                <p className="text-[15px] font-medium leading-relaxed text-[#4a2c11]/80">
                                    It's <span className="text-[#4a2c11] font-bold">**HER**</span>. The calico, slightly mischievous custom feline squadmate plushie. Equipped with custom bones stitching details, skeletal pattern elements, and multiple accessories. Fully available now for online Preorder reservations!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 shrink-0 md:w-64">
                            <Button variant="primary" className="px-10 py-4 w-full text-lg">Check it out HERE</Button>
                            <span className="text-[11px] font-semibold text-[#4a2c11]/60 text-center leading-tight">Only ₱2,400.00 PHP — Soft standard materials</span>
                        </div>
                    </div>
                </section>
            );
        }

        function About() {
            return (
                <section className="bg-white border-[4px] border-[#4a2c11] rounded-[2rem] p-8 md:p-12 shadow-brutal-lg flex flex-col md:flex-row gap-12 items-center mt-16 mb-24">
                    <div className="relative shrink-0">
                        <div className="w-56 h-56 rounded-full border-[4px] border-[#4a2c11] shadow-brutal overflow-hidden bg-[#fffcf7]">
                            <img src="/images/artist.jpg" alt="Toffee" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#ffce54] text-[#4a2c11] text-[11px] font-bold px-5 py-1.5 rounded-full border-[3px] border-[#4a2c11] tracking-wider shadow-brutal-sm">
                            ARTIST
                        </div>
                    </div>
                    
                    <div className="space-y-5">
                        <h2 className="text-3xl font-bold uppercase text-[#ff7ab8] flex items-center gap-2">
                            HEY THERE! I'M TOFFEE! <span className="text-2xl">🧑‍🎨</span>
                        </h2>
                        <div className="space-y-4 text-[15px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <p>
                                I'm the artist and organizer behind ToffeeBean! I create soft, super-colorful, and character-packed digital illustrations inspired by kemono and cute pastel cartoon designs. My absolute core goal is to make custom illustrations that feel lively, highly expressive, emotional, and easy to connect with.
                            </p>
                            <p>
                                Whether you're looking for high-quality stickers to display on a sticker book, cute acrylic keychains, or planning the design properties for your very first original character (OC) with a full reference guide commission sheet, I can help you realize it beautifully in our warm autumn workspace style!
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 pt-3">
                            <span className="bg-white px-4 py-1.5 rounded-full border-[2px] border-[#4a2c11] shadow-[2px_2px_0_0_#4a2c11] text-[12px] font-bold tracking-wide">🌸 Kemono Style</span>
                            <span className="bg-white px-4 py-1.5 rounded-full border-[2px] border-[#4a2c11] shadow-[2px_2px_0_0_#4a2c11] text-[12px] font-bold tracking-wide">🍁 Cozy Autumn Palettes</span>
                            <span className="bg-white px-4 py-1.5 rounded-full border-[2px] border-[#4a2c11] shadow-[2px_2px_0_0_#4a2c11] text-[12px] font-bold tracking-wide">✂️ Custom Sticker Sheets</span>
                        </div>
                    </div>
                </section>
            );
        }

        function Footer() {
            return (
                <div className="relative pt-8">
                    {/* Scallop transition to black footer */}
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

        function App() {
            return (
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    
                    {/* Header Wave Divider */}
                    <div className="w-full h-5 relative" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundPosition: 'center bottom'
                    }}></div>
                    
                    <main className="w-full flex-1">
                        <div className="max-w-[1100px] mx-auto px-6 w-full">
                            <Hero />
                        </div>
                        
                        <div className="w-full border-t-[3px] border-[#4a2c11]"></div>
                        
                        <div className="max-w-[1100px] mx-auto px-6 w-full pb-12">
                            <Collections />
                            <PromoBanner />
                            <About />
                        </div>
                    </main>
                    
                    <Footer />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
    @endverbatim
</body>
</html>