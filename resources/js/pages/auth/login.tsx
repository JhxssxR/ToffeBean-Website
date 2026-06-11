import { Head, Link, useForm } from '@inertiajs/react';
import { Home, Palette, Sparkles, Calendar, SlidersHorizontal, ShoppingBag, User, Lock, Mail, LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
}

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const fillAdmin = () => {
        setData({ email: 'toffee@toffeebean.art', password: 'toffeeadmin', remember: false });
    };

    const fillPatron = () => {
        setData({ email: 'patron@toffeebean.art', password: 'patronsandbox', remember: false });
    };

    const navLinks = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/catalog', label: 'Catalog', icon: Palette },
        { href: '/oc-planner', label: 'AI OC Planner', icon: Sparkles },
        { href: '/commissions', label: 'Commissions', icon: Calendar },
        { href: '/order-tracker', label: 'Order Tracker', icon: SlidersHorizontal },
    ];

    return (
        <>
            <Head title="Sign In - ToffeeBean" />
            <div className="min-h-screen flex flex-col font-[Fredoka] text-[#4a2c11] bg-[#fef1df]">
                {/* Navbar */}
                <nav className="flex items-center justify-between px-10 py-5 w-full bg-[#fff8f0]">
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                        <div className="w-10 h-10 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center bg-white" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a2c11" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <a href="/" className="ml-2 font-bold hover:opacity-80">toffeebean_</a>
                    </div>

                    <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a key={link.label} href={link.href} className="px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 font-bold bg-white/40 hover:bg-white text-[#4a2c11]">
                                    <Icon size={18} strokeWidth={3} className="text-[#4a2c11]" />
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="w-11 h-11 bg-white rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center hover:-translate-y-1 transition-transform" style={{ boxShadow: '4px 4px 0px 0px rgba(74, 44, 17, 1)' }}>
                            <ShoppingBag size={20} strokeWidth={2.5} className="text-[#4a2c11]" />
                        </button>
                        <span className="flex items-center gap-2 px-6 py-2 bg-[#ff7ab8] rounded-full border-[3px] border-[#4a2c11] text-white font-bold" style={{ boxShadow: '4px 4px 0px 0px rgba(74, 44, 17, 1)' }}>
                            <User size={18} strokeWidth={3} />
                            Sign In
                        </span>
                    </div>
                </nav>

                {/* Wave divider */}
                <div className="w-full h-5 relative" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'center bottom'
                }}></div>

                {/* Main Content */}
                <main className="flex-1 flex items-start justify-center px-6 py-12 relative">
                    {/* Floating decorations */}
                    <span className="absolute top-[8%] left-[5%] text-lg opacity-30 pointer-events-none" style={{ transform: 'rotate(-10deg)' }}>✦</span>
                    <span className="absolute top-[25%] left-[3%] text-sm opacity-25 pointer-events-none">🍂</span>
                    <span className="absolute top-[55%] left-[7%] text-base opacity-20 pointer-events-none">✦</span>
                    <span className="absolute bottom-[20%] left-[4%] text-lg opacity-25 pointer-events-none" style={{ transform: 'rotate(15deg)' }}>🍪</span>
                    <span className="absolute top-[10%] right-[5%] text-base opacity-30 pointer-events-none" style={{ transform: 'rotate(12deg)' }}>✦</span>
                    <span className="absolute top-[40%] right-[3%] text-sm opacity-25 pointer-events-none">🍂</span>
                    <span className="absolute top-[65%] right-[6%] text-lg opacity-20 pointer-events-none" style={{ transform: 'rotate(-8deg)' }}>✦</span>
                    <span className="absolute bottom-[15%] right-[4%] text-base opacity-25 pointer-events-none">🍪</span>

                    {/* Card */}
                    <div className="w-full max-w-[540px] bg-white border-[3px] border-[#4a2c11] rounded-[2rem] p-8 relative" style={{ boxShadow: '6px 6px 0px 0px rgba(74, 44, 17, 1)' }}>
                        {/* Cookie icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-14 h-14 rounded-full border-[3px] border-[#4a2c11] bg-[#faead6] flex items-center justify-center text-2xl" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                🍪
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold text-center mb-2">Toffee's Private Workshop Room</h1>
                        <p className="text-[13px] font-medium text-[#4a2c11]/60 text-center max-w-sm mx-auto leading-relaxed mb-6">
                            Register an account to reserve vinyl sticker packs, simulate patron GCash wallets, or view Toffee's administrative controls panel.
                        </p>

                        {/* Tab switcher */}
                        <div className="flex rounded-full border-[3px] border-[#4a2c11] overflow-hidden mb-6" style={{ boxShadow: '3px 3px 0px 0px rgba(74, 44, 17, 1)' }}>
                            <span className="flex-1 py-2.5 text-center font-bold text-[13px] bg-[#ff7ab8] text-white cursor-default">
                                Resident Login
                            </span>
                            <Link href={route('register')} className="flex-1 py-2.5 text-center font-bold text-[13px] bg-white text-[#4a2c11] hover:bg-[#fff8f0] transition-colors">
                                Create Account
                            </Link>
                        </div>

                        {/* Developer Sandbox Quick Accounts */}
                        <div className="mb-6">
                            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4a2c11]/50 mb-3">Developer Sandbox Quick Accounts</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="border-[2px] border-[#d4b896] rounded-xl p-3 space-y-2">
                                    <span className="inline-block bg-[#4ade80] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Toffee (Admin)</span>
                                    <p className="text-[11px] font-medium text-[#4a2c11]/70">Email: <span className="font-bold text-[#4a2c11]">toffee@toffeebean.art</span></p>
                                    <p className="text-[11px] font-medium text-[#4a2c11]/70">Pass: <span className="font-bold text-[#4a2c11]">toffeeadmin</span></p>
                                    <button onClick={fillAdmin} className="w-full mt-1 py-1.5 rounded-lg border-[2px] border-[#d4b896] text-[11px] font-bold text-[#4a2c11] hover:bg-[#fff8f0] transition-colors">
                                        Auto-Fill Artist (Admin)
                                    </button>
                                </div>
                                <div className="border-[2px] border-[#d4b896] rounded-xl p-3 space-y-2">
                                    <span className="inline-block bg-[#ff7ab8] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Patron (Customer)</span>
                                    <p className="text-[11px] font-medium text-[#4a2c11]/70">Client: <span className="font-bold text-[#4a2c11]">patron@toffeebean.art</span></p>
                                    <p className="text-[11px] font-medium text-[#4a2c11]/70">Pass: <span className="font-bold text-[#4a2c11]">patronsandbox</span></p>
                                    <button onClick={fillPatron} className="w-full mt-1 py-1.5 rounded-lg border-[2px] border-[#d4b896] text-[11px] font-bold text-[#4a2c11] hover:bg-[#fff8f0] transition-colors">
                                        Auto-Fill Patron (Client)
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                    <User size={12} strokeWidth={3} />
                                    Resident Username or Email
                                </label>
                                <input
                                    id="login-email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="E.g., toffee@toffeebean.art"
                                    className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                    required
                                    autoFocus
                                />
                                {errors.email && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                    <Lock size={12} strokeWidth={3} />
                                    Password Secret Key
                                </label>
                                <input
                                    id="login-password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                    required
                                />
                                {errors.password && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.password}</p>}
                            </div>

                            {/* Tip */}
                            <div className="bg-[#fff8f0] rounded-xl px-4 py-3 border-[2px] border-[#f0e4d0]">
                                <p className="text-[11px] font-medium text-[#4a2c11]/60 text-center">
                                    💡 Use the register tab to create custom sandbox client profiles instantly.
                                </p>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#ff7ab8] text-white font-bold rounded-full py-3.5 border-[3px] border-[#4a2c11] hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center justify-center gap-2 text-[14px] disabled:opacity-60"
                                style={{ boxShadow: '3px 3px 0px 0px rgba(74, 44, 17, 1)' }}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                🍪 Enter Workshop Room
                            </button>
                        </form>

                        {status && <div className="mt-4 text-center text-sm font-medium text-green-600">{status}</div>}
                    </div>
                </main>

                {/* Footer */}
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
            </div>
        </>
    );
}
