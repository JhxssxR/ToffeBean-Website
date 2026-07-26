import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head } from '@inertiajs/react';
import { supabase } from '@/supabaseClient';

export default function Login() {
    const handleGoogleLogin = async () => {
        if (!supabase) return;
        await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
    };

    return (
        <>
            <Head title="Sign In - ToffeeBean" />
            <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df] autumn-overlay-bg">
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
                        <p className="text-[13px] font-medium text-[#4a2c11]/60 text-center max-w-sm mx-auto leading-relaxed mb-8">
                            Welcome! Sign in with your Google account to track your custom art commissions, manage your OC design plans, and check your order status.
                        </p>

                        {/* Google Sign In Button */}
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full bg-white text-[#4a2c11] font-bold rounded-full py-4 border-[3px] border-[#4a2c11] shadow-brutal hover:-translate-y-0.5 active:translate-y-0 transition-all hover:shadow-brutal-lg flex items-center justify-center gap-3 text-[15px]"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Continue with Google
                        </button>

                        {/* Security note */}
                        <div className="bg-[#fff8f0] rounded-xl px-4 py-3 border-[2px] border-[#f0e4d0] mt-6">
                            <p className="text-[11px] font-medium text-[#4a2c11]/60 text-center">
                                🔒 We use Google's secure authentication — no passwords to remember!
                            </p>
                        </div>
                    </div>
                </main>

                <ToffeeFooter />
            </div>
        </>
    );
}
