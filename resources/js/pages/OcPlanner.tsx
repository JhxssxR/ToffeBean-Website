import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Pencil } from 'lucide-react';

function SpeciesPill({ label, selected, onClick }: any) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`px-4 py-1.5 rounded-full text-[12px] font-bold border-[2px] transition-all ${
                selected
                    ? 'bg-[#E67E22] text-white border-[#4a2c11] shadow-[2px_2px_0_0_#4a2c11]'
                    : 'bg-white text-[#4a2c11] border-[#d4b896] hover:border-[#4a2c11] hover:shadow-[2px_2px_0_0_#4a2c11]'
            }`}
        >
            {label}
        </button>
    );
}

export default function OcPlanner() {
    const speciesOptions = [
        'Forest Red Fox', 'Calico Cat',
        'Mischievous Squirrel', 'Sleepy Sea Otter',
        'Fluffy Red Panda', 'Chubby Shiba Inu',
        'Other custom…',
    ];

    const vibeOptions = [
        'Pumpkin Spice Barista',
        'Moonlit Forest Wanderer',
        'Cozy Rainy Day Reader',
        'Bubbly Café Regular',
        'Mischievous Autumn Sprite',
        'Sleepy Cloud Dreamer',
    ];

    const [selectedSpecies, setSelectedSpecies] = useState('Forest Red Fox');
    const [vibe, setVibe]       = useState('Pumpkin Spice Barista');
    const [colors, setColors]   = useState('Warm Caramel, Pumpkin Orange, and Butter Cream');
    const [quirks, setQuirks]   = useState('Carries a small acorn bag, wears big round glasses, and is easily startled but loves cinnamon bread.');
    const [submitted, setSubmitted] = useState(false);

    function handlePlan(e: any) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
            <Head title="OC Planner" />
            <ToffeeNavbar />

            <div className="w-full h-5 relative" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>

            <main className="max-w-[1100px] mx-auto px-6 w-full flex-1 pb-24 relative">
                <span style={{position:'absolute',top:'8%',left:'-2%',fontSize:'1.1rem',opacity:0.45,transform:'rotate(-10deg)',pointerEvents:'none'}}>✦</span>
                <span style={{position:'absolute',top:'35%',left:'-3%',fontSize:'0.85rem',opacity:0.35,pointerEvents:'none'}}>✦</span>
                <span style={{position:'absolute',top:'65%',left:'-1%',fontSize:'1rem',opacity:0.3,pointerEvents:'none'}}>🍂</span>
                <span style={{position:'absolute',top:'8%',right:'-2%',fontSize:'1rem',opacity:0.4,transform:'rotate(12deg)',pointerEvents:'none'}}>✦</span>
                <span style={{position:'absolute',top:'40%',right:'-3%',fontSize:'0.8rem',opacity:0.3,pointerEvents:'none'}}>🍪</span>
                <span style={{position:'absolute',top:'70%',right:'-1%',fontSize:'1.1rem',opacity:0.35,transform:'rotate(-8deg)',pointerEvents:'none'}}>✦</span>

                <div className="text-center pt-10 pb-8">
                    <h1 className="text-3xl font-bold text-[#4a2c11]">Cozy OC Planner 🍂</h1>
                    <p className="text-[14px] font-medium text-[#4a2c11]/70 mt-2 max-w-md mx-auto leading-relaxed">
                        Co-create your dream Original Character (OC) or sticker collection! Describe fluffy details, and let Toffee sketch out initial concepts and details!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* LEFT: Form */}
                    <div className="flex-1 bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-6 shadow-[4px_4px_0_0_#4a2c11]">
                        <div className="flex items-center gap-2 mb-5">
                            <Pencil width={15} height={15} className="text-[#f08967]" />
                            <h2 className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#4a2c11]">Character Specs</h2>
                        </div>

                        <form onSubmit={handlePlan} className="space-y-5">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#4a2c11]">Fluff Species</label>
                                    <span className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider">Select or write other</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {speciesOptions.map(s => (
                                        <SpeciesPill key={s} label={s} selected={selectedSpecies === s} onClick={() => setSelectedSpecies(s)} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] block mb-2">Vibe &amp; Aesthetic</label>
                                <div className="relative">
                                    <select
                                        value={vibe}
                                        onChange={e => setVibe(e.target.value)}
                                        className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white appearance-none focus:outline-none focus:border-[#4a2c11] transition-colors cursor-pointer pr-8"
                                    >
                                        {vibeOptions.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#4a2c11]/50 text-xs">▼</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#4a2c11] block mb-2">Color Palette Inspiration</label>
                                <input
                                    type="text"
                                    value={colors}
                                    onChange={e => setColors(e.target.value)}
                                    placeholder="e.g. Warm Caramel, Pumpkin Orange, Butter Cream"
                                    className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors placeholder:text-[#4a2c11]/30"
                                />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#4a2c11]">Quirks &amp; Key Accessories</label>
                                    <span className="text-[10px] font-bold text-[#E67E22] uppercase tracking-wider">Cozy doodles!</span>
                                </div>
                                <textarea
                                    value={quirks}
                                    onChange={e => setQuirks(e.target.value)}
                                    rows={4}
                                    placeholder="Describe your character's quirks, accessories, and personality traits…"
                                    className="w-full border-[2px] border-[#d4b896] rounded-xl px-4 py-3 text-[13px] font-semibold text-[#4a2c11] bg-white focus:outline-none focus:border-[#4a2c11] transition-colors resize-none placeholder:text-[#4a2c11]/30 leading-relaxed"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#E67E22] text-white font-bold rounded-full py-3.5 border-[3px] border-[#4a2c11] shadow-[3px_3px_0_0_#4a2c11] hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center justify-center gap-2 text-[14px]"
                            >
                                <Pencil width={16} height={16} />
                                Plan Character Concept! 🍂
                            </button>
                        </form>
                    </div>

                    {/* RIGHT: Preview */}
                    <div className="flex-1 min-h-[420px] border-[2.5px] border-dashed border-[#d4b896] rounded-[1.5rem] p-6 flex flex-col items-center justify-center bg-[#fef8f0]/60">
                        {submitted ? (
                            <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-2">
                                <div className="flex justify-center mb-2">
                                    <div className="w-24 h-24 rounded-full border-[3px] border-[#4a2c11] bg-[#faead6] shadow-[3px_3px_0_0_#4a2c11] flex items-center justify-center text-4xl select-none">
                                        🦊
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className="inline-block bg-[#E67E22] text-white text-[11px] font-bold px-4 py-1 rounded-full border-[2px] border-[#4a2c11] tracking-wider uppercase shadow-[2px_2px_0_0_#4a2c11]">
                                        {selectedSpecies}
                                    </span>
                                </div>
                                <div className="bg-white border-[2px] border-[#d4b896] rounded-2xl p-4 space-y-3 shadow-[2px_2px_0_0_#d4b896]">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#4a2c11]/50 mb-0.5">Vibe</p>
                                        <p className="text-[13px] font-semibold text-[#4a2c11]">{vibe}</p>
                                    </div>
                                    <div className="border-t border-[#f0e4d0] pt-3">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#4a2c11]/50 mb-0.5">Color Palette</p>
                                        <p className="text-[13px] font-semibold text-[#4a2c11]">{colors}</p>
                                    </div>
                                    <div className="border-t border-[#f0e4d0] pt-3">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#4a2c11]/50 mb-0.5">Quirks &amp; Accessories</p>
                                        <p className="text-[13px] font-semibold text-[#4a2c11] leading-relaxed">{quirks}</p>
                                    </div>
                                </div>
                                <div className="bg-[#faead6] border-[2px] border-[#4a2c11] rounded-2xl px-4 py-3 text-center shadow-[2px_2px_0_0_#4a2c11]">
                                    <p className="text-[12px] font-bold text-[#4a2c11]">
                                        🎨 Character concept saved! Bring this sheet to your commission request.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="w-full text-[12px] font-bold text-[#4a2c11]/60 hover:text-[#4a2c11] transition-colors py-1"
                                >
                                    ← Edit character
                                </button>
                            </div>
                        ) : (
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 rounded-full border-[3px] border-[#4a2c11] bg-[#faead6] shadow-[3px_3px_0_0_#4a2c11] flex items-center justify-center text-4xl mx-auto select-none">
                                    🦊
                                </div>
                                <div>
                                    <p className="text-[17px] font-bold text-[#4a2c11]">Waiting to co-create with you!</p>
                                    <p className="text-[12px] font-medium text-[#4a2c11]/60 mt-1 leading-relaxed max-w-[240px] mx-auto">
                                        Choose options on the left and click "Plan Character Concept!" to watch Toffee sketch out initial concepts and details!
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <ToffeeFooter />
        </div>
    );
}
