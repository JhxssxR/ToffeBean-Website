/* eslint-disable */
import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head, Link, useForm } from '@inertiajs/react';
import { User, Lock, Mail, LoaderCircle, Eye, EyeOff } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    avatar: string;
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
        avatar: '🦊',
    });

    const selectedAvatar = avatarOptions.findIndex(a => a.emoji === data.avatar) ?? 0;
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [clientErrors, setClientErrors] = useState<{ name?: string; email?: string; password?: string; password_confirmation?: string }>({});

    const validate = (): boolean => {
        const newErrors: { name?: string; email?: string; password?: string; password_confirmation?: string } = {};

        if (!data.name.trim()) {
            newErrors.name = 'Username is required.';
        } else if (data.name.trim().length < 2) {
            newErrors.name = 'Username must be at least 2 characters.';
        }

        if (!data.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!data.password) {
            newErrors.password = 'Password is required.';
        } else if (data.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters.';
        }

        if (!data.password_confirmation) {
            newErrors.password_confirmation = 'Please confirm your password.';
        } else if (data.password !== data.password_confirmation) {
            newErrors.password_confirmation = 'Passwords do not match.';
        }

        setClientErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const clearError = (field: string) => {
        setClientErrors(prev => ({ ...prev, [field]: undefined }));
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (!validate()) return;
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

                        <h1 className="text-4xl md:text-5xl font-display text-[#4a2c11] text-center mb-3 tracking-wide">Toffee's Private Workshop Room</h1>
                        <p className="text-[13px] font-medium text-[#4a2c11]/60 text-center max-w-sm mx-auto leading-relaxed mb-6">
                            Create an account to place custom art commissions, plan your original character designs, and track your orders all in one cozy space.
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
                                    onChange={(e) => { setData('name', e.target.value); clearError('name'); }}
                                    placeholder="E.g., HoneyBunny"
                                    className={`w-full border-[2px] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30 ${(errors.name || clientErrors.name) ? 'border-red-400' : 'border-[#d4b896]'}`}
                                    autoFocus
                                />
                                {(clientErrors.name || errors.name) && <p className="text-red-500 text-[11px] font-semibold mt-1">{clientErrors.name || errors.name}</p>}
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
                                    onChange={(e) => { setData('email', e.target.value); clearError('email'); }}
                                    placeholder="name@gmail.com"
                                    className={`w-full border-[2px] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30 ${(errors.email || clientErrors.email) ? 'border-red-400' : 'border-[#d4b896]'}`}
                                />
                                {(clientErrors.email || errors.email) && <p className="text-red-500 text-[11px] font-semibold mt-1">{clientErrors.email || errors.email}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                        <Lock size={12} strokeWidth={3} />
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="register-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={data.password}
                                            onChange={(e) => { setData('password', e.target.value); clearError('password'); }}
                                            placeholder="••••••••"
                                            className={`w-full border-[2px] rounded-xl px-4 py-2.5 pr-10 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30 ${(errors.password || clientErrors.password) ? 'border-red-400' : 'border-[#d4b896]'}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a2c11]/40 hover:text-[#4a2c11] transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                        </button>
                                    </div>
                                    {(clientErrors.password || errors.password) && <p className="text-red-500 text-[11px] font-semibold mt-1">{clientErrors.password || errors.password}</p>}
                                </div>
                                <div>
                                    <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                        <Lock size={12} strokeWidth={3} />
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="register-password-confirm"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={data.password_confirmation}
                                            onChange={(e) => { setData('password_confirmation', e.target.value); clearError('password_confirmation'); }}
                                            placeholder="••••••••"
                                            className={`w-full border-[2px] rounded-xl px-4 py-2.5 pr-10 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30 ${(errors.password_confirmation || clientErrors.password_confirmation) ? 'border-red-400' : 'border-[#d4b896]'}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a2c11]/40 hover:text-[#4a2c11] transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                        </button>
                                    </div>
                                    {(clientErrors.password_confirmation || errors.password_confirmation) && <p className="text-red-500 text-[11px] font-semibold mt-1">{clientErrors.password_confirmation || errors.password_confirmation}</p>}
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
                                            onClick={() => setData('avatar', avatar.emoji)}
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

                <ToffeeFooter />
            </div>
        </>
    );
}
