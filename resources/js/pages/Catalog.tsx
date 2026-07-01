import { ToffeeButton } from '@/components/ToffeeButton';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { Head } from '@inertiajs/react';
import { ChevronDown, Heart, Sparkles } from 'lucide-react';
import React from 'react';

const products = [
    {
        id: 1,
        title: "Acorn Acrylic Shaker Keychain",
        description: "Double-sided acrylic keychain filled with tiny rolling pieces of acorns, leaves, and a sleepy squirrel character. Shakable an...",
        price: "650.00",
        category: "Keychains",
        isNew: false,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&h=500&fit=crop",
        buttonText: "Add to cart",
        buttonVariant: "orange"
    },
    {
        id: 2,
        title: "Toffee's Autumn Sticker Sheet",
        description: "Cute customized kiss-cut sticker pack with hand-drawn illustrations of fat foxes, cozy maple cups, and fallen leaves....",
        price: "800.00",
        category: "Stickers",
        isNew: true,
        image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&h=500&fit=crop",
        buttonText: "Preorder",
        buttonVariant: "pink"
    },
    {
        id: 3,
        title: "Rolo Plushie 2.0",
        description: "The official soft, cuddly 20cm plushie of our squirrel mascot in a warm oversized pumpkin-themed hoodie. Perfect cozy...",
        price: "2,400.00",
        category: "Plushies",
        isNew: true,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=500&fit=crop",
        buttonText: "Preorder",
        buttonVariant: "pink"
    }
];

export default function Catalog() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df]">
            <Head title="Catalog" />
            
            <ToffeeNavbar />
            
            {/* Header Wave Divider */}
            <div className="w-full h-5 relative" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>
            
            <main className="max-w-[1200px] mx-auto px-6 w-full flex-1 pt-8 pb-24">
                
                {/* Filter Bar */}
                <div className="bg-white border-[4px] border-[#4a2c11] rounded-[1.5rem] p-3 shadow-brutal flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="flex flex-wrap items-center gap-1 md:gap-2">
                        <button className="bg-[#ffce54] text-[#4a2c11] px-5 py-2 rounded-full font-bold text-sm tracking-wide border-2 border-transparent">
                            All
                        </button>
                        <button className="text-[#4a2c11]/60 hover:text-[#4a2c11] hover:bg-[#faead6] px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-colors">
                            Stickers
                        </button>
                        <button className="text-[#4a2c11]/60 hover:text-[#4a2c11] hover:bg-[#faead6] px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-colors">
                            Plushies
                        </button>
                        <button className="text-[#4a2c11]/60 hover:text-[#4a2c11] hover:bg-[#faead6] px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-colors">
                            Keychains
                        </button>
                        <button className="text-[#4a2c11]/60 hover:text-[#4a2c11] hover:bg-[#faead6] px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-colors">
                            Reference Sheets
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4 md:mt-0 px-2">
                        <span className="text-[#4a2c11]/60 font-bold text-[11px] tracking-wider uppercase">
                            6 PRODUCTS FOUND
                        </span>
                        <button className="flex items-center gap-2 bg-white border-[3px] border-[#4a2c11] px-4 py-2 rounded-full font-bold text-sm shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                            Price: Low to High
                            <ChevronDown size={16} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white border-[4px] border-[#4a2c11] rounded-[2rem] p-4 shadow-brutal-lg flex flex-col h-full group">
                            
                            {/* Product Image */}
                            <div className="rounded-2xl border-[3px] border-[#4a2c11] overflow-hidden aspect-[4/3] relative mb-5 bg-[#fffcf7]">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                
                                {/* Tags */}
                                <div className="absolute top-3 left-3">
                                    <span className="bg-white border-[2.5px] border-[#4a2c11] text-[#4a2c11] px-3 py-1 rounded-full text-[12px] font-bold tracking-wide shadow-brutal-sm">
                                        {product.category}
                                    </span>
                                </div>
                                {product.isNew && (
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-[#faead6] border-[2.5px] border-[#4a2c11] text-[#4a2c11] px-3 py-1 rounded-full text-[12px] font-bold tracking-wide shadow-brutal-sm flex items-center gap-1">
                                            <Sparkles size={12} className="text-[#f08967]" />
                                            NEW
                                        </span>
                                    </div>
                                )}
                            </div>
                            
                            {/* Product Info */}
                            <div className="flex flex-col flex-1 px-1">
                                <h3 className="font-bold text-xl leading-tight mb-2">{product.title}</h3>
                                <p className="text-[13px] font-medium text-[#4a2c11]/70 leading-relaxed mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                
                                <div className="mt-auto mb-4">
                                    <span className="font-bold text-xl">₱{product.price}</span>
                                    <span className="text-[11px] font-bold ml-1 text-[#4a2c11]/60">PHP</span>
                                </div>
                                
                                {/* Actions */}
                                <div className="flex items-center gap-3 w-full">
                                    <button className={`flex-1 font-bold rounded-full py-3 transition-transform hover:-translate-y-1 active:translate-y-0 border-[3px] border-[#4a2c11] shadow-brutal text-white text-sm tracking-wide ${
                                        product.buttonVariant === 'orange' ? 'bg-[#f08967]' : 'bg-[#E67E22]'
                                    }`}>
                                        {product.buttonText}
                                    </button>
                                    <button className="w-[50px] h-[50px] shrink-0 bg-[#fef1df] rounded-2xl border-[3px] border-[#4a2c11] shadow-brutal flex items-center justify-center hover:-translate-y-1 transition-transform">
                                        <Heart size={20} strokeWidth={3} className="text-[#E67E22]" />
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>

            </main>
            
            <ToffeeFooter />
        </div>
    );
}
