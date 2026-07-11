import React from 'react';

export function ToffeeFooter() {
    return (
        <div className="relative pt-8 mt-auto">
            {/* Scallop transition to dark footer */}
            <div className="absolute top-0 left-0 w-full h-8" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0 L 40 20 L 0 20 Z' fill='%23161413'/%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>

            <footer className="bg-[#121110] text-gray-400 pt-16 pb-8 px-6 border-t border-[#2a1f18]">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    
                    {/* Top Section */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
                        
                        {/* Brand & Description */}
                        <div className="flex flex-col items-center md:items-start space-y-4 max-w-lg text-center md:text-left">
                            <img src="/logo.png" alt="ToffeeBean" className="h-16 w-auto object-contain transition-transform hover:scale-105" />
                            <p className="text-sm text-gray-300 font-medium leading-relaxed">
                                Creating soft, super-colorful, and character-packed digital illustrations inspired by kemono and cute pastel cartoon designs. Specializing in high-quality stickers, acrylic keychains, and custom character reference guides in a warm autumn workspace style!
                            </p>
                        </div>

                        {/* Social & Contact */}
                        <div className="flex flex-col items-center md:items-start space-y-4 shrink-0">
                            <h3 className="text-sm font-bold tracking-widest text-gray-200 uppercase">Connect</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/toffeebean.art" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1e1c1b] flex items-center justify-center hover:bg-[#2a2624] hover:text-white transition-all hover:-translate-y-1 group border border-gray-800">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-pink-500 transition-colors">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/eyulf.nightveil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1e1c1b] flex items-center justify-center hover:bg-[#2a2624] hover:text-white transition-all hover:-translate-y-1 group border border-gray-800">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-blue-500 transition-colors">
                                        <path d="M9.19795 21.5V12.5H6.5V9.5H9.19795V7.5C9.19795 4.5 11.198 3.5 13.698 3.5C14.698 3.5 15.698 3.5 15.698 3.5V6.5H14.198C13.198 6.5 12.698 7.5 12.698 8.5V9.5H15.698L15.198 12.5H12.698V21.5H9.19795Z" />
                                    </svg>
                                </a>
                                <a href="https://x.com/ToffeeBean31" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1e1c1b] flex items-center justify-center hover:bg-[#2a2624] hover:text-white transition-all hover:-translate-y-1 group border border-gray-800">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-gray-100 transition-colors">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="mailto:meepy031@gmail.com" className="w-10 h-10 rounded-full bg-[#1e1c1b] flex items-center justify-center hover:bg-[#2a2624] hover:text-white transition-all hover:-translate-y-1 group border border-gray-800">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-green-400 transition-colors">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full border-t border-gray-800/80 mb-8"></div>

                    {/* Bottom Section */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                        
                        <p className="text-xs text-gray-500 font-medium text-center md:text-left">
                            © {new Date().getFullYear()} ToffeeBean Digital Workshop. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4 flex-wrap justify-center">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Accepted Payments</span>
                            <div className="flex gap-3 items-center bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                                {/* PayPal Logo */}
                                <img src="/images/paypal-logo.svg" alt="PayPal" className="h-6 object-contain" />
                                {/* Divider */}
                                <div className="h-4 w-px bg-gray-700 mx-1"></div>
                                {/* GCash Logo */}
                                <img src="/images/gcash-logo.svg" alt="GCash" className="h-5 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
