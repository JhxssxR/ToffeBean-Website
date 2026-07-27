import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head, Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { ClipboardList, Package, Clock, CheckCircle, Sparkles, Pencil, ArrowRight, Eye, X, Bell } from 'lucide-react';

interface Order {
    id: number;
    character_name: string;
    theme: string;
    total_price: string;
    status: string;
    created_at: string;
    species: string;
    quantity: number;
    notes: string;
    client_social: string;
    commission?: { title: string; avatar: string };
    progress_image?: string | null;
    progress_message?: string | null;
}

interface OcPlan {
    id: number;
    species: string;
    vibe: string;
    colors: string;
    quirks: string;
    created_at: string;
}

interface PageProps {
    [key: string]: unknown;
    auth: {
        user: {
            name: string;
            email: string;
            role: string;
            avatar: string | null;
        };
    };
    orders: Order[];
    ocPlans: OcPlan[];
}



export default function CustomerDashboard() {
    const { auth, orders, ocPlans } = usePage<PageProps>().props;
    const user = auth.user;
    const avatarEmoji = user.avatar || '🦊';

    const [viewOrder, setViewOrder] = useState<Order | null>(null);

    const ordersWithUpdates = orders.filter(o => o.status === 'In Progress' && (o.progress_image || o.progress_message));

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
            
            <main className="max-w-[1200px] mx-auto px-6 w-full flex-1 pt-10 pb-24 relative">
                {/* Floating decorations */}
                <span className="absolute top-[8%] left-[1%] text-lg opacity-30 pointer-events-none" style={{ transform: 'rotate(-10deg)' }}>✦</span>
                <span className="absolute top-[30%] left-[0%] text-sm opacity-25 pointer-events-none">🍂</span>
                <span className="absolute top-[60%] right-[0%] text-base opacity-20 pointer-events-none">✦</span>
                <span className="absolute top-[15%] right-[1%] text-lg opacity-25 pointer-events-none" style={{ transform: 'rotate(12deg)' }}>🍪</span>

                {/* NOTIFICATION BANNER */}
                {ordersWithUpdates.length > 0 && (
                    <div className="bg-[#fff4e6] border-[3px] border-[#E67E22] rounded-[1.5rem] p-4 md:p-5 mb-8 flex items-start sm:items-center gap-4 hover:-translate-y-1 transition-transform" style={{ boxShadow: '6px 6px 0px 0px rgba(230, 126, 34, 1)' }}>
                        <div className="w-12 h-12 rounded-full bg-[#E67E22] text-white flex items-center justify-center shrink-0 border-[2px] border-[#4a2c11] animate-bounce">
                            <Bell size={24} />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-[#E67E22] text-[15px] mb-0.5">You have {ordersWithUpdates.length} order{ordersWithUpdates.length !== 1 ? 's' : ''} with new progress!</h3>
                            <p className="text-[13px] font-medium text-[#4a2c11]/80">The artist has uploaded a sneak peek or message for your in-progress commissions.</p>
                        </div>
                    </div>
                )}

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                    {/* 1. HERO WELCOME (Spans 2-3 cols) */}
                    <div className="bg-[#fff8f0] border-[3px] border-[#4a2c11] rounded-[2rem] p-6 md:p-8 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center gap-6 hover:-translate-y-1 transition-transform" style={{ boxShadow: '6px 6px 0px 0px rgba(74, 44, 17, 1)' }}>
                        <div 
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[4px] border-[#4a2c11] flex items-center justify-center text-5xl md:text-6xl select-none shrink-0 overflow-hidden bg-white"
                            style={{ 
                                boxShadow: '4px 4px 0px 0px rgba(74, 44, 17, 1)'
                            }}
                        >
                            {user.avatar && user.avatar.startsWith('http') ? (
                                <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                                avatarEmoji
                            )}
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-black text-[#4a2c11] mb-2 uppercase tracking-wide">
                                Welcome back, {user.name.split(' ')[0]}!
                            </h1>
                            <p className="text-[14px] font-semibold text-[#4a2c11]/70 mb-4">
                                Ready to bring more characters to life? 🎨
                            </p>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-widest border-[2px] border-[#4a2c11] bg-[#faead6]" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                🍪 {user.role}
                            </span>
                        </div>
                    </div>

                    {/* 2. QUICK ACTION (Spans 1 col) */}
                    <div className="bg-[#E67E22] border-[3px] border-[#4a2c11] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-1 transition-transform group cursor-pointer" onClick={() => window.location.href='/commissions'} style={{ boxShadow: '6px 6px 0px 0px rgba(74, 44, 17, 1)' }}>
                        <div className="w-14 h-14 bg-white rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center text-[#E67E22] group-hover:scale-110 transition-transform" style={{ boxShadow: '3px 3px 0px 0px rgba(74, 44, 17, 1)' }}>
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h3 className="font-black text-white text-lg uppercase tracking-wide">New Order</h3>
                            <p className="text-white/80 font-bold text-[11px] uppercase tracking-wider">Start a Commission</p>
                        </div>
                    </div>

                    {/* 3. ORDERS LIST (Spans 2-3 cols, row span 2) */}
                    <div className="bg-white border-[3px] border-[#4a2c11] rounded-[2rem] p-6 md:p-8 md:col-span-2 lg:col-span-3 lg:row-span-2 flex flex-col hover:-translate-y-1 transition-transform" style={{ boxShadow: '6px 6px 0px 0px rgba(74, 44, 17, 1)' }}>
                        <div className="flex items-center justify-between mb-6 border-b-[2px] border-dashed border-[#d4b896] pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#fef1df] rounded-lg border-[2px] border-[#4a2c11]" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                    <Package width={20} height={20} className="text-[#E67E22]" />
                                </div>
                                <h2 className="font-black text-[15px] tracking-widest uppercase">
                                    Your Orders
                                </h2>
                            </div>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#faead6] border-[2px] border-[#4a2c11] font-black text-[#4a2c11] text-sm" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                {orders.length}
                            </span>
                        </div>

                        <div className="flex-1">
                            {orders.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-10 opacity-70">
                                    <ClipboardList width={40} height={40} className="text-[#4a2c11]/30 mb-4" />
                                    <h3 className="font-bold text-xl text-[#4a2c11]/50 mb-2">No active orders</h3>
                                    <p className="text-[13px] font-medium text-[#4a2c11]/50 max-w-[200px]">Your future masterpieces will appear right here.</p>
                                </div>
                            ) : (
                                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                    {orders.map((order) => (
                                        <div key={order.id} className="bg-[#fef1df]/50 border-[2px] border-[#4a2c11] rounded-[1rem] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#faead6] transition-colors" style={{ boxShadow: '3px 3px 0px 0px rgba(74, 44, 17, 1)' }}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-white border-[2px] border-[#4a2c11] flex items-center justify-center text-xl select-none overflow-hidden shrink-0" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                                    {user.avatar && user.avatar.startsWith('http') ? (
                                                        <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                                    ) : (
                                                        avatarEmoji
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-[14px]">
                                                        {order.character_name || 'Unnamed Character'}
                                                        <span className="text-[10px] font-black text-[#4a2c11]/40 ml-2 uppercase tracking-wider">#{order.id}</span>
                                                    </h3>
                                                    <p className="text-[12px] font-semibold text-[#4a2c11]/60 mt-0.5">
                                                        {order.commission?.title || order.theme || 'Commission'}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t-[2px] border-dashed border-[#d4b896] sm:border-0 pt-3 sm:pt-0">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-[2px] border-[#4a2c11] ${order.status === 'Completed' ? 'bg-[#4ade80] text-[#14532d]' : order.status === 'In Progress' ? 'bg-[#fcd34d] text-[#78350f]' : 'bg-white text-[#4a2c11]'}`} style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                                    {order.status === 'Completed' ? <CheckCircle size={12} /> : <Clock size={12} />}
                                                    {order.status}
                                                </span>
                                                <button 
                                                    onClick={() => setViewOrder(order)}
                                                    className="p-2 bg-white rounded-lg border-[2px] border-[#4a2c11] text-[#4a2c11] hover:bg-[#E67E22] hover:text-white transition-colors" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}
                                                    title="View Details"
                                                >
                                                    <Eye size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 4. OC PLANNER TEASER (Spans 1 col) */}
                    <div className="bg-[#faead6] border-[3px] border-[#4a2c11] rounded-[2rem] p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform relative overflow-hidden" style={{ boxShadow: '6px 6px 0px 0px rgba(74, 44, 17, 1)' }}>
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f08967]/10 rounded-full"></div>
                        <div className="relative z-10 mb-4">
                            <div className="inline-flex p-2 bg-white rounded-lg border-[2px] border-[#4a2c11] mb-3" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                                <Pencil size={18} className="text-[#f08967]" />
                            </div>
                            <h3 className="font-black text-[13px] tracking-widest uppercase mb-1">OC Planner</h3>
                            <p className="text-[11px] font-semibold text-[#4a2c11]/60 leading-relaxed">Flesh out your character concepts before commissioning!</p>
                        </div>
                        <Link 
                            href="/oc-planner" 
                            className="w-full flex items-center justify-center gap-2 py-3 bg-white text-[#4a2c11] font-black uppercase tracking-wider text-[11px] rounded-xl border-[2px] border-[#4a2c11] hover:bg-[#4a2c11] hover:text-white transition-colors"
                            style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}
                        >
                            Open Planner <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* 5. SAVED CONCEPTS (Spans 1 col) */}
                    <div className="bg-white border-[3px] border-[#4a2c11] rounded-[2rem] p-6 hover:-translate-y-1 transition-transform flex flex-col" style={{ boxShadow: '6px 6px 0px 0px rgba(74, 44, 17, 1)' }}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                            <h3 className="font-black text-[13px] tracking-widest uppercase">Saved OCs</h3>
                        </div>
                        <div className="flex-1 space-y-3">
                            {!ocPlans || ocPlans.length === 0 ? (
                                <p className="text-[11px] font-semibold text-[#4a2c11]/50 italic">No concepts saved yet.</p>
                            ) : (
                                ocPlans.slice(0, 3).map(plan => (
                                    <div key={plan.id} className="p-3 bg-[#fef1df] rounded-xl border-[2px] border-[#d4b896]">
                                        <p className="font-bold text-[12px] truncate">{plan.species || 'Custom Species'}</p>
                                        <p className="text-[10px] font-semibold text-[#4a2c11]/60 truncate">{plan.vibe}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* 6. ACCOUNT FOOTER BAR (Spans full width) */}
                    <div className="bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-4 md:col-span-3 lg:col-span-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:-translate-y-1 transition-transform" style={{ boxShadow: '4px 4px 0px 0px rgba(74, 44, 17, 1)' }}>
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 justify-center md:justify-start">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-[#4a2c11]/40 uppercase tracking-widest">Email:</span>
                                <span className="font-bold text-[12px]">{user.email}</span>
                            </div>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#E67E22] cursor-pointer hover:underline underline-offset-4 decoration-[2px]">
                            Settings
                        </span>
                    </div>

                </div>
            </main>
            
            <ToffeeFooter />

            {viewOrder && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setViewOrder(null)}>
                    <div className="bg-[#fef1df] border-[3px] border-[#4a2c11] rounded-[2rem] p-6 max-w-lg w-full relative" style={{ boxShadow: '6px 6px 0px 0px rgba(74, 44, 17, 1)' }} onClick={e => e.stopPropagation()}>
                        <button onClick={() => setViewOrder(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white border-[2px] border-[#4a2c11] text-[#4a2c11]/60 hover:text-[#4a2c11] transition-colors" style={{ boxShadow: '2px 2px 0px 0px rgba(74, 44, 17, 1)' }}>
                            <X width={16} height={16} />
                        </button>
                        <h3 className="font-bold text-lg text-[#4a2c11] mb-4 flex items-center gap-2">
                            <Eye width={18} height={18} className="text-[#E67E22]" />
                            Order #{viewOrder.id}
                        </h3>
                        <div className="bg-white border-[2px] border-[#d4b896] rounded-2xl p-5" style={{ boxShadow: '2px 2px 0px 0px rgba(212, 184, 150, 1)' }}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Character Name</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">{viewOrder.character_name || 'Unnamed'}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Commission Type</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">{viewOrder.commission?.title || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Species</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">{viewOrder.species || '—'}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Theme / Vibe</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">{viewOrder.theme || '—'}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Quantity</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">×{viewOrder.quantity}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Status</p>
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${getStatusColor(viewOrder.status)} ${getStatusBg(viewOrder.status)}`}>
                                        {viewOrder.status === 'Completed' ? <CheckCircle width={12} height={12} /> : <Clock width={12} height={12} />}
                                        {viewOrder.status}
                                    </span>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Notes & References</p>
                                    <p className="text-[13px] font-semibold text-[#4a2c11] whitespace-pre-wrap">{viewOrder.notes || '—'}</p>
                                </div>
                                <div className="col-span-2 pt-3 border-t border-[#fef1df] flex justify-between items-center">
                                    <p className="text-[11px] font-medium text-[#4a2c11]/40">
                                        Ordered {new Date(viewOrder.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                    <p className="text-xl font-black text-[#E67E22]">₱{viewOrder.total_price}</p>
                                </div>
                            </div>
                            
                            {/* PROGRESS UPDATE SECTION IN MODAL */}
                            {viewOrder.status === 'In Progress' && (viewOrder.progress_image || viewOrder.progress_message) && (
                                <div className="mt-6 pt-6 border-t-[2px] border-dashed border-[#d4b896]">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Sparkles width={18} height={18} className="text-[#E67E22]" />
                                        <h4 className="font-black text-[14px] text-[#E67E22] uppercase tracking-wider">Latest Progress Update</h4>
                                    </div>
                                    <div className="bg-[#fff4e6] border-[2px] border-[#E67E22]/30 rounded-xl p-4">
                                        {viewOrder.progress_image && (
                                            <div className="mb-4">
                                                <img 
                                                    src={`/storage/${viewOrder.progress_image}`} 
                                                    alt="Progress Snapshot" 
                                                    className="w-full max-h-[300px] object-contain rounded-lg border-[2px] border-[#4a2c11] bg-white"
                                                />
                                            </div>
                                        )}
                                        {viewOrder.progress_message && (
                                            <div className="bg-white border-[2px] border-[#4a2c11]/10 rounded-lg p-3">
                                                <p className="text-[10px] font-bold text-[#E67E22] uppercase tracking-wider mb-1">Artist Note</p>
                                                <p className="text-[13px] font-medium text-[#4a2c11] whitespace-pre-wrap leading-relaxed">
                                                    "{viewOrder.progress_message}"
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
