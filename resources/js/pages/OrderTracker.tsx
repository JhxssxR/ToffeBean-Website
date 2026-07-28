import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head } from '@inertiajs/react';
import React from 'react';
import { Sliders, Award, ClipboardList } from 'lucide-react';

interface Order {
    id: string;
    status: string;
    character_name: string | null;
    species: string | null;
    progress_message: string | null;
    progress_image: string | null;
    commission?: {
        title: string;
    };
    created_at: string;
}

function EmptySlots() {
    return (
        <div className="bg-white border-[3px] border-dashed border-[#d1baa3] rounded-[2rem] p-12 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#fef1df] border-[3px] border-[#4a2c11] flex items-center justify-center">
                <ClipboardList width={28} height={28} className="text-[#4a2c11]/40" />
            </div>
            <h3 className="font-bold text-xl text-[#4a2c11]/50">No Active Commissions Yet</h3>
            <p className="text-[13px] font-medium text-[#4a2c11]/40 max-w-xs leading-relaxed">
                When you submit a commission order, your progress will appear here in real-time so you can track every step!
            </p>
            <a href="/commissions" className="mt-2 bg-[#E67E22] text-white font-bold px-8 py-3 rounded-full border-[3px] border-[#4a2c11] shadow-brutal hover:-translate-y-1 transition-transform text-sm">
                Submit a Commission →
            </a>
        </div>
    );
}

export default function OrderTracker({ activeOrders = [] }: { activeOrders: Order[] }) {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df] autumn-overlay-bg">
            <Head title="Order Tracker" />
            <ToffeeNavbar />
            
            <div className="w-full h-5 relative" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>
            
            <main className="max-w-[950px] mx-auto px-6 w-full flex-1 pt-10 pb-24">
                
                <div className="text-center mb-10 max-w-lg mx-auto">
                    <h1 className="text-3xl font-bold mb-3 text-[#4a2c11]">
                        ToffeeBean Live Queue Tracker 🍂
                    </h1>
                    <p className="text-[14px] font-medium text-[#4a2c11]/70 leading-relaxed">
                        Monitor your ongoing illustration progress. See exactly where your order stands under Toffee's waitlist slots below!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* LEFT COLUMN: Active Slots */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-5">
                            <Sliders width={20} height={20} className="text-[#E67E22]" />
                            <h2 className="font-bold text-[15px] tracking-widest uppercase">
                                Active Commission Slots ({activeOrders.length})
                            </h2>
                        </div>

                        {activeOrders.length === 0 ? (
                            <EmptySlots />
                        ) : (
                            <div className="space-y-6">
                                {activeOrders.map(order => (
                                    <div key={order.id} className="bg-white border-[3px] border-[#4a2c11] rounded-[2rem] p-6 shadow-brutal-lg flex flex-col md:flex-row gap-6">
                                        <div className="w-full md:w-1/3 aspect-square bg-[#fef1df] rounded-xl border-2 border-[#4a2c11] overflow-hidden flex items-center justify-center relative shadow-inner">
                                            {order.progress_image ? (
                                                <img src={`/storage/${order.progress_image}`} alt={order.character_name || "Order Progress"} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="text-[#4a2c11]/40 text-center px-4">
                                                    <Award width={32} height={32} className="mx-auto mb-2 opacity-50" />
                                                    <p className="text-[11px] font-bold tracking-widest uppercase">No Preview Yet</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <span className="inline-block px-3 py-1 bg-[#4ade80] text-[#161413] text-[10px] font-bold tracking-widest uppercase rounded-full border-2 border-[#161413] mb-2 shadow-brutal-sm">
                                                        {order.status}
                                                    </span>
                                                    <h3 className="font-bold text-xl text-[#4a2c11] leading-tight mt-1">
                                                        {order.character_name || "Mystery Character"} <span className="text-[#E67E22]">{order.species ? `(${order.species})` : ""}</span>
                                                    </h3>
                                                    <p className="text-[13px] font-bold text-[#4a2c11]/60 mt-1">
                                                        {order.commission?.title || "Custom Commission"}
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {order.progress_message && (
                                                <div className="mt-4 bg-[#fef1df]/50 border-2 border-dashed border-[#d1baa3] rounded-xl p-4">
                                                    <p className="text-[13px] font-medium text-[#4a2c11]/80 italic">"{order.progress_message}"</p>
                                                </div>
                                            )}
                                            
                                            <div className="mt-auto pt-5">
                                                <div className="w-full h-3 bg-[#e8d5c0] rounded-full overflow-hidden border-2 border-[#4a2c11]">
                                                    <div className="h-full bg-gradient-to-r from-[#E67E22] to-[#ffce54] w-[50%] border-r-2 border-[#4a2c11]"></div>
                                                </div>
                                                <div className="flex justify-between mt-2 text-[10px] font-bold tracking-widest uppercase text-[#4a2c11]/60">
                                                    <span>Started</span>
                                                    <span className="text-[#E67E22]">In Progress</span>
                                                    <span>Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: Status + Rights */}
                    <div className="w-full lg:w-[320px] shrink-0 space-y-5">
                        
                        {/* Waitlist Live Status */}
                        <div className="bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-6 shadow-brutal-lg">
                            <h2 className="font-bold text-[13px] tracking-widest uppercase mb-5">
                                Waitlist Live Status
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-3 h-3 rounded-full bg-[#4ade80] mt-1 shrink-0 shadow-[0_0_6px_rgba(74,222,128,0.6)]"></div>
                                    <div>
                                        <p className="font-bold text-[13px]">Studio Intake Status: <span className="text-[#4ade80]">OPEN</span></p>
                                        <p className="text-[11px] font-medium text-[#4a2c11]/60 mt-0.5">Toffee currently accepting new custom characters or sticker aresel!</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-3 h-3 rounded-full bg-[#ffce54] mt-1 shrink-0 shadow-[0_0_6px_rgba(255,206,84,0.6)]"></div>
                                    <div>
                                        <p className="font-bold text-[13px]">Active Slots Filling: <span className="text-[#f08967]">0 / 15</span></p>
                                        <p className="text-[11px] font-medium text-[#4a2c11]/60 mt-0.5">Average waitlist processing duration is 12 days per design.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-5 border-t-2 border-[#fef1df]">
                                <h3 className="font-bold text-[11px] tracking-widest uppercase mb-3 text-[#4a2c11]/70">Queue Policy Guidelines:</h3>
                                <ul className="space-y-2 text-[11px] font-medium text-[#4a2c11]/60 leading-relaxed">
                                    <li>* Toffee updates working slots every Tuesday and Friday.</li>
                                    <li>* Sketches are revealed directly to customers for feedback before rendering colors.</li>
                                    <li>* Finished high-definition downloads are provided through a private storage drive link.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Certified Workshop Rights */}
                        <div className="bg-[#fef1df]/60 border-[2.5px] border-dashed border-[#c4a882] rounded-[1.5rem] p-6 relative">
                            <div className="flex justify-center mb-3">
                                <div className="w-10 h-10 rounded-full bg-white border-[2.5px] border-[#4a2c11] flex items-center justify-center shadow-brutal-sm">
                                    <Award width={20} height={20} className="text-[#f08967]" />
                                </div>
                            </div>
                            <h3 className="font-bold text-[12px] tracking-widest text-center uppercase mb-4">Certified Workshop Rights</h3>
                            <p className="text-[11px] font-medium text-[#4a2c11]/70 text-center leading-relaxed">
                                Every design has full personal print rights! Print your custom stickers, include them in digital streams, use them as avatars or print stickers as gifts for your nearest OC friends.
                            </p>
                        </div>

                    </div>
                </div>

            </main>
            
            <ToffeeFooter />
        </div>
    );
}
