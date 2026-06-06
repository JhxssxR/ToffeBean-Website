import { Link, usePage } from '@inertiajs/react';
import { Calendar, Home, Palette, ShoppingBag, SlidersHorizontal, Sparkles, User } from 'lucide-react';
import React from 'react';

export function ToffeeNavbar() {
    const { url } = usePage();

    const links = [
        { href: '/', label: 'Home', icon: Home, activeIconColor: 'text-white', defaultIconColor: 'text-[#f08967]' },
        { href: '/catalog', label: 'Catalog', icon: Palette, activeIconColor: 'text-white', defaultIconColor: 'text-[#ff7ab8]' },
        { href: '#', label: 'AI OC Planner', icon: Sparkles, activeIconColor: 'text-white', defaultIconColor: 'text-[#f08967]' },
        { href: '#', label: 'Commissions', icon: Calendar, activeIconColor: 'text-white', defaultIconColor: 'text-[#60a5fa]' },
        { href: '#', label: 'Order Tracker', icon: SlidersHorizontal, activeIconColor: 'text-white', defaultIconColor: 'text-[#4ade80]' },
        { href: '/login', label: 'Sign In', icon: User, activeIconColor: 'text-white', defaultIconColor: 'text-[#a78bfa]' },
    ];

    return (
        <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                <div className="w-10 h-10 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center bg-white shadow-brutal-sm">
                    {/* Paw Print SVG */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a2c11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
                <span className="ml-2 font-bold">toffeebean_</span><span className="text-[#ff7ab8]">*</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">
                {links.map((link) => {
                    const isActive = url === link.href;
                    const Icon = link.icon;
                    
                    return (
                        <Link 
                            key={link.label}
                            href={link.href} 
                            className={`px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 font-bold ${
                                isActive 
                                    ? 'bg-[#ff7ab8] text-white border-[3px] border-[#4a2c11] shadow-brutal-sm' 
                                    : 'bg-white/40 hover:bg-white text-[#4a2c11]'
                            }`}
                        >
                            <Icon size={18} strokeWidth={3} className={isActive ? link.activeIconColor : link.defaultIconColor} />
                            {link.label}
                        </Link>
                    );
                })}
            </div>
            
            <div>
                <button className="w-11 h-11 bg-white rounded-full border-[3px] border-[#4a2c11] shadow-brutal flex items-center justify-center hover:-translate-y-1 transition-transform">
                    <ShoppingBag size={20} strokeWidth={2.5} className="text-[#4a2c11]" />
                </button>
            </div>
        </nav>
    );
}
