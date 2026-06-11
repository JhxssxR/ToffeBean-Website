<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Tracker - ToffeeBean</title>
    
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

    <style>
        .progress-bar-track {
            background: #e8d5c0;
            border-radius: 9999px;
            height: 8px;
            width: 100%;
        }
        .progress-bar-fill-sketching {
            background: linear-gradient(90deg, #ff7ab8, #f08967);
            border-radius: 9999px;
            height: 8px;
            width: 40%;
        }
        .progress-bar-fill-coloring {
            background: linear-gradient(90deg, #ff7ab8, #f08967);
            border-radius: 9999px;
            height: 8px;
            width: 70%;
        }
        .step-label-active {
            color: #ff7ab8;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <div id="root"></div>

    @verbatim
    <script type="text/babel">
        const { useState } = React;

        const Icons = {
            Home: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
            Palette: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
            Sparkles: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>,
            Calendar: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
            Sliders: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>,
            User: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            ShoppingBag: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
            Award: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>,
            CheckCircle: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
            ClipboardList: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>,
            Box: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
        };

        function Navbar() {
            const currentPath = '/order-tracker';

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
                    <footer className="bg-[#161413] text-gray-400 py-16 px-8">
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

        // Empty state — no commissions yet
        const activeOrders = [];

        function EmptySlots() {
            return (
                <div className="bg-white border-[3px] border-dashed border-[#d1baa3] rounded-[2rem] p-12 flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#fef1df] border-[3px] border-[#4a2c11] flex items-center justify-center">
                        <Icons.ClipboardList width={28} height={28} className="text-[#4a2c11]/40" />
                    </div>
                    <h3 className="font-bold text-xl text-[#4a2c11]/50">No Active Commissions Yet</h3>
                    <p className="text-[13px] font-medium text-[#4a2c11]/40 max-w-xs leading-relaxed">
                        When you submit a commission order, your progress will appear here in real-time so you can track every step!
                    </p>
                    <a href="/commissions" className="mt-2 bg-[#ff7ab8] text-white font-bold px-8 py-3 rounded-full border-[3px] border-[#4a2c11] shadow-brutal hover:-translate-y-1 transition-transform text-sm">
                        Submit a Commission →
                    </a>
                </div>
            );
        }

        function OrderTrackerApp() {
            return (
                <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
                    <Navbar />
                    
                    <div className="w-full h-5 relative" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundPosition: 'center bottom'
                    }}></div>
                    
                    <main className="max-w-[1100px] mx-auto px-6 w-full flex-1 pt-12 pb-24">
                        
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold mb-3">
                                ToffeeBean Live Queue Tracker 🍂
                            </h1>
                            <p className="text-[15px] font-medium text-[#4a2c11]/70 max-w-lg mx-auto leading-relaxed">
                                Monitor your ongoing illustration progress. See exactly where your order stands under Toffee's waitlist slots below!
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            
                            {/* LEFT COLUMN: Active Slots */}
                            <div className="flex-1 min-w-0">
                                
                                <div className="flex items-center gap-3 mb-5">
                                    <Icons.Sliders width={20} height={20} className="text-[#ff7ab8]" />
                                    <h2 className="font-bold text-[15px] tracking-widest uppercase">
                                        Active Commission Slots ({activeOrders.length})
                                    </h2>
                                </div>

                                {activeOrders.length === 0 ? (
                                    <EmptySlots />
                                ) : (
                                    <div className="space-y-6">
                                        {/* Order cards would go here */}
                                    </div>
                                )}
                            </div>

                            {/* RIGHT COLUMN: Status + Rights */}
                            <div className="w-full lg:w-[340px] shrink-0 space-y-5">
                                
                                {/* Waitlist Live Status */}
                                <div className="bg-white border-[4px] border-[#4a2c11] rounded-[2rem] p-6 shadow-brutal-lg">
                                    <h2 className="font-bold text-[13px] tracking-widest uppercase mb-5">
                                        Waitlist Live Status
                                    </h2>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#4ade80] mt-1 shrink-0 shadow-[0_0_6px_rgba(74,222,128,0.6)]"></div>
                                            <div>
                                                <p className="font-bold text-[13px]">Studio Intake Status: <span className="text-[#4ade80]">OPEN</span></p>
                                                <p className="text-[11px] font-medium text-[#4a2c11]/60 mt-0.5">Toffee currently accepting new custom characters or sticker aresel!</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#ffce54] mt-1 shrink-0 shadow-[0_0_6px_rgba(255,206,84,0.6)]"></div>
                                            <div>
                                                <p className="font-bold text-[13px]">Active Slots Filling: <span className="text-[#f08967]">0 / 5</span></p>
                                                <p className="text-[11px] font-medium text-[#4a2c11]/60 mt-0.5">Average waitlist processing duration is 12 days per design.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-5 border-t-2 border-[#fef1df]">
                                        <h3 className="font-bold text-[11px] tracking-widest uppercase mb-3 text-[#4a2c11]/70">Queue Policy Guidelines:</h3>
                                        <ul className="space-y-2 text-[11px] font-medium text-[#4a2c11]/60 leading-relaxed">
                                            <li>* Toffee updates working slots every Tuesday and Friday.</li>
                                            <li>* Sketches are revealed directly to customers for feedback before rendering colors.</li>
                                            <li>* Finished high-definition downloads are provided through a private storage drive link.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Certified Workshop Rights */}
                                <div className="bg-[#fef1df]/60 border-[3px] border-dashed border-[#c4a882] rounded-[2rem] p-6 relative">
                                    <div className="flex justify-center mb-3">
                                        <div className="w-10 h-10 rounded-full bg-white border-[2.5px] border-[#4a2c11] flex items-center justify-center shadow-brutal-sm">
                                            <Icons.Award width={20} height={20} className="text-[#f08967]" />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-[12px] tracking-widest text-center uppercase mb-4">Certified Workshop Rights</h3>
                                    <p className="text-[11px] font-medium text-[#4a2c11]/70 text-center leading-relaxed">
                                        Every design has full personal print rights! Print your custom stickers, include them in digital streams, use them as avatars or print stickers as gifts for your nearest OC friends.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </main>
                    
                    <Footer />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<OrderTrackerApp />);
    </script>
    @endverbatim
</body>
</html>
