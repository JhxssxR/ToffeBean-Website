<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account - ToffeeBean</title>
    <meta name="description" content="Register an account for Toffee's Private Workshop Room to reserve vinyl sticker packs, manage commissions, and access your patron dashboard.">

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

    <script>
        window.__CSRF_TOKEN__ = "{{ csrf_token() }}";
        window.__ERRORS__ = @json($errors->toArray());
        window.__OLD_INPUT__ = @json(session()->getOldInput());
    </script>

    @verbatim
    <script type="text/babel">
        const { useState, useEffect } = React;

        // Icons
        const Icons = {
            Home:        (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
            Palette:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
            Sparkles:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>,
            Calendar:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
            Sliders:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>,
            User:        (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            ShoppingBag: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
            Lock:        (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
            Mail:        (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
        };

        const avatarOptions = [
            { emoji: '🦊', label: 'Cozy Fox', color: '#f08967' },
            { emoji: '🐱', label: 'Calico Cat', color: '#f0a860' },
            { emoji: '🐿️', label: 'Squirrel', color: '#c4956a' },
            { emoji: '🦦', label: 'Sea Otter', color: '#60a5fa' },
            { emoji: '🐼', label: 'Red Panda', color: '#ff7ab8' },
            { emoji: '🌸', label: 'Sakura', color: '#fca5d0' },
            { emoji: '🐸', label: 'Frog', color: '#4ade80' },
        ];

        // Navbar
        function Navbar() {
            const links = [
                { href: '/', label: 'Home', icon: Icons.Home },
                { href: '/catalog', label: 'Catalog', icon: Icons.Palette },
                { href: '/oc-planner', label: 'AI OC Planner', icon: Icons.Sparkles },
                { href: '/commissions', label: 'Commissions', icon: Icons.Calendar },
                { href: '/order-tracker', label: 'Order Tracker', icon: Icons.Sliders },
            ];
            return (
                <nav className="flex items-center justify-between px-10 py-5 w-full bg-[#fff8f0]">
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                        <div className="w-10 h-10 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center bg-white shadow-brutal-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <a href="/" className="ml-2 font-bold hover:opacity-80">toffeebean_</a>
                    </div>

                    <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">
                        {links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a key={link.label} href={link.href} className="px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 font-bold bg-white/40 hover:bg-white text-[#4a2c11]">
                                    <Icon width={18} height={18} className="text-[#4a2c11]" />
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="w-11 h-11 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal flex items-center justify-center hover:-translate-y-1 transition-transform">
                            <Icons.ShoppingBag width={20} height={20} className="text-[#4a2c11]" />
                        </button>
                        <span className="flex items-center gap-2 px-6 py-2 bg-[#ff7ab8] rounded-full border-[3px] border-[#4a2c11] shadow-brutal text-white font-bold">
                            <Icons.User width={18} height={18} />
                            Sign In
                        </span>
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
                                    <span>toffeebean_</span>
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

        // Register Form
        function RegisterForm() {
            const [name, setName] = useState(window.__OLD_INPUT__?.name || '');
            const [email, setEmail] = useState(window.__OLD_INPUT__?.email || '');
            const [password, setPassword] = useState('');
            const [passwordConfirmation, setPasswordConfirmation] = useState('');
            const [selectedAvatar, setSelectedAvatar] = useState(0);
            const [agreedToTerms, setAgreedToTerms] = useState(false);
            const [submitting, setSubmitting] = useState(false);

            const errors = window.__ERRORS__ || {};

            function handleSubmit(e) {
                if (!agreedToTerms) {
                    e.preventDefault();
                    return;
                }
                setSubmitting(true);
            }

            return (
                <div className="w-full max-w-[540px] bg-white border-[3px] border-[#4a2c11] rounded-[2rem] p-8 relative shadow-[6px_6px_0_0_#4a2c11]">
                    {/* Cookie icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-full border-[3px] border-[#4a2c11] bg-[#faead6] shadow-[2px_2px_0_0_#4a2c11] flex items-center justify-center text-2xl">
                            🍪
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-center mb-2">Toffee's Private Workshop Room</h1>
                    <p className="text-[13px] font-medium text-[#4a2c11]/60 text-center max-w-sm mx-auto leading-relaxed mb-6">
                        Register an account to reserve vinyl sticker packs, simulate patron GCash wallets, or view Toffee's administrative controls panel.
                    </p>

                    {/* Tab switcher */}
                    <div className="flex rounded-full border-[3px] border-[#4a2c11] overflow-hidden mb-6 shadow-[3px_3px_0_0_#4a2c11]">
                        <a href="/login" className="flex-1 py-2.5 text-center font-bold text-[13px] bg-white text-[#4a2c11] hover:bg-[#fff8f0] transition-colors">
                            Resident Login
                        </a>
                        <span className="flex-1 py-2.5 text-center font-bold text-[13px] bg-[#ff7ab8] text-white cursor-default">
                            Create Account
                        </span>
                    </div>

                    {/* Register Form */}
                    <form method="POST" action="/register" onSubmit={handleSubmit} className="space-y-5">
                        <input type="hidden" name="_token" value={window.__CSRF_TOKEN__} />

                        <div>
                            <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                <Icons.User width={12} height={12} />
                                Desired Username
                            </label>
                            <input
                                id="register-name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="E.g., HoneyBunny"
                                className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                required
                                autoFocus
                            />
                            {errors.name && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.name[0]}</p>}
                        </div>

                        <div>
                            <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                <Icons.Mail width={12} height={12} />
                                Contact Email Address
                            </label>
                            <input
                                id="register-email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@gmail.com"
                                className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.email[0]}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                    <Icons.Lock width={12} height={12} />
                                    Password
                                </label>
                                <input
                                    id="register-password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                    required
                                />
                                {errors.password && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.password[0]}</p>}
                            </div>
                            <div>
                                <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                    <Icons.Lock width={12} height={12} />
                                    Confirm Password
                                </label>
                                <input
                                    id="register-password-confirm"
                                    name="password_confirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                    required
                                />
                                {errors.password_confirmation && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.password_confirmation[0]}</p>}
                            </div>
                        </div>

                        {/* Avatar selector */}
                        <div>
                            <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-3">
                                🎨 Choose Mascot Resident Avatar
                            </label>
                            <div className="flex gap-2 flex-wrap">
                                {avatarOptions.map((avatar, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => setSelectedAvatar(i)}
                                        className={`w-11 h-11 rounded-xl border-[2px] flex items-center justify-center text-xl transition-all ${
                                            selectedAvatar === i
                                                ? 'border-[#4a2c11] scale-110'
                                                : 'border-[#d4b896] hover:border-[#4a2c11]'
                                        }`}
                                        style={{
                                            backgroundColor: selectedAvatar === i ? avatar.color + '30' : '#fff8f0',
                                            boxShadow: selectedAvatar === i ? '2px 2px 0px 0px rgba(74, 44, 17, 1)' : 'none'
                                        }}
                                    >
                                        {avatar.emoji}
                                    </button>
                                ))}
                            </div>
                            {/* Hidden input for form submission if you want to save the avatar */}
                            <input type="hidden" name="avatar_id" value={selectedAvatar} />
                            
                            <p className="text-[11px] font-medium text-[#4a2c11]/50 mt-2">
                                Avatar preview: {avatarOptions[selectedAvatar].emoji} - <span className="text-[#ff7ab8] font-bold">{avatarOptions[selectedAvatar].label}</span>
                            </p>
                        </div>

                        {/* Terms checkbox */}
                        <div className="bg-[#fff8f0] rounded-xl px-4 py-3 border-[2px] border-[#f0e4d0]">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    className="mt-0.5 w-4 h-4 accent-[#ff7ab8] rounded"
                                />
                                <p className="text-[11px] font-medium text-[#4a2c11]/70 leading-relaxed">
                                    I agree that this is a simulated workspace sandbox. Registering is stored locally on my browser for high feedback testing! 🍪
                                </p>
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={submitting || !agreedToTerms}
                            className="w-full bg-[#ff7ab8] text-white font-bold rounded-full py-3.5 border-[3px] border-[#4a2c11] shadow-[3px_3px_0_0_#4a2c11] hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center justify-center gap-2 text-[14px] disabled:opacity-60"
                        >
                            🍪 Create Resident Guest Account
                        </button>

                        {/* Footer note */}
                        <p className="text-[10px] font-medium text-[#4a2c11]/40 text-center">
                            🔒 Fully session-based cookie sandbox sessions
                        </p>
                    </form>
                </div>
            );
        }

        // Main App
        function RegisterApp() {
            return (
                <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
                    <Navbar />

                    {/* Wave divider */}
                    <div className="w-full h-5 relative" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundPosition: 'center bottom'
                    }}></div>

                    <main className="flex-1 flex items-start justify-center px-6 py-12 relative">
                        {/* Floating decorations */}
                        <span style={{position:'absolute',top:'8%',left:'5%',fontSize:'1.1rem',opacity:0.3,transform:'rotate(-10deg)',pointerEvents:'none'}}>✦</span>
                        <span style={{position:'absolute',top:'25%',left:'3%',fontSize:'0.85rem',opacity:0.25,pointerEvents:'none'}}>🍂</span>
                        <span style={{position:'absolute',top:'55%',left:'7%',fontSize:'1rem',opacity:0.2,pointerEvents:'none'}}>✦</span>
                        <span style={{position:'absolute',bottom:'20%',left:'4%',fontSize:'1.1rem',opacity:0.25,transform:'rotate(15deg)',pointerEvents:'none'}}>🍪</span>
                        <span style={{position:'absolute',top:'10%',right:'5%',fontSize:'1rem',opacity:0.3,transform:'rotate(12deg)',pointerEvents:'none'}}>✦</span>
                        <span style={{position:'absolute',top:'40%',right:'3%',fontSize:'0.85rem',opacity:0.25,pointerEvents:'none'}}>🍂</span>
                        <span style={{position:'absolute',top:'65%',right:'6%',fontSize:'1.1rem',opacity:0.2,transform:'rotate(-8deg)',pointerEvents:'none'}}>✦</span>
                        <span style={{position:'absolute',bottom:'15%',right:'4%',fontSize:'1rem',opacity:0.25,pointerEvents:'none'}}>🍪</span>

                        <RegisterForm />
                    </main>

                    <Footer />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<RegisterApp />);
    </script>
    @endverbatim
</body>
</html>
