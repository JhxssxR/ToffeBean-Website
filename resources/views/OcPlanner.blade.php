<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OC Planner - ToffeeBean</title>
    <meta name="description" content="Plan your Original Character or sticker collection with ToffeeBean's cozy OC Planner. Choose species, vibe, colors, and accessories to design your dream character!">

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

        // Icons
        const Icons = {
            Home:        (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
            Palette:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
            Sparkles:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>,
            Calendar:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
            Sliders:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>,
            User:        (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            ShoppingBag: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
            Pencil:      (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>,
        };

        // Navbar
        function Navbar() {
            const currentPath = '/oc-planner';
            const links = [
                { href: '/',              label: 'Home',         icon: Icons.Home,     defaultIconColor: 'text-[#f08967]' },
                { href: '/catalog',       label: 'Catalog',      icon: Icons.Palette,  defaultIconColor: 'text-[#ff7ab8]' },
                { href: '/oc-planner',    label: 'OC Planner',   icon: Icons.Sparkles, defaultIconColor: 'text-[#f08967]' },
                { href: '/commissions',   label: 'Commissions',  icon: Icons.Calendar, defaultIconColor: 'text-[#60a5fa]' },
                { href: '/order-tracker', label: 'Order Tracker',icon: Icons.Sliders,  defaultIconColor: 'text-[#4ade80]' },
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
                                    <Icon width={18} height={18} className={isActive ? 'text-white' : link.defaultIconColor} />
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

        // Footer
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

        // Species pill
        function SpeciesPill({ label, selected, onClick }) {
            return (
                <button
                    onClick={onClick}
                    className={`px-4 py-1.5 rounded-full text-[12px] font-bold border-[2px] transition-all ${
                        selected
                            ? 'bg-[#ff7ab8] text-white border-[#4a2c11] shadow-[2px_2px_0_0_#4a2c11]'
                            : 'bg-white text-[#4a2c11] border-[#d4b896] hover:border-[#4a2c11] hover:shadow-[2px_2px_0_0_#4a2c11]'
                    }`}
                >
                    {label}
                </button>
            );
        }

        // Main App
        function OCPlannerApp() {
            const speciesOptions = [
                'Forest Red Fox', 'Calico Cat',
                'Mischievous Squirrel', 'Sleepy Sea Otter',
                'Fluffy Red Panda', 'Chubby Shiba Inu',
                'Other custom…',
            ];

            const vibeOptions = [
                'Pumpkin Spice Barista',
                'Moonlit Forest Wanderer',
                'Cozy Rainy Day Reader',
                'Bubbly Café Regular',
                'Mischievous Autumn Sprite',
                'Sleepy Cloud Dreamer',
            ];

            const [selectedSpecies, setSelectedSpecies] = useState('Forest Red Fox');
            const [vibe, setVibe]       = useState('Pumpkin Spice Barista');
            const [colors, setColors]   = useState('Warm Caramel, Pumpkin Orange, and Butter Cream');
            const [quirks, setQuirks]   = useState('Carries a small acorn bag, wears big round glasses, and is easily startled but loves cinnamon bread.');
            const [submitted, setSubmitted] = useState(false);

            function handlePlan(e) {
                e.preventDefault();
                setSubmitted(true);
            }

            return (
                <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
                    <Navbar />

                    {/* Wave divider */}
                    <div className="w-full h-5 relative" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundPosition: 'center bottom'
                    }}></div>

                    <main className="max-w-[1100px] mx-auto px-6 w-full flex-1 pb-24 relative">

                        {/* Floating decorations */}
                        <span style={{position:'absolute',top:'8%',left:'-2%',fontSize:'1.1rem',opacity:0.45,transform:'rotate(-10deg)',pointerEvents:'none'}}>✦</span>
                        <span style={{position:'absolute',top:'35%',left:'-3%',fontSize:'0.85rem',opacity:0.35,pointerEvents:'none'}}>✦</span>
                        <span style={{position:'absolute',top:'65%',left:'-1%',fontSize:'1rem',opacity:0.3,pointerEvents:'none'}}>🍂</span>
                        <span style={{position:'absolute',top:'8%',right:'-2%',fontSize:'1rem',opacity:0.4,transform:'rotate(12deg)',pointerEvents:'none'}}>✦</span>
                        <span style={{position:'absolute',top:'40%',right:'-3%',fontSize:'0.8rem',opacity:0.3,pointerEvents:'none'}}>🍪</span>
                        <span style={{position:'absolute',top:'70%',right:'-1%',fontSize:'1.1rem',opacity:0.35,transform:'rotate(-8deg)',pointerEvents:'none'}}>✦</span>

                        {/* Page Header */}
                        <div className="text-center pt-10 pb-8">
                            <h1 className="text-3xl font-bold text-[#4a2c11]">Cozy OC Planner 🍂</h1>
                            <p className="text-[14px] font-medium text-[#4a2c11]/70 mt-2 max-w-md mx-auto leading-relaxed">
                                Co-create your dream Original Character (OC) or sticker collection! Describe fluffy details, and let Toffee sketch out initial concepts and details!
                            </p>
                        </div>

                        {/* Two-panel layout */}
                        <div className="flex flex-col lg:flex-row gap-6 items-start">

                            {/* LEFT: Form */}
                            <div className="flex-1 bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-6 shadow-[4px_4px_0_0_#4a2c11]">
                                <div className="flex items-center gap-2 mb-5">
                                    <Icons.Pencil width={15} height={15} className="text-[#f08967]" />
                                    <h2 className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#4a2c11]">Character Specs</h2>
                                </div>

                                <form onSubmit={handlePlan} className="space-y-5">

                                    {/* Fluff Species */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#4a2c11]">Fluff Species</label>
                                            <span className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider">Select or write other</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {speciesOptions.map(s => (
                                                <SpeciesPill key={s} label={s} selected={selectedSpecies === s} onClick={() => setSelectedSpecies(s)} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Vibe & Aesthetic */}
                                    <div>
                                        <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] block mb-2">Vibe &amp; Aesthetic</label>
                                        <div className="relative">
                                            <select
                                                value={vibe}
                                                onChange={e => setVibe(e.target.value)}
                                                className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white appearance-none focus:outline-none focus:border-[#4a2c11] transition-colors cursor-pointer pr-8"
                                            >
                                                {vibeOptions.map(v => <option key={v} value={v}>{v}</option>)}
                                            </select>
                                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#4a2c11]/50 text-xs">▼</span>
                                        </div>
                                    </div>

                                    {/* Color Palette */}
                                    <div>
                                        <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] block mb-2">Color Palette Inspiration</label>
                                        <input
                                            type="text"
                                            value={colors}
                                            onChange={e => setColors(e.target.value)}
                                            placeholder="e.g. Warm Caramel, Pumpkin Orange, Butter Cream"
                                            className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                        />
                                    </div>

                                    {/* Quirks */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#4a2c11]">Quirks &amp; Key Accessories</label>
                                            <span className="text-[10px] font-bold text-[#ff7ab8] uppercase tracking-wider">Cozy doodles!</span>
                                        </div>
                                        <textarea
                                            value={quirks}
                                            onChange={e => setQuirks(e.target.value)}
                                            rows={4}
                                            placeholder="Describe your character's quirks, accessories, and personality traits…"
                                            className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-3 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors resize-none placeholder:text-[#4a2c11]/30 leading-relaxed"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#ff7ab8] text-white font-bold rounded-full py-3.5 border-[3px] border-[#4a2c11] shadow-[3px_3px_0_0_#4a2c11] hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center justify-center gap-2 text-[14px]"
                                    >
                                        <Icons.Pencil width={16} height={16} />
                                        Plan Character Concept! 🍂
                                    </button>
                                </form>
                            </div>

                            {/* RIGHT: Preview */}
                            <div className="flex-1 min-h-[420px] border-[2.5px] border-dashed border-[#d4b896] rounded-[1.5rem] p-6 flex flex-col items-center justify-center bg-[#fef8f0]/60">

                                {submitted ? (
                                    <div className="w-full space-y-4" style={{animation:'fadeInUp 0.35s ease-out both'}}>
                                        <div className="flex justify-center mb-2">
                                            <div className="w-24 h-24 rounded-full border-[3px] border-[#4a2c11] bg-[#faead6] shadow-[3px_3px_0_0_#4a2c11] flex items-center justify-center text-4xl select-none">
                                                🦊
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <span className="inline-block bg-[#ff7ab8] text-white text-[11px] font-bold px-4 py-1 rounded-full border-[2px] border-[#4a2c11] tracking-wider uppercase shadow-[2px_2px_0_0_#4a2c11]">
                                                {selectedSpecies}
                                            </span>
                                        </div>
                                        <div className="bg-white border-[2px] border-[#d4b896] rounded-2xl p-4 space-y-3 shadow-[2px_2px_0_0_#d4b896]">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-[#4a2c11]/50 mb-0.5">Vibe</p>
                                                <p className="text-[13px] font-semibold text-[#4a2c11]">{vibe}</p>
                                            </div>
                                            <div className="border-t border-[#f0e4d0] pt-3">
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-[#4a2c11]/50 mb-0.5">Color Palette</p>
                                                <p className="text-[13px] font-semibold text-[#4a2c11]">{colors}</p>
                                            </div>
                                            <div className="border-t border-[#f0e4d0] pt-3">
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-[#4a2c11]/50 mb-0.5">Quirks &amp; Accessories</p>
                                                <p className="text-[13px] font-semibold text-[#4a2c11] leading-relaxed">{quirks}</p>
                                            </div>
                                        </div>
                                        <div className="bg-[#faead6] border-[2px] border-[#4a2c11] rounded-2xl px-4 py-3 text-center shadow-[2px_2px_0_0_#4a2c11]">
                                            <p className="text-[12px] font-bold text-[#4a2c11]">
                                                🎨 Character concept saved! Bring this sheet to your commission request.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="w-full text-[12px] font-bold text-[#4a2c11]/60 hover:text-[#4a2c11] transition-colors py-1"
                                        >
                                            ← Edit character
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-4">
                                        <div className="w-20 h-20 rounded-full border-[3px] border-[#4a2c11] bg-[#faead6] shadow-[3px_3px_0_0_#4a2c11] flex items-center justify-center text-4xl mx-auto select-none">
                                            🦊
                                        </div>
                                        <div>
                                            <p className="text-[17px] font-bold text-[#4a2c11]">Waiting to co-create with you!</p>
                                            <p className="text-[12px] font-medium text-[#4a2c11]/60 mt-1 leading-relaxed max-w-[240px] mx-auto">
                                                Choose options on the left and click "Plan Character Concept!" to watch Toffee sketch out initial concepts and details!
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<OCPlannerApp />);
    </script>
    @endverbatim

    <style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
        }
    </style>
</body>
</html>