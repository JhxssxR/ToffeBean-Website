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
                    <span className="text-[#4a2c11]">Cute illustrations,</span><br/>
                    <span className="text-[#E67E22]">creativity filled!</span>
                </h1>
                
                <p className="text-base font-medium leading-relaxed max-w-md text-[#4a2c11]/80">
                    Welcome to the cozy autumn corner of <span className="text-[#4a2c11] font-bold">**ToffeeBean**</span>! We specialize in custom kiss-cut sticker sheets, character guides, and expressive illustrations made to help clients express their Original Characters (OCs) affordably.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                    <ToffeeButton variant="secondary" onClick={() => router.visit('/oc-planner')}>OC Design Planner &rarr;</ToffeeButton>
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

function Collections() {
    const items = [
        { title: "Plushies!", desc: "Collect super-soft huggable plushies", img: "https://images.unsplash.com/photo-1559418386-35c82a03c200?w=500&h=300&fit=crop" },
        { title: "Vinyl Stickers!", desc: "Weatherproof kiss-cut chibi sticker packs", img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=500&h=300&fit=crop" },
        { title: "Reference Guides!", desc: "Custom layout front/back guides for commissions", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=500&h=300&fit=crop" }
    ];

    return (
        <section className="space-y-6 pt-16 relative">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                MY COLLECTIONS! <span className="text-[#E67E22] text-xl">⭐</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, i) => (
                    <div key={i} className="bg-[#fffcf7] border-[4px] border-[#4a2c11] rounded-[2rem] p-4 shadow-brutal-lg flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform">
                        <div className="rounded-2xl border-[3px] border-[#4a2c11] overflow-hidden h-[200px] mb-4 bg-white relative">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex justify-between items-end px-2 pb-1">
                            <div>
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="text-[13px] font-medium text-[#4a2c11]/60 mt-0.5">{item.desc}</p>
                            </div>
                            <span className="text-[#E67E22] font-bold text-xl leading-none">&rarr;</span>
                        </div>
                    </div>
                ))}
            </div>
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

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
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
                <Collections />
                <PromoBanner />
                <About />
            </main>
            
            <ToffeeFooter />
        </div>
    );
}
