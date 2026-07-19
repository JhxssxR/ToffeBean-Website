/* eslint-disable */  
import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head, usePage } from '@inertiajs/react';
import React, { useState, useRef } from 'react';
import { Settings, Check, Hourglass, Calculator, Star, Paperclip, X } from 'lucide-react';

export default function Commissions({ initialCommissions = [] }: { initialCommissions?: any[] }) {
    const { props } = usePage<any>();
    const auth = props.auth || { user: null };

    const [addons, setAddons] = useState({ rush: false });
    const [quantity, setQuantity] = useState(1);
    const [referenceImages, setReferenceImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    // Form state
    const [form, setForm] = useState({
        species: '',
        character_name: '',
        theme: '',
        notes: '',
        client_email: auth.user ? auth.user.email : '',
        client_social: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

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
        reference: { id: 'reference', title: 'Character Reference Sheet', desc: '...', price: 25, priceMax: 50, eta: '2-3 weeks' },
        keyart: { id: 'keyart', title: 'Illustration/Poster', desc: '...', price: 15, priceMax: 25, eta: '1-2 weeks' }
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
        rush: 5.00
    };

    const selectedStyle = styles[style];
    const isSticker = style === 'sticker' || style === '1' || (selectedStyle && selectedStyle.title.toLowerCase().includes('sticker'));
    const mult = isSticker ? quantity : 1;
    const basePrice = selectedStyle.price * mult;
    const basePriceMax = selectedStyle.priceMax ? selectedStyle.priceMax * mult : undefined;
    
    let totalAddons = 0;
    if (addons.rush) totalAddons += addonPrices.rush;
    const grandTotal = basePrice + totalAddons;
    const grandTotalMax = basePriceMax ? basePriceMax + totalAddons : undefined;

    const formatMoney = (amount: number) => amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    const renderPrice = (min: number, max?: number) => {
        if (max !== undefined) return `${formatMoney(min)} - $${formatMoney(max)}`;
        return formatMoney(min);
    };

    const handleImageAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        const newFiles = Array.from(files).slice(0, 5 - referenceImages.length);
        const updatedFiles = [...referenceImages, ...newFiles];
        setReferenceImages(updatedFiles);

        const newPreviews = newFiles.map(file => URL.createObjectURL(file));
        setImagePreviews(prev => [...prev, ...newPreviews]);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const removeImage = (index: number) => {
        URL.revokeObjectURL(imagePreviews[index]);
        setReferenceImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        const errors: Record<string, string> = {};
        if (!form.client_email) {
            errors.client_email = 'Please provide a contact email.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.client_email)) {
            errors.client_email = 'Please enter a valid email address.';
        }
        if (!form.character_name.trim()) {
            errors.character_name = 'Please provide a character name.';
        }
        
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) return;
        
        setIsSubmitting(true);
        setSubmitError('');
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
        
        try {
            const formData = new FormData();
            formData.append('commission_id', (parseInt(selectedStyle.id) || 1).toString());
            formData.append('species', form.species);
            formData.append('character_name', form.character_name);
            formData.append('theme', form.theme);
            formData.append('notes', form.notes);
            formData.append('client_email', form.client_email);
            formData.append('client_social', form.client_social);
            formData.append('quantity', mult.toString());
            formData.append('addons', JSON.stringify(addons));
            formData.append('total_price', grandTotal.toString());
            referenceImages.forEach((file, i) => {
                formData.append(`reference_images[${i}]`, file);
            });

            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (res.ok) {
                setSubmitSuccess(true);
                setForm({ species: '', character_name: '', theme: '', notes: '', client_email: auth.user ? auth.user.email : '', client_social: '' });
                setAddons({ rush: false });
                setQuantity(1);
                imagePreviews.forEach(url => URL.revokeObjectURL(url));
                setReferenceImages([]);
                setImagePreviews([]);
            } else {
                setSubmitError('Something went wrong. Please try again.');
            }
        } catch (err) {
            setSubmitError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df] autumn-overlay-bg">
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
                                            {isSelected && (item.id === 'sticker' || item.id === '1' || item.title.toLowerCase().includes('sticker')) && (
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
                                <label className="text-[11px] font-bold tracking-wider uppercase">Character Name {formErrors.character_name && <span className="text-red-500 normal-case tracking-normal">— {formErrors.character_name}</span>}</label>
                                <input type="text" value={form.character_name} onChange={e => { setForm({...form, character_name: e.target.value}); if (formErrors.character_name) setFormErrors(prev => ({...prev, character_name: ''})); }} placeholder="E.g. Maple" className={`w-full bg-white border-[3px] rounded-xl px-4 py-3 font-medium outline-none transition-colors ${formErrors.character_name ? 'border-red-400 focus:border-red-500 bg-red-50/30' : 'border-[#4a2c11] focus:border-[#E67E22]'}`} />
                            </div>
                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-[11px] font-bold tracking-wider uppercase">Aesthetic & Theme</label>
                                <input type="text" value={form.theme} onChange={e => setForm({...form, theme: e.target.value})} placeholder="E.g. Warm pumpkin cafe overalls, gold keychains" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors" />
                            </div>
                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-[11px] font-bold tracking-wider uppercase">Description Notes & Specifications</label>
                                <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={4} placeholder="Details of poses, clothes, expressions, and accessories..." className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors resize-none"></textarea>
                            </div>

                            {/* Attach Reference Images */}
                            <div className="space-y-3 md:col-span-2">
                                <label className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
                                    <Paperclip width={14} height={14} className="text-[#E67E22]" />
                                    Reference Images (optional, max 5)
                                </label>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="hidden"
                                    onChange={handleImageAttach}
                                />
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={referenceImages.length >= 5}
                                    className="w-full border-[3px] border-dashed border-[#4a2c11]/30 rounded-xl py-4 px-4 flex items-center justify-center gap-2 font-bold text-[14px] text-[#4a2c11]/60 hover:border-[#E67E22] hover:text-[#E67E22] hover:bg-[#fef1df]/50 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <Paperclip width={18} height={18} />
                                    {referenceImages.length > 0 ? `Add More Images (${referenceImages.length}/5)` : 'Attach Reference Images'}
                                </button>
                                {imagePreviews.length > 0 && (
                                    <div className="flex flex-wrap gap-3 mt-3">
                                        {imagePreviews.map((src, i) => (
                                            <div key={i} className="relative group w-20 h-20 rounded-xl border-[3px] border-[#4a2c11] overflow-hidden shadow-brutal-sm">
                                                <img src={src} alt={`Reference ${i + 1}`} className="w-full h-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(i)}
                                                    className="absolute top-0.5 right-0.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X width={12} height={12} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4 mt-10">
                            <h3 className="font-bold text-[13px] tracking-wider uppercase">2. EXTRA ADD-ONS</h3>
                            

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
                                    Contact Email {formErrors.client_email && <span className="text-red-500 normal-case tracking-normal">— {formErrors.client_email}</span>}
                                </label>
                                <input type="email" value={form.client_email} onChange={e => { setForm({...form, client_email: e.target.value}); if (formErrors.client_email) setFormErrors(prev => ({...prev, client_email: ''})); }} placeholder="your_name@example.com" className={`w-full bg-white border-[3px] rounded-xl px-4 py-3 font-medium outline-none transition-colors ${formErrors.client_email ? 'border-red-400 focus:border-red-500 bg-red-50/30' : 'border-[#4a2c11] focus:border-[#E67E22]'}`} />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
                                    Instagram / Twitter (X)
                                </label>
                                <input type="text" value={form.client_social} onChange={e => setForm({...form, client_social: e.target.value})} placeholder="@your_username" className="w-full bg-white border-[3px] border-[#4a2c11] rounded-xl px-4 py-3 font-medium outline-none focus:border-[#E67E22] transition-colors" />
                            </div>
                        </div>

                        {submitError && (
                            <div className="w-full mt-4 bg-red-50 text-red-600 font-bold text-[14px] rounded-xl py-3 px-4 border-[3px] border-red-300 text-center flex items-center justify-center gap-2">
                                ⚠️ {submitError}
                            </div>
                        )}

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
                                        {selectedStyle.title.replace('Cute Custom Sticker', 'Stickers Base Artwork').replace('Character Reference Sheet', 'Reference Base Artwork').replace('Illustration/Poster', 'Poster Base Artwork')} {isSticker ? `(x${quantity})` : ''}
                                    </span>
                                    <span className="font-bold text-[15px]">${renderPrice(basePrice, basePriceMax)} <span className="text-[10px] text-[#4a2c11]/60 uppercase ml-0.5">USD</span></span>
                                </div>
                                


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
