import { Link, usePage } from '@inertiajs/react';
import { Calendar, Home, Palette, ShoppingBag, SlidersHorizontal, Sparkles, User, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { FallingLeaves } from './FallingLeaves';

export function ToffeeNavbar() {
    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home', icon: Home, activeIconColor: 'text-white', defaultIconColor: 'text-[#D2691E]' },
        { href: '/oc-planner', label: 'OC Planner', icon: Sparkles, activeIconColor: 'text-white', defaultIconColor: 'text-[#E67E22]' },
        { href: '/commissions', label: 'Commissions', icon: Calendar, activeIconColor: 'text-white', defaultIconColor: 'text-[#A0522D]' },
        { href: '/order-tracker', label: 'Order Tracker', icon: SlidersHorizontal, activeIconColor: 'text-white', defaultIconColor: 'text-[#8B4513]' },
    ];

    return (
        <>
            <FallingLeaves />
            <nav className="flex items-center justify-between px-5 md:px-10 py-5 w-full bg-[#fff8f0] relative z-50">
                <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center bg-white shadow-brutal-sm">
                        {/* Paw Print SVG */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a2c11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                    <span className="ml-2 font-bold">toffeebean_</span><span className="text-[#E67E22]">*</span>
                </Link>

                <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">
                    {links.map((link) => {
                        const isActive = url === link.href;
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`px-5 py-2.5 rounded-full transition-all flex items-center gap-2 font-bold ${isActive
                                        ? 'bg-gradient-to-r from-[#D2691E] to-[#E67E22] text-white border-[3px] border-[#4a2c11] shadow-brutal-sm'
                                        : 'bg-white/40 hover:bg-white text-[#4a2c11]'
                                    }`}
                            >
                                <Icon size={18} strokeWidth={3} className={isActive ? link.activeIconColor : link.defaultIconColor} />
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <Link href="/cart" className="flex items-center justify-center w-[46px] h-[46px] bg-white rounded-[16px] border-[3px] border-[#4a2c11] shadow-brutal text-[#4a2c11] hover:-translate-y-1 transition-transform">
                        <ShoppingBag size={20} strokeWidth={2.5} />
                    </Link>
                    <Link href="/login" className="flex items-center gap-2 px-6 h-[46px] bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal text-[#4a2c11] font-bold hover:bg-[#fffcf7] hover:-translate-y-1 transition-transform">
                        <User size={18} strokeWidth={3} className="text-[#D2691E]" />
                        Sign In
                    </Link>
                </div>

                <div className="lg:hidden flex items-center gap-2">
                    <Link href="/cart" className="flex items-center justify-center w-10 h-10 bg-white rounded-[12px] border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11]">
                        <ShoppingBag size={18} strokeWidth={2.5} />
                    </Link>
                    <Link href="/login" className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11]">
                        <User size={18} strokeWidth={3} className="text-[#D2691E]" />
                    </Link>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex items-center justify-center w-10 h-10 bg-white rounded-[12px] border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11]"
                    >
                        {isMobileMenuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full mt-2 left-5 right-5 bg-white border-[3px] border-[#4a2c11] shadow-brutal rounded-2xl p-4 z-40 flex flex-col gap-2">
                        {links.map((link) => {
                            const isActive = url === link.href;
                            const Icon = link.icon;

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-xl transition-all flex items-center gap-3 font-bold ${isActive
                                            ? 'bg-gradient-to-r from-[#D2691E] to-[#E67E22] text-white border-[3px] border-[#4a2c11] shadow-brutal-sm'
                                            : 'bg-[#fff8f0] hover:bg-[#ffe3c2] text-[#4a2c11] border-2 border-transparent'
                                        }`}
                                >
                                    <Icon size={20} strokeWidth={3} className={isActive ? link.activeIconColor : link.defaultIconColor} />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </nav>
        </>
    );
}
