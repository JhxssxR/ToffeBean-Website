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
