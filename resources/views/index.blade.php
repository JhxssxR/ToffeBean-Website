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

        function Button({ children, variant = 'primary', className = '' }) {
            const base = "font-bold rounded-full px-6 py-3 transition-transform hover:-translate-y-1 active:translate-y-0 border-[3px] border-[#4a2c11] flex items-center justify-center gap-2";
            const variants = {
                primary: "bg-[#ff7ab8] text-white shadow-brutal",
                secondary: "bg-white text-[#4a2c11] shadow-brutal",
            };
            
            return (
                <button className={`${base} ${variants[variant]} ${className}`}>
                    {children}
                </button>
            );
        }

        function Navbar() {
            return (
                <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                        <div className="w-10 h-10 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center text-xl bg-white shadow-brutal-sm">🐾</div>
                        <span className="ml-2 font-bold">toffeebean_</span><span className="text-[#ff7ab8]">*</span>
                    </div>
                    
                    <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">
                        <a href="/" className="bg-[#ff7ab8] text-white px-5 py-2.5 rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm flex items-center gap-2 font-bold">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            Home
                        </a>
                        <a href="/catalog" className="bg-white/40 hover:bg-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 text-[#4a2c11]">
                            🎨 Catalog
                        </a>
                        <a href="#" className="bg-white/40 hover:bg-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 text-[#4a2c11]">
                            ✨ AI OC Planner
                        </a>
                        <a href="/commissions" className="bg-white/40 hover:bg-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 text-[#4a2c11]">
                            📅 Commissions
                        </a>
                        <a href="#" className="bg-white/40 hover:bg-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 text-[#4a2c11]">
                            📊 Order Tracker
                        </a>
                        <a href="#" className="bg-white/40 hover:bg-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 text-[#4a2c11]">
                            👤 Sign In
                        </a>
                    </div>
                    
                    <div>
                        <button className="w-11 h-11 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal flex items-center justify-center hover:-translate-y-1 transition-transform">
                            🛍️
                        </button>
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
                            <Button variant="primary">Browse Sticker Shop</Button>
                            <Button variant="secondary">AI OC Design Planner &rarr;</Button>
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
                                    <span>toffeebean_</span><span className="text-[#ff7ab8]">*</span>
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
                    
                    <main className="max-w-[1100px] mx-auto px-6 w-full flex-1">
                        <Hero />
                        <Collections />
                        <PromoBanner />
                        <About />
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