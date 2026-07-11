/* eslint-disable */  
import { Link, usePage } from '@inertiajs/react';
import { Calendar, Home, Palette, ShoppingBag, SlidersHorizontal, Sparkles, User, Menu, X, Bell } from 'lucide-react';
import React, { useState } from 'react';
import { FallingLeaves } from './FallingLeaves';

export function ToffeeNavbar() {
    const { url, props } = usePage<any>();
    const auth = props.auth || { user: null };
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
                    <img src="/logo.png" alt="Toffee Bean" className="h-20 md:h-24 w-auto object-contain -my-6 origin-left" />
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
                    {auth.user ? (
                        <>
                            {auth.active_orders_count > 0 && (
                                <Link href={auth.user.role === 'admin' ? "/dashboard" : "/customer/dashboard"} className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11] hover:-translate-y-1 transition-transform">
                                    <Bell size={18} strokeWidth={3} className="text-[#D2691E]" />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#fff8f0] flex items-center justify-center text-[10px] font-bold text-white">
                                        {auth.active_orders_count}
                                    </span>
                                </Link>
                            )}
                            <Link href={auth.user.role === 'admin' ? "/dashboard" : "/customer/dashboard"} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 hover:bg-white text-[#4a2c11] font-bold transition-all">
                                <User size={18} strokeWidth={3} className="text-[#D2691E]" />
                                Dashboard
                            </Link>
                            <Link href="/logout" method="post" as="button" className="flex items-center gap-2 px-5 py-2.5 bg-[#E67E22] text-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm font-bold hover:-translate-y-1 transition-transform">
                                Logout
                            </Link>
                        </>
                    ) : (
                        <Link href="/login" className="flex items-center gap-2 px-6 h-[46px] bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal text-[#4a2c11] font-bold hover:bg-[#fffcf7] hover:-translate-y-1 transition-transform">
                            <User size={18} strokeWidth={3} className="text-[#D2691E]" />
                            Sign In
                        </Link>
                    )}
                </div>

                <div className="lg:hidden flex items-center gap-2">
                    {auth.user ? (
                        <>
                            {auth.active_orders_count > 0 && (
                                <Link href={auth.user.role === 'admin' ? "/dashboard" : "/customer/dashboard"} className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11]">
                                    <Bell size={18} strokeWidth={3} className="text-[#D2691E]" />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                                        {auth.active_orders_count}
                                    </span>
                                </Link>
                            )}
                            <Link href={auth.user.role === 'admin' ? "/dashboard" : "/customer/dashboard"} className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11]">
                                <User size={18} strokeWidth={3} className="text-[#D2691E]" />
                            </Link>
                        </>
                    ) : (
                        <Link href="/login" className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11]">
                            <User size={18} strokeWidth={3} className="text-[#D2691E]" />
                        </Link>
                    )}
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

                        {auth.user ? (
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="px-4 py-3 rounded-xl transition-all flex items-center gap-3 font-bold bg-[#ffe3c2] text-[#4a2c11]"
                            >
                                Logout
                            </Link>
                        ) : null}
                    </div>
                )}
            </nav>
        </>
    );
}
