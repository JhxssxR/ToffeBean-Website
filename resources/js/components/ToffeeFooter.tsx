import React from 'react';

export function ToffeeFooter() {
    return (
        <div className="relative pt-8 mt-auto">
            {/* Scallop transition to black footer */}
            <div className="absolute top-0 left-0 w-full h-8" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0 L 40 20 L 0 20 Z' fill='%23161413'/%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>
            
            <footer className="bg-[#161413] text-gray-400 py-16 px-8 border-t-[4px] border-[#4a2c11] border-opacity-0">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-1 text-2xl font-bold tracking-tight text-white">
                            <span>toffeebean_</span><span className="text-[#ff7ab8]">*</span>
                        </div>
                        <p className="text-[13px] font-medium max-w-sm leading-relaxed text-gray-400">
                            Cute kemono character illustrations, customized stickers, and reference guides matching warm, rustic autumn colors.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <button className="bg-transparent border border-gray-700 text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-gray-800 transition">
                            Philippines | PHP ₱
                        </button>
                        <div className="flex flex-wrap gap-2">
                            {['PAYPAL', 'VISA', 'MASTERCARD', 'DISCOVER', 'GPAY', 'APPLEPAY'].map(method => (
                                <span key={method} className="text-[10px] font-bold tracking-wider border border-gray-700 px-2 py-1 rounded bg-[#201d1c] text-gray-300">{method}</span>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-gray-500 gap-4">
                    <p>© 2026 ToffeeBean Digital Workshop. All rights of illustrations maintained strictly by the artist.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 font-bold">IG</a>
                        <a href="#" className="hover:text-white transition flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 font-bold">TW</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
