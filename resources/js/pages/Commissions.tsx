import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Settings, Check, Hourglass, Calculator, Star } from 'lucide-react';

export default function Commissions({ initialCommissions = [] }: { initialCommissions?: any[] }) {
    const [addons, setAddons] = useState({ print: false, rush: false });
    const [quantity, setQuantity] = useState(1);
    
    // Form state
    const [form, setForm] = useState({
        species: '',
        character_name: '',
        theme: '',
        notes: '',
        client_email: '',
        client_social: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    interface StyleItem {
        id: string;
        title: string;
        desc: string;
        price: number;
        priceMax?: number;
        eta: string;
    }

    const defaultStyles: Record<string, StyleItem> = {
        sticker: { id: 'sticker', title: 'Cute Custom Sticker', desc: '...', price: 2.50, eta: '1-2 weeks' },
        reference: { id: 'reference', title: 'Character Reference Sheet', desc: '...', price: 10, priceMax: 50, eta: '2-3 weeks' },
        keyart: { id: 'keyart', title: 'Illustration/Poster', desc: '...', price: 3000, eta: '1-2 weeks' }
    };

    const styles: Record<string, StyleItem> = {};
    if (initialCommissions.length > 0) {
        initialCommissions.forEach(c => {
            styles[c.id.toString()] = {
                id: c.id.toString(),
                title: c.title,
                desc: c.description,
                price: parseFloat(c.base_price),
                // Handle price ranges if price_display has a dash
                priceMax: c.price_display?.includes('-') ? parseFloat(c.price_display.split('-')[1].replace(/[^0-9.]/g, '')) : undefined,
                eta: '1-2 weeks' // Hardcoded for now
            };
        });
    } else {
        Object.assign(styles, defaultStyles);
    }

    const firstStyleId = Object.keys(styles)[0] || 'sticker';
    const [style, setStyle] = useState(firstStyleId);

    const addonPrices = {
        print: 200,
        rush: 500
    };

    const selectedStyle = styles[style];
    const mult = style === 'sticker' ? quantity : 1;
    const basePrice = selectedStyle.price * mult;
    const basePriceMax = selectedStyle.priceMax ? selectedStyle.priceMax * mult : undefined;
    
    let totalAddons = 0;
    if (addons.print) totalAddons += addonPrices.print;
    if (addons.rush) totalAddons += addonPrices.rush;
    const grandTotal = basePrice + totalAddons;
    const grandTotalMax = basePriceMax ? basePriceMax + totalAddons : undefined;

    const formatMoney = (amount: number) => amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    const renderPrice = (min: number, max?: number) => {
        if (max !== undefined) return `${formatMoney(min)} - $${formatMoney(max)}`;
        return formatMoney(min);
    };

    const handleSubmit = async () => {
        if (!form.client_email) {
            alert('Please provide a contact email.');
            return;
        }
        
        setIsSubmitting(true);
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
        
        try {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    commission_id: parseInt(selectedStyle.id) || 1, // fallback for now if id is not a number, but in DB they are numbers
                    ...form,
                    quantity: mult,
                    addons: addons,
                    total_price: grandTotal
                })
            });

            if (res.ok) {
                setSubmitSuccess(true);
                setForm({ species: '', character_name: '', theme: '', notes: '', client_email: '', client_social: '' });
                setAddons({ print: false, rush: false });
                setQuantity(1);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (err) {
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
            <Head title="Commissions" />
            <ToffeeNavbar />
            
            <div className="w-full h-5 relative" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>
            
            <main className="max-w-[950px] mx-auto px-6 w-full flex-1 pt-10 pb-24">
                <div className="text-center mb-10 max-w-lg mx-auto">
                    <h1 className="text-3xl font-bold mb-3 flex items-center justify-center gap-3 text-[#4a2c11]">
                        Commission Configurator 🎨
                    </h1>
                    <p className="text-[14px] font-medium text-[#4a2c11]/70 leading-relaxed">
                        Turn your character concepts into professional digital cartoon artwork. Configure options, calculate costs immediately in PHP, and secure your place on Toffee's waitlist!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* LEFT COLUMN: FORM */}
                    <div className="flex-1 bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-6 shadow-brutal-lg">
                        <h2 className="text-lg font-bold flex items-center gap-2 mb-6 border-b-2 border-[#fef1df] pb-4">
                            <Settings width={20} height={20} className="text-[#E67E22]" />
                            CONFIGURATION OPTIONS
                        </h2>

                        <div className="space-y-4">
                            <h3 className="font-bold text-[13px] tracking-wider uppercase">1. ARTWORK STYLE CATEGORY</h3>
                            
                            {Object.values(styles).map((item) => {
                                const isSelected = style === item.id;
                                return (
                                    <div 
                                        key={item.id} 
                                        onClick={() => setStyle(item.id)}
                                        className={`border-[3px] border-[#4a2c11] rounded-[1.5rem] p-5 cursor-pointer transition-all relative ${
                                            isSelected ? 'bg-[#fef1df] shadow-brutal-sm translate-y-[-2px]' : 'bg-white hover:bg-[#fffcf7]'
                                        }`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-[17px]">{item.title}</h4>
                                            <div className="text-right flex items-center gap-2">
                                                <span className="font-bold text-[#E67E22] text-lg">${renderPrice(item.price, item.priceMax)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">USD</span></span>
                                                {isSelected && <Check width={20} height={20} className="text-[#f08967]" />}
                                            </div>
                                        </div>
                                        <p className="text-[13px] font-medium text-[#4a2c11]/80 leading-relaxed mb-4 max-w-[90%]">
                                            {item.desc}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1.5 bg-white border-[2px] border-[#4a2c11] px-3 py-1 rounded-full text-[10px] font-bold text-[#4a2c11]/70 tracking-wider">
                                                <Hourglass width={12} height={12} className="text-[#f08967]" />
                                                Est. Deliver: {item.eta}
                                            </span>
                                            {isSelected && item.id === 'sticker' && (
                                                <div className="flex items-center gap-2 bg-[#fef1df] border-[2px] border-[#4a2c11] rounded-full px-2 py-0.5">
                                                    <span className="text-[10px] font-bold uppercase ml-1">QTY:</span>
                                                    <button 
                                                        className="w-5 h-5 flex items-center justify-center bg-white rounded-full border-[2px] border-[#4a2c11] font-bold text-[12px] hover:bg-[#fffcf7] transition-colors"
                                                        onClick={(e) => { e.stopPropagation(); setQuantity(Math.max(1, quantity - 1)); }}
                                                    >-</button>
                                                    <span className="font-bold w-4 text-center text-[12px]">{quantity}</span>
                                                    <button 
                                                        className="w-5 h-5 flex items-center justify-center bg-white rounded-full border-[2px] border-[#4a2c11] font-bold text-[12px] hover:bg-[#fffcf7] transition-colors"
                                                        onClick={(e) => { e.stopPropagation(); setQuantity(quantity + 1); }}
                                                    >+</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold tracking-wider uppercase">Species (E.G. Fox)</label>
                                <input type="text" value={form.species} onChange={e => setForm({...form, species: e.target.value})} placeholder="Red panda/kitten..." className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold tracking-wider uppercase">Character Name</label>
                                <input type="text" value={form.character_name} onChange={e => setForm({...form, character_name: e.target.value})} placeholder="E.g. Maple" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors" />
                            </div>
                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-[11px] font-bold tracking-wider uppercase">Aesthetic & Theme</label>
                                <input type="text" value={form.theme} onChange={e => setForm({...form, theme: e.target.value})} placeholder="E.g. Warm pumpkin cafe overalls, gold keychains" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors" />
                            </div>
                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-[11px] font-bold tracking-wider uppercase">Description Notes & Specifications</label>
                                <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={4} placeholder="Details of poses, clothes, expressions, and accessories..." className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors resize-none"></textarea>
                            </div>
                        </div>

                        <div className="space-y-4 mt-10">
                            <h3 className="font-bold text-[13px] tracking-wider uppercase">2. EXTRA ADD-ONS</h3>
                            
                            <label className={`flex items-start gap-4 border-[3px] border-[#4a2c11] rounded-[1.5rem] p-5 cursor-pointer transition-colors ${addons.print ? 'bg-[#fef1df]' : 'bg-white hover:bg-[#fffcf7]'}`}>
                                <input 
                                    type="checkbox" 
                                    className="mt-1 w-5 h-5 accent-[#f08967]" 
                                    checked={addons.print} 
                                    onChange={(e) => setAddons({...addons, print: e.target.checked})} 
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-[15px]">Ship High-Res Physical Sticker Prints</h4>
                                        <span className="font-bold text-[14px]">+$2.00 <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">USD</span></span>
                                    </div>
                                    <p className="text-[12px] font-medium text-[#4a2c11]/70">We will print, laminate, and pack die-cut vinyl stickers of your delivery. Ships internationally!</p>
                                </div>
                            </label>

                            <label className={`flex items-start gap-4 border-[3px] border-[#4a2c11] rounded-[1.5rem] p-5 cursor-pointer transition-colors ${addons.rush ? 'bg-[#fef1df]' : 'bg-white hover:bg-[#fffcf7]'}`}>
                                <input 
                                    type="checkbox" 
                                    className="mt-1 w-5 h-5 accent-[#f08967]" 
                                    checked={addons.rush} 
                                    onChange={(e) => setAddons({...addons, rush: e.target.checked})} 
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-[15px]">Priority Rush Request ⚡</h4>
                                        <span className="font-bold text-[14px]">+$5.00 <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">USD</span></span>
                                    </div>
                                    <p className="text-[12px] font-medium text-[#4a2c11]/70">Bypasses the current waitlist. Sketch finalized within 48 hours, fully complete within 4 days.</p>
                                </div>
                            </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t-2 border-[#fef1df]">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold tracking-wider uppercase text-[#f08967] flex items-center gap-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    Contact Email
                                </label>
                                <input type="email" value={form.client_email} onChange={e => setForm({...form, client_email: e.target.value})} placeholder="your_name@example.com" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
                                    Instagram / Twitter (X)
                                </label>
                                <input type="text" value={form.client_social} onChange={e => setForm({...form, client_social: e.target.value})} placeholder="@your_username" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors" />
                            </div>
                        </div>

                        {submitSuccess ? (
                            <div className="w-full mt-8 bg-[#edfbf3] text-[#2ecc71] font-bold text-lg rounded-xl py-4 border-[3px] border-[#2ecc71] shadow-brutal text-center flex items-center justify-center gap-2">
                                <Check width={24} height={24} />
                                Order Submitted Successfully!
                            </div>
                        ) : (
                            <button onClick={handleSubmit} disabled={isSubmitting} className="w-full mt-8 bg-[#E67E22] text-white font-bold text-lg rounded-xl py-4 border-[3px] border-[#4a2c11] shadow-brutal hover:-translate-y-1 transition-transform disabled:opacity-70 disabled:hover:translate-y-0">
                                {isSubmitting ? 'Submitting...' : 'Confirm Custom Order & Enter Waitlist! 📦'}
                            </button>
                        )}
                    </div>

                    {/* RIGHT COLUMN: PRICE ESTIMATOR */}
                    <div className="w-full lg:w-[320px] shrink-0 space-y-6 sticky top-8 self-start">
                        <div className="bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-6 shadow-brutal-lg">
                            <h2 className="text-lg font-bold flex items-center gap-2 mb-6 border-b-2 border-[#fef1df] pb-4">
                                <Calculator width={20} height={20} className="text-[#E67E22]" />
                                PRICE ESTIMATOR
                            </h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-start">
                                    <span className="font-bold text-[14px] text-[#4a2c11]/80 max-w-[180px] leading-tight">
                                        {selectedStyle.title.replace('Cute Custom Sticker', 'Stickers Base Artwork').replace('Character Reference Sheet', 'Reference Base Artwork').replace('Illustration/Poster', 'Poster Base Artwork')} {style === 'sticker' ? `(x${quantity})` : ''}
                                    </span>
                                    <span className="font-bold text-[15px]">${renderPrice(basePrice, basePriceMax)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">USD</span></span>
                                </div>
                                
                                {addons.print && (
                                    <div className="flex justify-between items-start">
                                        <span className="font-bold text-[14px] text-[#4a2c11]/80 max-w-[180px] leading-tight">
                                            Physical Prints
                                        </span>
                                        <span className="font-bold text-[15px]">${formatMoney(addonPrices.print)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">USD</span></span>
                                    </div>
                                )}

                                {addons.rush && (
                                    <div className="flex justify-between items-start">
                                        <span className="font-bold text-[14px] text-[#4a2c11]/80 max-w-[180px] leading-tight">
                                            Priority Rush
                                        </span>
                                        <span className="font-bold text-[15px]">${formatMoney(addonPrices.rush)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">USD</span></span>
                                    </div>
                                )}
                            </div>

                            <div className="border-t-[3px] border-dashed border-[#4a2c11]/20 pt-6 mt-4">
                                <div className="flex justify-between items-end">
                                    <span className="font-bold text-[17px]">Grand Total Price</span>
                                    <div className="text-right">
                                        <span className="font-black text-2xl text-[#E67E22] tracking-tight">${renderPrice(grandTotal, grandTotalMax)}</span>
                                        <span className="block text-[10px] font-bold text-[#4a2c11]/60 uppercase mt-1 text-right">USD</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quality Box */}
                        <div className="bg-[#fef1df]/50 border-[3px] border-dashed border-[#d1baa3] rounded-[2rem] p-6 relative">
                            <div className="flex justify-center mb-3">
                                <div className="bg-white rounded-full border-[2px] border-[#4a2c11] p-1.5 shadow-brutal-sm text-[#ffce54]">
                                    <Star width={18} height={18} fill="currentColor" />
                                </div>
                            </div>
                            <h3 className="font-bold text-[12px] tracking-widest text-center uppercase mb-4">TOFFEE'S STUDIO QUALITY</h3>
                            <ul className="space-y-3 text-[11px] font-medium text-[#4a2c11]/70 leading-relaxed">
                                <li><strong className="text-[#4a2c11]">1. Unlimited sketches:</strong> Refine guidelines seamlessly! Toffee doesn't start coloring until you approve the sketch.</li>
                                <li><strong className="text-[#4a2c11]">2. Watermark removed:</strong> You get full high-res PNG downloads with and without sweet autumn leaf frames.</li>
                                <li><strong className="text-[#4a2c11]">3. Transparent queue:</strong> Access, watch, and monitor Toffee's draw progression in real-time in the next tab window!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <ToffeeFooter />
        </div>
    );
}
