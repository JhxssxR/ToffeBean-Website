import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { Head, Link, useForm } from '@inertiajs/react';
import { Home, Palette, Sparkles, Calendar, SlidersHorizontal, ShoppingBag, User, Lock, Mail, LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const avatarOptions = [
    { emoji: '🦊', label: 'Cozy Fox', color: '#f08967' },
    { emoji: '🐱', label: 'Calico Cat', color: '#f0a860' },
    { emoji: '🐿️', label: 'Squirrel', color: '#c4956a' },
    { emoji: '🦦', label: 'Sea Otter', color: '#60a5fa' },
    { emoji: '🐼', label: 'Red Panda', color: '#E67E22' },
    { emoji: '🌸', label: 'Sakura', color: '#fca5d0' },
    { emoji: '🐸', label: 'Frog', color: '#4ade80' },
];

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [selectedAvatar, setSelectedAvatar] = useState(0);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };



    return (
        <>
            <Head title="Create Account - ToffeeBean" />
            <div className="min-h-screen flex flex-col font-[Fredoka] text-[#4a2c11] bg-[#fef1df]">
                {/* Navbar */}
                <ToffeeNavbar />

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
                            <a href="/login" className="flex-1 py-2.5 text-center font-bold text-[13px] bg-white text-[#4a2c11] hover:bg-[#fff8f0] transition-colors">
                                Resident Login
                            </a>
                            <span className="flex-1 py-2.5 text-center font-bold text-[13px] bg-[#E67E22] text-white cursor-default">
                                Create Account
                            </span>
                        </div>

                        {/* Register Form */}
                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                    <User size={12} strokeWidth={3} />
                                    Desired Username
                                </label>
                                <input
                                    id="register-name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="E.g., HoneyBunny"
                                    className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                    required
                                    autoFocus
                                />
                                {errors.name && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                    <Mail size={12} strokeWidth={3} />
                                    Contact Email Address
                                </label>
                                <input
                                    id="register-email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="name@gmail.com"
                                    className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.email}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                        <Lock size={12} strokeWidth={3} />
                                        Password
                                    </label>
                                    <input
                                        id="register-password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                        required
                                    />
                                    {errors.password && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.password}</p>}
                                </div>
                                <div>
                                    <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                        <Lock size={12} strokeWidth={3} />
                                        Confirm Password
                                    </label>
                                    <input
                                        id="register-password-confirm"
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                        required
                                    />
                                    {errors.password_confirmation && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.password_confirmation}</p>}
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
                                <p className="text-[11px] font-medium text-[#4a2c11]/50 mt-2">
                                    Avatar preview: {avatarOptions[selectedAvatar].emoji} - <span className="text-[#E67E22] font-bold">{avatarOptions[selectedAvatar].label}</span>
                                </p>
                            </div>

                            {/* Terms checkbox */}
                            <div className="bg-[#fff8f0] rounded-xl px-4 py-3 border-[2px] border-[#f0e4d0]">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                        className="mt-0.5 w-4 h-4 accent-[#E67E22] rounded"
                                    />
                                    <p className="text-[11px] font-medium text-[#4a2c11]/70 leading-relaxed">
                                        I agree that this is a simulated workspace sandbox. Registering is stored locally on my browser for high feedback testing! 🍪
                                    </p>
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={processing || !agreedToTerms}
                                className="w-full bg-[#E67E22] text-white font-bold rounded-full py-3.5 border-[3px] border-[#4a2c11] hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center justify-center gap-2 text-[14px] disabled:opacity-60"
                                style={{ boxShadow: '3px 3px 0px 0px rgba(74, 44, 17, 1)' }}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                🍪 Create Resident Guest Account
                            </button>

                            {/* Footer note */}
                            <p className="text-[10px] font-medium text-[#4a2c11]/40 text-center">
                                🔒 Fully session-based cookie sandbox sessions
                            </p>
                        </form>
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
