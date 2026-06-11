<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Commissions - ToffeeBean</title>
    
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
        const { useState } = React;

        const Icons = {
            Home: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
            Palette: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
            Sparkles: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>,
            Calendar: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
            Sliders: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>,
            User: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            ShoppingBag: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
            Check: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>,
            Hourglass: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>,
            Settings: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
            Calculator: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>,
            Star: (props) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        };

        function Navbar() {
            const currentPath = '/commissions';

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

        function CommissionsApp() {
            const [style, setStyle] = useState('sticker');
            const [addons, setAddons] = useState({ print: false, rush: false });

            const styles = {
                sticker: {
                    id: 'sticker',
                    title: 'Cute Custom Sticker Sheet',
                    desc: 'Includes 6 dynamic chibi custom sticker doodles of your character in high resolutions, ready to print.',
                    price: 1500,
                    eta: '1-2 weeks'
                },
                reference: {
                    id: 'reference',
                    title: 'Character Reference Sheet',
                    desc: 'Full front body guide, 1 side detail view, plus 3 custom sticker doodles. Comes with custom fall borders.',
                    price: 4500,
                    eta: '2-3 weeks'
                },
                keyart: {
                    id: 'keyart',
                    title: 'Stylized Character Key Art',
                    desc: 'A fully illustrated scenic painting of your character interacting with a cozy autumn environment.',
                    price: 3000,
                    eta: '1-2 weeks'
                }
            };

            const addonPrices = {
                print: 200,
                rush: 500
            };

            const selectedStyle = styles[style];
            const basePrice = selectedStyle.price;
            let totalAddons = 0;
            if (addons.print) totalAddons += addonPrices.print;
            if (addons.rush) totalAddons += addonPrices.rush;
            const grandTotal = basePrice + totalAddons;

            const formatMoney = (amount) => amount.toLocaleString();

            return (
                <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
                    <Navbar />
                    
                    <div className="w-full h-5 relative" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundPosition: 'center bottom'
                    }}></div>
                    
                    <main className="max-w-[1100px] mx-auto px-6 w-full flex-1 pt-12 pb-24">
                        
                        <div className="text-center mb-12 max-w-2xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                                Commission Configurator Custom 🎨
                            </h1>
                            <p className="text-[15px] font-medium text-[#4a2c11]/80 leading-relaxed">
                                Turn your character concepts into professional digital cartoon artwork. Configure options, calculate costs immediately in PHP, and secure your place on Toffee's waitlist!
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            
                            {/* LEFT COLUMN: FORM */}
                            <div className="flex-1 bg-white border-[4px] border-[#4a2c11] rounded-[2rem] p-6 md:p-8 shadow-brutal-lg">
                                <h2 className="text-lg font-bold flex items-center gap-2 mb-6 border-b-2 border-[#fef1df] pb-4">
                                    <Icons.Settings width={20} height={20} className="text-[#ff7ab8]" />
                                    CONFIGURATION OPTIONS
                                </h2>

                                <div className="space-y-4">
                                    <h3 className="font-bold text-[13px] tracking-wider uppercase">1. ARTWORK STYLE CATEGORY</h3>
                                    
                                    {Object.values(styles).map((item) => {
                                        const isSelected = style === item.id;
                                        return (
                                            <div 
                                                key={item.id} 
                                                onClick={() => setStyle(item.id)}
                                                className={`border-[3px] border-[#4a2c11] rounded-[1.5rem] p-5 cursor-pointer transition-all relative ${
                                                    isSelected ? 'bg-[#fef1df] shadow-brutal-sm translate-y-[-2px]' : 'bg-white hover:bg-[#fffcf7]'
                                                }`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-[17px]">{item.title}</h4>
                                                    <div className="text-right flex items-center gap-2">
                                                        <span className="font-bold text-[#ff7ab8] text-lg">₱{formatMoney(item.price)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">PHP</span></span>
                                                        {isSelected && <Icons.Check width={20} height={20} className="text-[#f08967]" />}
                                                    </div>
                                                </div>
                                                <p className="text-[13px] font-medium text-[#4a2c11]/80 leading-relaxed mb-4 max-w-[90%]">
                                                    {item.desc}
                                                </p>
                                                <span className="inline-flex items-center gap-1.5 bg-white border-[2px] border-[#4a2c11] px-3 py-1 rounded-full text-[10px] font-bold text-[#4a2c11]/70 tracking-wider">
                                                    <Icons.Hourglass width={12} height={12} className="text-[#f08967]" />
                                                    Est. Deliver: {item.eta}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold tracking-wider uppercase">Species (E.G. Fox)</label>
                                        <input type="text" placeholder="Red panda/kitten..." className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#ff7ab8] transition-colors" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold tracking-wider uppercase">Character Name</label>
                                        <input type="text" placeholder="E.g. Maple" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#ff7ab8] transition-colors" />
                                    </div>
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-[11px] font-bold tracking-wider uppercase">Aesthetic & Theme</label>
                                        <input type="text" placeholder="E.g. Warm pumpkin cafe overalls, gold keychains" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#ff7ab8] transition-colors" />
                                    </div>
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-[11px] font-bold tracking-wider uppercase">Description Notes & Specifications</label>
                                        <textarea rows="4" placeholder="Details of poses, clothes, expressions, and accessories..." className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#ff7ab8] transition-colors resize-none"></textarea>
                                    </div>
                                </div>

                                <div className="space-y-4 mt-10">
                                    <h3 className="font-bold text-[13px] tracking-wider uppercase">2. EXTRA ADD-ONS</h3>
                                    
                                    <label className={`flex items-start gap-4 border-[3px] border-[#4a2c11] rounded-[1.5rem] p-5 cursor-pointer transition-colors ${addons.print ? 'bg-[#fef1df]' : 'bg-white hover:bg-[#fffcf7]'}`}>
                                        <input 
                                            type="checkbox" 
                                            className="mt-1 w-5 h-5 accent-[#f08967]" 
                                            checked={addons.print} 
                                            onChange={(e) => setAddons({...addons, print: e.target.checked})} 
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <h4 className="font-bold text-[15px]">Ship High-Res Physical Sticker Prints</h4>
                                                <span className="font-bold text-[14px]">+ ₱200 <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">PHP</span></span>
                                            </div>
                                            <p className="text-[12px] font-medium text-[#4a2c11]/70">We will print, laminate, and pack die-cut vinyl stickers of your delivery. Ships internationally!</p>
                                        </div>
                                    </label>

                                    <label className={`flex items-start gap-4 border-[3px] border-[#4a2c11] rounded-[1.5rem] p-5 cursor-pointer transition-colors ${addons.rush ? 'bg-[#fef1df]' : 'bg-white hover:bg-[#fffcf7]'}`}>
                                        <input 
                                            type="checkbox" 
                                            className="mt-1 w-5 h-5 accent-[#f08967]" 
                                            checked={addons.rush} 
                                            onChange={(e) => setAddons({...addons, rush: e.target.checked})} 
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <h4 className="font-bold text-[15px]">Priority Rush Request ⚡</h4>
                                                <span className="font-bold text-[14px]">+ ₱500 <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">PHP</span></span>
                                            </div>
                                            <p className="text-[12px] font-medium text-[#4a2c11]/70">Bypasses the current waitlist. Sketch finalized within 48 hours, fully complete within 4 days.</p>
                                        </div>
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t-2 border-[#fef1df]">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold tracking-wider uppercase text-[#f08967] flex items-center gap-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                            Contact Email
                                        </label>
                                        <input type="email" placeholder="your_name@example.com" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#ff7ab8] transition-colors" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
                                            Instagram / Twitter (X)
                                        </label>
                                        <input type="text" placeholder="@your_username" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#ff7ab8] transition-colors" />
                                    </div>
                                </div>

                                <button className="w-full mt-8 bg-[#ff7ab8] text-white font-bold text-lg rounded-xl py-4 border-[3px] border-[#4a2c11] shadow-brutal hover:-translate-y-1 transition-transform">
                                    Confirm Custom Order & Enter Waitlist! 📦
                                </button>
                            </div>

                            {/* RIGHT COLUMN: PRICE ESTIMATOR */}
                            <div className="w-full lg:w-[350px] shrink-0 space-y-6 sticky top-8 self-start">
                                
                                <div className="bg-white border-[4px] border-[#4a2c11] rounded-[2rem] p-6 md:p-8 shadow-brutal-lg">
                                    <h2 className="text-lg font-bold flex items-center gap-2 mb-6 border-b-2 border-[#fef1df] pb-4">
                                        <Icons.Calculator width={20} height={20} className="text-[#ff7ab8]" />
                                        PRICE ESTIMATOR
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between items-start">
                                            <span className="font-bold text-[14px] text-[#4a2c11]/80 max-w-[180px] leading-tight">
                                                {selectedStyle.title.replace('Cute Custom Sticker Sheet', 'Stickers Base Artwork').replace('Character Reference Sheet', 'Reference Base Artwork').replace('Stylized Character Key Art', 'Key Art Base Artwork')}
                                            </span>
                                            <span className="font-bold text-[15px]">₱{formatMoney(basePrice)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">PHP</span></span>
                                        </div>
                                        
                                        {addons.print && (
                                            <div className="flex justify-between items-start">
                                                <span className="font-bold text-[14px] text-[#4a2c11]/80 max-w-[180px] leading-tight">
                                                    Physical Prints
                                                </span>
                                                <span className="font-bold text-[15px]">₱{formatMoney(addonPrices.print)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">PHP</span></span>
                                            </div>
                                        )}

                                        {addons.rush && (
                                            <div className="flex justify-between items-start">
                                                <span className="font-bold text-[14px] text-[#4a2c11]/80 max-w-[180px] leading-tight">
                                                    Priority Rush
                                                </span>
                                                <span className="font-bold text-[15px]">₱{formatMoney(addonPrices.rush)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">PHP</span></span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border-t-[3px] border-dashed border-[#4a2c11]/20 pt-6 mt-4">
                                        <div className="flex justify-between items-end">
                                            <span className="font-bold text-[17px]">Grand Total Price</span>
                                            <div className="text-right">
                                                <span className="font-black text-3xl text-[#ff7ab8] tracking-tight">₱{formatMoney(grandTotal)}</span>
                                                <span className="block text-[10px] font-bold text-[#4a2c11]/60 uppercase mt-1 text-right">PHP</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quality Box */}
                                <div className="bg-[#fef1df]/50 border-[3px] border-dashed border-[#d1baa3] rounded-[2rem] p-6 relative">
                                    <div className="flex justify-center mb-3">
                                        <div className="bg-white rounded-full border-[2px] border-[#4a2c11] p-1.5 shadow-brutal-sm text-[#ffce54]">
                                            <Icons.Star width={18} height={18} />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-[12px] tracking-widest text-center uppercase mb-4">TOFFEE'S STUDIO QUALITY</h3>
                                    <ul className="space-y-3 text-[11px] font-medium text-[#4a2c11]/70 leading-relaxed">
                                        <li><strong className="text-[#4a2c11]">1. Unlimited sketches:</strong> Refine guidelines seamlessly! Toffee doesn't start coloring until you approve the sketch.</li>
                                        <li><strong className="text-[#4a2c11]">2. Watermark removed:</strong> You get full high-res PNG downloads with and without sweet autumn leaf frames.</li>
                                        <li><strong className="text-[#4a2c11]">3. Transparent queue:</strong> Access, watch, and monitor Toffee's draw progression in real-time in the next tab window!</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </main>
                    
                    <Footer />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CommissionsApp />);
    </script>
    @endverbatim
</body>
</html>
