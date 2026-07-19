import { ToffeeButton } from '@/components/ToffeeButton';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { Head, router } from '@inertiajs/react';
import React from 'react';

function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-12 pt-12 pb-8">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#f08967] text-white px-4 py-1.5 rounded-full border-[3px] border-[#4a2c11] shadow-brutal-sm text-[11px] font-bold uppercase tracking-wider">
                    🍁 Digital Art & Stickers Workshop
                </div>

                <h1 className="text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight">
                    <span className="text-[#4a2c11]">Cute illustrations,</span><br />
                    <span className="text-[#E67E22]">creativity filled!</span>
                </h1>

                <p className="text-base font-medium leading-relaxed max-w-md text-[#4a2c11]/80">
                    Welcome to the cozy autumn corner of <span className="text-[#4a2c11] font-bold">**ToffeeBean**</span>! We specialize in custom kiss-cut sticker sheets, character guides, and expressive illustrations made to help clients express their Original Characters (OCs) affordably.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <ToffeeButton variant="secondary" onClick={() => router.visit('/oc-planner')}>OC Design Planner &rarr;</ToffeeButton>
                    <ToffeeButton variant="primary" onClick={() => router.visit('/commission')}>Commission &rarr;</ToffeeButton>
                </div>
            </div>

            <div className="flex-1 w-full">
                <div className="rounded-[2rem] border-[4px] border-[#4a2c11] shadow-brutal-lg overflow-hidden bg-[#fffdfa] w-full h-[320px] md:h-[400px]">
                    <img src="/images/hero-banner.png" alt="Autumn Sketch Club" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
}

interface HomeServiceItem {
    id: number;
    title: string;
    description?: string;
    desc?: string;
    img: string;
    gallery?: string[];
    is_active: boolean;
    sort_order: number;
}

function Collections({ items = [] }: { items?: HomeServiceItem[] }) {
    const [selectedGallery, setSelectedGallery] = React.useState<{title: string, images: string[]} | null>(null);
    const [enlargedImageIndex, setEnlargedImageIndex] = React.useState<number | null>(null);

    return (
        <section className="space-y-6 pt-16 relative">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                MY SERVICES! <span className="text-[#E67E22] text-xl">⭐</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, i) => {
                    const gallery = item.gallery || [];
                    return (
                    <div
                        key={i}
                        onClick={() => gallery.length > 0 && setSelectedGallery({ title: item.title, images: gallery })}
                        className={`bg-[#fffcf7] border-[4px] border-[#4a2c11] rounded-[2rem] p-4 shadow-brutal-lg flex flex-col group transition-transform ${gallery.length > 0 ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                    >
                        <div className="rounded-2xl border-[3px] border-[#4a2c11] overflow-hidden h-[200px] mb-4 bg-white relative">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {gallery.length > 0 && (
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <span className="bg-white/90 text-[#4a2c11] font-bold px-4 py-2 rounded-full border-[2px] border-[#4a2c11] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        View Gallery
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-between items-end px-2 pb-1">
                            <div>
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="text-[13px] font-medium text-[#4a2c11]/60 mt-0.5">{item.description || item.desc}</p>
                            </div>
                            <span className={`${gallery.length > 0 ? 'text-[#E67E22]' : 'text-[#4a2c11]/30'} font-bold text-xl leading-none`}>&rarr;</span>
                        </div>
                    </div>
                )})}
            </div>

            {/* Image Gallery Modal */}
            {selectedGallery && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedGallery(null)}></div>
                    <div className="relative bg-[#fef1df] border-[4px] border-[#4a2c11] rounded-[2rem] shadow-[8px_8px_0_0_rgba(74,44,17,1)] max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center p-4 md:p-6 border-b-[4px] border-[#4a2c11] bg-white shrink-0">
                            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                {selectedGallery.title} <span className="text-[#E67E22]">🎨</span>
                            </h3>
                            <button
                                onClick={() => setSelectedGallery(null)}
                                className="w-10 h-10 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center hover:bg-[#e67e22] hover:text-white hover:border-[#e67e22] transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                        <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[#fffcf7] md:gap-8">
                            {selectedGallery.images.map((imgSrc, i) => (
                                <div key={i} className="relative group cursor-pointer aspect-[3/4]">
                                    {/* Default State: Cropped inside the box */}
                                    <div className="absolute inset-0 rounded-[1.5rem] border-[4px] border-[#4a2c11] overflow-hidden bg-[#fffcf7] shadow-[4px_4px_0_0_rgba(74,44,17,1)] transition-all duration-300 group-hover:opacity-0">
                                        <img src={imgSrc} alt={`${selectedGallery.title} ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Hover State: Popped out, full uncropped image */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] md:w-[140%] md:h-[140%] z-40 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center justify-center drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)] scale-95 group-hover:scale-100">
                                        <img src={imgSrc} alt={`${selectedGallery.title} ${i + 1} full`} className="max-w-full max-h-full object-contain rounded-xl border-[4px] border-[#4a2c11] bg-[#fffcf7]" />
                                        
                                        {/* Magnifying Glass Indicator */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-xl transition-colors">
                                            <div className="w-12 h-12 bg-white/95 rounded-full border-[3px] border-[#4a2c11] flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a2c11" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Invisible clickable area on top */}
                                    <div className="absolute inset-0 z-50" onClick={() => setEnlargedImageIndex(i)}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Enlarged Image Lightbox (Slider) */}
            {enlargedImageIndex !== null && selectedGallery && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8" onClick={(e) => {
                    if (e.target === e.currentTarget) setEnlargedImageIndex(null);
                }}>
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setEnlargedImageIndex(null)}></div>
                    
                    {/* Previous Button */}
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setEnlargedImageIndex(prev => prev === 0 ? selectedGallery.images.length - 1 : prev! - 1);
                        }}
                        className="absolute left-2 md:left-8 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 border-[3px] border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm transform hover:scale-110"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <img key={enlargedImageIndex} src={selectedGallery.images[enlargedImageIndex]} alt="Enlarged artwork" className="relative z-10 max-w-full max-h-[85vh] md:max-h-full object-contain rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200" />
                    
                    {/* Next Button */}
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setEnlargedImageIndex(prev => prev === selectedGallery.images.length - 1 ? 0 : prev! + 1);
                        }}
                        className="absolute right-2 md:right-8 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 border-[3px] border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm transform hover:scale-110"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    {/* Close Button */}
                    <button
                        onClick={() => setEnlargedImageIndex(null)}
                        className="absolute top-4 right-4 md:top-8 md:right-8 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white/30 bg-black/50 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            )}
        </section>
    );
}

function PromoBanner() {
    return (
        <section className="bg-[#faead6] border-[4px] border-[#4a2c11] rounded-[2rem] p-8 md:p-10 shadow-brutal-lg relative overflow-hidden mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="max-w-3xl space-y-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        Is this what you're here for? <span className="text-2xl">😏</span>
                    </h2>
                    <div className="bg-[#fef1df]/60 p-5 rounded-xl">
                        <p className="text-[15px] font-medium leading-relaxed text-[#4a2c11]/80">
                            It's <span className="text-[#4a2c11] font-bold">**HER**</span>. The calico, slightly mischievous custom feline squadmate plushie. Equipped with custom bones stitching details, skeletal pattern elements, and multiple accessories. Fully available now for online Preorder reservations!
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3 shrink-0 md:w-64">
                    <ToffeeButton variant="primary" className="px-10 py-4 w-full text-lg">Check it out HERE</ToffeeButton>
                    <span className="text-[11px] font-semibold text-[#4a2c11]/60 text-center leading-tight">Only ₱2,400.00 PHP — Soft standard materials</span>
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="bg-white border-[4px] border-[#4a2c11] rounded-[2rem] p-8 md:p-12 shadow-brutal-lg flex flex-col md:flex-row gap-12 items-center mt-16 mb-24">
            <div className="relative shrink-0">
                <div className="w-56 h-56 rounded-full border-[4px] border-[#4a2c11] shadow-brutal overflow-hidden bg-[#fffcf7]">
                    <img src="/images/artist.jpg" alt="Toffee" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#ffce54] text-[#4a2c11] text-[11px] font-bold px-5 py-1.5 rounded-full border-[3px] border-[#4a2c11] tracking-wider shadow-brutal-sm">
                    ARTIST
                </div>
            </div>

            <div className="space-y-5">
                <h2 className="text-3xl font-bold uppercase text-[#E67E22] flex items-center gap-2">
                    HEY THERE! I'M TOFFEE! <span className="text-2xl">🧑‍🎨</span>
                </h2>
                <div className="space-y-4 text-[15px] font-medium text-[#4a2c11]/80 leading-relaxed">
                    <p>
                        I'm the artist and organizer behind ToffeeBean! I create soft, super-colorful, and character-packed digital illustrations inspired by kemono and cute pastel cartoon designs. My absolute core goal is to make custom illustrations that feel lively, highly expressive, emotional, and easy to connect with.
                    </p>
                    <p>
                        Whether you're looking for high-quality stickers to display on a sticker book, cute acrylic keychains, or planning the design properties for your very first original character (OC) with a full reference guide commission sheet, I can help you realize it beautifully in our warm autumn workspace style!
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-3">
                    <span className="bg-white px-4 py-1.5 rounded-full border-[2px] border-[#4a2c11] shadow-[2px_2px_0_0_#4a2c11] text-[12px] font-bold tracking-wide">🌸 Kemono Style</span>
                    <span className="bg-white px-4 py-1.5 rounded-full border-[2px] border-[#4a2c11] shadow-[2px_2px_0_0_#4a2c11] text-[12px] font-bold tracking-wide">🍁 Cozy Autumn Palettes</span>
                    <span className="bg-white px-4 py-1.5 rounded-full border-[2px] border-[#4a2c11] shadow-[2px_2px_0_0_#4a2c11] text-[12px] font-bold tracking-wide">✂️ Custom Sticker Sheets</span>
                </div>
            </div>
        </section>
    );
}

export default function Home({ initialServices }: { initialServices: HomeServiceItem[] }) {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df] autumn-overlay-bg">
            <Head title="Home" />

            <ToffeeNavbar />

            {/* Header Wave Divider */}
            <div className="w-full h-5 relative" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>

            <main className="max-w-[1100px] mx-auto px-6 w-full flex-1">
                <Hero />
                <Collections items={initialServices} />
                <PromoBanner />
                <About />
            </main>

            <ToffeeFooter />
        </div>
    );
}
