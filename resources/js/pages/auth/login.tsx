import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head, Link, useForm } from '@inertiajs/react';
import { User, Lock, LoaderCircle, Eye, EyeOff } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

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

    const [showPassword, setShowPassword] = useState(false);
    const [clientErrors, setClientErrors] = useState<{ email?: string; password?: string }>({});

    const validate = (): boolean => {
        const newErrors: { email?: string; password?: string } = {};

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

        setClientErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (!validate()) return;
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Sign In - ToffeeBean" />
            <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
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
                    <div className="w-full max-w-[540px] bg-white border-[3px] border-[#4a2c11] rounded-[2rem] p-8 relative shadow-brutal-lg">
                        {/* Cookie icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-14 h-14 rounded-full border-[3px] border-[#4a2c11] bg-[#faead6] flex items-center justify-center text-2xl shadow-brutal-sm">
                                🍪
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display text-[#4a2c11] text-center mb-3 tracking-wide">Toffee's Private Workshop Room</h1>
                        <p className="text-[13px] font-medium text-[#4a2c11]/60 text-center max-w-sm mx-auto leading-relaxed mb-6">
                            Welcome back! Log in to track your custom art commissions, manage your OC design plans, and check your order status.
                        </p>

                        {/* Tab switcher */}
                        <div className="flex rounded-full border-[3px] border-[#4a2c11] overflow-hidden mb-6 shadow-brutal-sm">
                            <span className="flex-1 py-2.5 text-center font-bold text-[13px] bg-gradient-to-r from-[#D2691E] to-[#E67E22] text-white cursor-default">
                                Resident Login
                            </span>
                            <Link href="/register" className="flex-1 py-2.5 text-center font-bold text-[13px] bg-white text-[#4a2c11] hover:bg-[#fff8f0] transition-colors">
                                Create Account
                            </Link>
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
                                    onChange={(e) => { setData('email', e.target.value); setClientErrors(prev => ({ ...prev, email: undefined })); }}
                                    placeholder="E.g., toffee@toffeebean.art"
                                    className={`w-full border-[2px] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30 ${(errors.email || clientErrors.email) ? 'border-red-400' : 'border-[#d4b896]'}`}
                                    autoFocus
                                />
                                {(clientErrors.email || errors.email) && <p className="text-red-500 text-[11px] font-semibold mt-1">{clientErrors.email || errors.email}</p>}
                            </div>

                            <div>
                                <label className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] mb-2">
                                    <Lock size={12} strokeWidth={3} />
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="login-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={data.password}
                                        onChange={(e) => { setData('password', e.target.value); setClientErrors(prev => ({ ...prev, password: undefined })); }}
                                        placeholder="••••••••"
                                        className={`w-full border-[2px] rounded-xl px-4 py-2.5 pr-11 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30 ${(errors.password || clientErrors.password) ? 'border-red-400' : 'border-[#d4b896]'}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a2c11]/40 hover:text-[#4a2c11] transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                                {(clientErrors.password || errors.password) && <p className="text-red-500 text-[11px] font-semibold mt-1">{clientErrors.password || errors.password}</p>}
                                
                                {canResetPassword && (
                                    <div className="flex justify-end mt-1">
                                        <Link
                                            href="/forgot-password"
                                            className="text-[11px] font-bold text-[#4a2c11]/70 hover:text-[#D2691E] transition-colors underline decoration-[#4a2c11]/30 hover:decoration-[#D2691E]"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                )}
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
                                className="w-full bg-gradient-to-r from-[#D2691E] to-[#E67E22] text-white font-bold rounded-full py-3.5 border-[3px] border-[#4a2c11] shadow-brutal hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center justify-center gap-2 text-[14px] disabled:opacity-60"
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                🍪 Enter Workshop Room
                            </button>
                        </form>

                        {status && <div className="mt-4 text-center text-sm font-medium text-green-600">{status}</div>}
                    </div>
                </main>

                <ToffeeFooter />
            </div>
        </>
    );
}
