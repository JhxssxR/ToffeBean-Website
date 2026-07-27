import { useEffect, useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { supabase } from '@/supabaseClient';
import axios from 'axios';
import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';

export default function AuthCallback() {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!supabase) {
            setError('Supabase client not initialized');
            return;
        }

        // Listen for auth state changes — this fires when Supabase
        // parses the access_token from the URL hash fragment
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (event === 'SIGNED_IN' && session) {
                    try {
                        // Send the access token to our Laravel backend
                        const response = await axios.post('/auth/supabase-sync', {
                            access_token: session.access_token,
                        });

                        // Hard redirect so that Laravel session cookies take full effect
                        window.location.href = response.data.redirect;
                    } catch (err: any) {
                        console.error('Error syncing session:', err);
                        setError(
                            err.response?.data?.message ||
                            err.message ||
                            'Failed to sync authentication state'
                        );
                    }
                }
            }
        );

        // Fallback: if no SIGNED_IN event fires within 8 seconds, show an error
        const timeout = setTimeout(() => {
            setError('Authentication timed out. Please try logging in again.');
        }, 8000);

        return () => {
            subscription.unsubscribe();
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <Head title="Authenticating - ToffeeBean" />
            <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df] autumn-overlay-bg">
                <ToffeeNavbar />

                <main className="flex-1 flex items-center justify-center px-6 py-12 relative">
                    <div className="w-full max-w-md bg-white border-[3px] border-[#4a2c11] rounded-[2rem] p-8 text-center shadow-brutal-lg">
                        {error ? (
                            <>
                                <div className="text-4xl mb-4">🍂</div>
                                <h2 className="text-2xl font-display text-red-600 mb-2">Login Error</h2>
                                <p className="text-sm font-medium opacity-80 mb-6">{error}</p>
                                <button
                                    onClick={() => router.visit('/login')}
                                    className="bg-white text-[#4a2c11] font-bold rounded-full px-6 py-2 border-[3px] border-[#4a2c11] shadow-brutal hover:-translate-y-0.5 transition-all"
                                >
                                    Back to Login
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="animate-spin text-4xl mb-4 inline-block">🍪</div>
                                <h2 className="text-2xl font-display mb-2">Preparing your workshop...</h2>
                                <p className="text-sm font-medium opacity-60">Syncing your account securely. Please wait.</p>
                            </>
                        )}
                    </div>
                </main>

                <ToffeeFooter />
            </div>
        </>
    );
}
