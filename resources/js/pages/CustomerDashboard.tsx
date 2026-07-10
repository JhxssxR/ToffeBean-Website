import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react';
import { ClipboardList, Package, Clock, CheckCircle, Sparkles, Pencil, ArrowRight } from 'lucide-react';

interface Order {
    id: number;
    character_name: string;
    theme: string;
    total_price: string;
    status: string;
    created_at: string;
    species: string;
    quantity: number;
}

interface PageProps {
    auth: {
        user: {
            name: string;
            email: string;
            role: string;
            avatar: string | null;
        };
    };
    orders: Order[];
}

const avatarBgColors: Record<string, string> = {
    '🦊': '#f08967',
    '🐱': '#f0a860',
    '🐿️': '#c4956a',
    '🦦': '#60a5fa',
    '🐼': '#E67E22',
    '🌸': '#fca5d0',
    '🐸': '#4ade80',
};

export default function CustomerDashboard() {
    const { auth, orders } = usePage<PageProps>().props;
    const user = auth.user;
    const avatarEmoji = user.avatar || '🦊';
    const avatarColor = avatarBgColors[avatarEmoji] || '#f08967';

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Waiting': return 'text-[#f08967]';
            case 'In Progress': return 'text-[#4ade80]';
            case 'Completed': return 'text-[#2563eb]';
            default: return 'text-[#E67E22]';
        }
    };

    const getStatusBg = (status: string) => {
        switch (status) {
            case 'Waiting': return 'bg-[#f08967]/10';
            case 'In Progress': return 'bg-[#4ade80]/10';
            case 'Completed': return 'bg-[#2563eb]/10';
            default: return 'bg-[#E67E22]/10';
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
            <Head title="My Dashboard" />
            <ToffeeNavbar />
            
            <div className="w-full h-5 relative" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>
            
            <main className="max-w-[1100px] mx-auto px-6 w-full flex-1 pt-10 pb-24 relative">
                {/* Floating decorations */}
                <span className="absolute top-[8%] left-[1%] text-lg opacity-30 pointer-events-none" style={{ transform: 'rotate(-10deg)' }}>✦</span>
                <span className="absolute top-[30%] left-[0%] text-sm opacity-25 pointer-events-none">🍂</span>
                <span className="absolute top-[60%] right-[0%] text-base opacity-20 pointer-events-none">✦</span>
                <span className="absolute top-[15%] right-[1%] text-lg opacity-25 pointer-events-none" style={{ transform: 'rotate(12deg)' }}>🍪</span>

                {/* PROFILE HEADER CARD */}
                <div className="bg-white border-[3px] border-[#4a2c11] rounded-[2rem] p-6 md:p-8 mb-8" style={{ boxShadow: '6px 6px 0px 0px rgba(74, 44, 17, 1)' }}>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Avatar */}
                        <div 
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[4px] border-[#4a2c11] flex items-center justify-center text-5xl md:text-6xl select-none shrink-0"
                            style={{ 
                                backgroundColor: avatarColor + '30',
                                boxShadow: '4px 4px 0px 0px rgba(74, 44, 17, 1)'
                            }}
                        >
                            {avatarEmoji}
                        </div>
                        
                        {/* User info */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold text-[#4a2c11] mb-1">
                                Welcome back, {user.name}!
                            </h1>
                            <p className="text-[13px] font-medium text-[#4a2c11]/60 mb-3">
                                {user.email}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border-[2px] border-[#4a2c11] bg-[#faead6]" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                    🍪 {user.role}
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border-[2px] border-[#d4b896] bg-[#fff8f0] text-[#4a2c11]/70">
                                    📦 {orders.length} Order{orders.length !== 1 ? 's' : ''}
                                </span>
                            </div>
                        </div>

                        {/* Quick action */}
                        <div className="shrink-0">
                            <Link 
                                href="/commissions" 
                                className="flex items-center gap-2 px-6 py-3 bg-[#E67E22] text-white font-bold rounded-full border-[3px] border-[#4a2c11] hover:-translate-y-1 transition-transform text-[13px]"
                                style={{ boxShadow: '3px 3px 0px 0px rgba(74, 44, 17, 1)' }}
                            >
                                <Sparkles size={16} />
                                New Commission
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* LEFT COLUMN: Orders (spans 2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* Orders Section */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Package width={20} height={20} className="text-[#E67E22]" />
                                <h2 className="font-bold text-[13px] tracking-[0.15em] uppercase">
                                    Your Orders ({orders.length})
                                </h2>
                            </div>

                            {orders.length === 0 ? (
                                <div className="bg-white border-[3px] border-dashed border-[#d1baa3] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-[#fef1df] border-[3px] border-[#4a2c11] flex items-center justify-center" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                        <ClipboardList width={28} height={28} className="text-[#4a2c11]/40" />
                                    </div>
                                    <h3 className="font-bold text-xl text-[#4a2c11]/50">No Orders Yet</h3>
                                    <p className="text-[13px] font-medium text-[#4a2c11]/40 max-w-xs leading-relaxed">
                                        You haven't placed any commissions yet. When you do, they'll appear right here!
                                    </p>
                                    <Link href="/commissions" className="mt-2 bg-[#E67E22] text-white font-bold px-8 py-3 rounded-full border-[3px] border-[#4a2c11] hover:-translate-y-1 transition-transform text-sm" style={{ boxShadow: '3px 3px 0px 0px rgba(74, 44, 17, 1)' }}>
                                        Start a Commission →
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {orders.map((order) => (
                                        <div key={order.id} className="bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-5 hover:-translate-y-0.5 transition-all" style={{ boxShadow: '4px 4px 0px 0px rgba(74, 44, 17, 1)' }}>
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-[#faead6] border-[2px] border-[#4a2c11] flex items-center justify-center text-lg select-none" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                                        {avatarEmoji}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-[15px]">
                                                            {order.character_name || 'Unnamed Character'}
                                                            <span className="text-[12px] font-medium text-[#4a2c11]/50 ml-2">#{order.id}</span>
                                                        </h3>
                                                        <p className="text-[12px] font-medium text-[#4a2c11]/60">
                                                            {order.species || 'N/A'} • {order.theme || 'N/A'} • Qty: {order.quantity}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="font-bold text-lg text-[#E67E22]">₱{order.total_price}</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-between pt-3 border-t-2 border-[#fef1df]">
                                                <div className="flex items-center gap-2">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${getStatusColor(order.status)} ${getStatusBg(order.status)}`}>
                                                        {order.status === 'Completed' ? (
                                                            <CheckCircle width={12} height={12} />
                                                        ) : (
                                                            <Clock width={12} height={12} />
                                                        )}
                                                        {order.status}
                                                    </span>
                                                </div>
                                                <p className="text-[11px] font-medium text-[#4a2c11]/40">
                                                    {new Date(order.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Sidebar */}
                    <div className="space-y-6">

                        {/* OC Planner Section */}
                        <div className="bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-6 relative overflow-hidden" style={{ boxShadow: '4px 4px 0px 0px rgba(74, 44, 17, 1)' }}>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E67E22]/5 rounded-full -translate-y-8 translate-x-8"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#f08967]/5 rounded-full translate-y-6 -translate-x-6"></div>
                            
                            <div className="relative">
                                <div className="flex items-center gap-2 mb-4">
                                    <Pencil width={16} height={16} className="text-[#f08967]" />
                                    <h3 className="font-bold text-[12px] tracking-[0.15em] uppercase">OC Planner</h3>
                                </div>

                                <div className="bg-[#fef1df]/60 border-[2px] border-dashed border-[#d4b896] rounded-2xl p-5 flex flex-col items-center text-center gap-3 mb-4">
                                    <div className="w-14 h-14 rounded-full border-[3px] border-[#4a2c11] bg-[#faead6] flex items-center justify-center text-2xl select-none" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                        🍂
                                    </div>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">Design Your Dream OC</p>
                                    <p className="text-[11px] font-medium text-[#4a2c11]/50 leading-relaxed">
                                        Plan your character's species, vibe, colors, and quirks — then bring them to life with a commission!
                                    </p>
                                </div>

                                <Link 
                                    href="/oc-planner" 
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#faead6] text-[#4a2c11] font-bold rounded-full border-[2.5px] border-[#4a2c11] hover:-translate-y-0.5 transition-transform text-[13px]"
                                    style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}
                                >
                                    <Sparkles size={15} />
                                    Open OC Planner
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Account Information */}
                        <div className="bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-6" style={{ boxShadow: '4px 4px 0px 0px rgba(74, 44, 17, 1)' }}>
                            <h3 className="font-bold text-[12px] tracking-[0.15em] uppercase mb-4">Account Info</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div 
                                        className="w-9 h-9 rounded-lg border-[2px] border-[#4a2c11] flex items-center justify-center text-lg select-none shrink-0"
                                        style={{ backgroundColor: avatarColor + '30' }}
                                    >
                                        {avatarEmoji}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold tracking-wider uppercase text-[#4a2c11]/40">Avatar</p>
                                        <p className="font-bold text-[13px] capitalize">{user.avatar ? 'Active' : 'Default'}</p>
                                    </div>
                                </div>
                                <div className="border-t border-[#f0e4d0] pt-3">
                                    <p className="text-[10px] font-bold tracking-wider uppercase text-[#4a2c11]/40 mb-0.5">Name</p>
                                    <p className="font-bold text-[13px]">{user.name}</p>
                                </div>
                                <div className="border-t border-[#f0e4d0] pt-3">
                                    <p className="text-[10px] font-bold tracking-wider uppercase text-[#4a2c11]/40 mb-0.5">Email</p>
                                    <p className="font-bold text-[13px]">{user.email}</p>
                                </div>
                                <div className="border-t border-[#f0e4d0] pt-3">
                                    <p className="text-[10px] font-bold tracking-wider uppercase text-[#4a2c11]/40 mb-0.5">Role</p>
                                    <p className="font-bold text-[13px] capitalize">{user.role}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
            
            <ToffeeFooter />
        </div>
    );
}
