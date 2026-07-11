/* eslint-disable */  
import { Link, usePage } from '@inertiajs/react';
import { Calendar, Home, Palette, ShoppingBag, SlidersHorizontal, Sparkles, User, Menu, X, Bell, Eye, Clock, CheckCircle } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { FallingLeaves } from './FallingLeaves';

export function ToffeeNavbar() {
    const { url, props } = usePage<any>();
    const auth = props.auth || { user: null };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const notifRef = useRef<HTMLDivElement>(null);
    const notifMobileRef = useRef<HTMLDivElement>(null);

    // Close notification dropdown on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (notifRef.current && !notifRef.current.contains(e.target as Node) &&
                notifMobileRef.current && !notifMobileRef.current.contains(e.target as Node)) {
                setShowNotifications(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const activeOrders = (props.activeOrders || []) as any[];

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
                                <div className="relative" ref={notifRef}>
                                    <button onClick={() => setShowNotifications(!showNotifications)} className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11] hover:-translate-y-1 transition-transform">
                                        <Bell size={18} strokeWidth={3} className="text-[#D2691E]" />
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#fff8f0] flex items-center justify-center text-[10px] font-bold text-white">
                                            {auth.active_orders_count}
                                        </span>
                                    </button>
                                    {showNotifications && (
                                        <div className="absolute top-full right-0 mt-3 w-80 bg-white border-[3px] border-[#4a2c11] rounded-2xl shadow-[4px_4px_0px_#4a2c11] z-[60] overflow-hidden">
                                            <div className="px-4 py-3 border-b-[2px] border-[#fef1df] flex items-center justify-between">
                                                <h4 className="font-black text-[13px] text-[#4a2c11] flex items-center gap-2">
                                                    <Bell size={14} className="text-[#E67E22]" />
                                                    Notifications
                                                </h4>
                                                <span className="text-[10px] font-bold text-[#4a2c11]/40 bg-[#fef1df] px-2 py-0.5 rounded-full">{auth.active_orders_count}</span>
                                            </div>
                                            <div className="max-h-[280px] overflow-y-auto">
                                                {activeOrders.length === 0 ? (
                                                    <div className="px-4 py-8 text-center text-[#4a2c11]/40 font-bold text-[12px]">No new notifications 🍂</div>
                                                ) : (
                                                    activeOrders.map((order: any) => (
                                                        <a key={order.id} href={`/order-tracker?order=${order.id}`} className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#fef1df]/60 transition-colors text-left border-b border-[#fef1df] last:border-b-0 block">
                                                            <div className={`w-2 h-2 rounded-full shrink-0 ${order.status === 'Waiting' ? 'bg-rose-500' : order.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-[12px] font-bold text-[#4a2c11] truncate">Order #{order.id} — {order.commission_title || 'Commission'}</p>
                                                                <p className="text-[10px] font-medium text-[#4a2c11]/50">
                                                                    {order.status === 'Waiting' ? '⏳ Waiting for review' : order.status === 'Completed' ? '✅ Completed' : '🎨 In Progress'}
                                                                </p>
                                                            </div>
                                                            <Eye width={14} height={14} className="text-[#4a2c11]/30 shrink-0" />
                                                        </a>
                                                    ))
                                                )}
                                            </div>
                                            <div className="px-4 py-2.5 border-t-[2px] border-[#fef1df] bg-[#fffcf7]">
                                                <a href={auth.user.role === 'admin' ? '/dashboard' : '/customer/dashboard'} className="block w-full text-center text-[11px] font-bold text-[#E67E22] hover:text-[#d35400] transition-colors">View Dashboard →</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
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
                                <div className="relative" ref={notifMobileRef}>
                                    <button onClick={() => setShowNotifications(!showNotifications)} className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[#4a2c11]">
                                        <Bell size={18} strokeWidth={3} className="text-[#D2691E]" />
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                                            {auth.active_orders_count}
                                        </span>
                                    </button>
                                    {showNotifications && (
                                        <div className="absolute top-full right-0 mt-3 w-72 bg-white border-[3px] border-[#4a2c11] rounded-2xl shadow-[4px_4px_0px_#4a2c11] z-[60] overflow-hidden">
                                            <div className="px-4 py-3 border-b-[2px] border-[#fef1df] flex items-center justify-between">
                                                <h4 className="font-black text-[12px] text-[#4a2c11] flex items-center gap-2">
                                                    <Bell size={13} className="text-[#E67E22]" />
                                                    Notifications
                                                </h4>
                                            </div>
                                            <div className="max-h-[200px] overflow-y-auto">
                                                {activeOrders.length === 0 ? (
                                                    <div className="px-4 py-6 text-center text-[#4a2c11]/40 font-bold text-[11px]">No notifications 🍂</div>
                                                ) : (
                                                    activeOrders.map((order: any) => (
                                                        <a key={order.id} href={`/order-tracker?order=${order.id}`} className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-[#fef1df]/60 transition-colors text-left border-b border-[#fef1df] last:border-b-0 block">
                                                            <div className={`w-2 h-2 rounded-full shrink-0 ${order.status === 'Waiting' ? 'bg-rose-500' : order.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-[11px] font-bold text-[#4a2c11] truncate">Order #{order.id}</p>
                                                                <p className="text-[10px] font-medium text-[#4a2c11]/50">{order.status === 'Waiting' ? '⏳ Waiting' : order.status === 'Completed' ? '✅ Done' : '🎨 In Progress'}</p>
                                                            </div>
                                                        </a>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
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
