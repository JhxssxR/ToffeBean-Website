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

            <footer className="bg-[#161413] text-gray-400 pt-10 pb-6 px-6">
                <div className="max-w-2xl mx-auto text-center space-y-4">

                    {/* Logo */}
                    <img src="/logo.png" alt="ToffeeBean" className="h-14 w-auto mx-auto object-contain" />

                    {/* Tagline */}
                    <div className="space-y-1">
                        <p className="text-[13px] font-semibold text-gray-300">
                            Cute kemono character illustrations, stickers & guides 🎨
                        </p>
                        <p className="text-[12px] font-medium text-gray-500">
                            Warm autumn-inspired designs by ToffeeBean
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-800 w-24 mx-auto"></div>

                    {/* Contact row */}
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <span className="text-[11px] font-bold text-gray-500">📩 Contact:</span>
                        <div className="flex items-center gap-3">
                            <a href="https://www.instagram.com/toffeebean.art" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group">
                                <div className="w-5 h-5 rounded flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </div>
                                <span className="text-[11px] font-semibold text-gray-400 group-hover:text-white transition">Instagram</span>
                            </a>

                            <span className="text-gray-700">·</span>

                            <a href="https://www.facebook.com/eyulf.nightveil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group">
                                <div className="w-5 h-5 rounded bg-[#1877F2] flex items-center justify-center shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.19795 21.5V12.5H6.5V9.5H9.19795V7.5C9.19795 4.5 11.198 3.5 13.698 3.5C14.698 3.5 15.698 3.5 15.698 3.5V6.5H14.198C13.198 6.5 12.698 7.5 12.698 8.5V9.5H15.698L15.198 12.5H12.698V21.5H9.19795Z" />
                                    </svg>
                                </div>
                                <span className="text-[11px] font-semibold text-gray-400 group-hover:text-white transition">Facebook</span>
                            </a>

                            <span className="text-gray-700">·</span>

                            <a href="#" className="flex items-center gap-1.5 group">
                                <div className="w-5 h-5 rounded bg-black border border-gray-700 flex items-center justify-center shrink-0">
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                <span className="text-[11px] font-semibold text-gray-400 group-hover:text-white transition">Twitter</span>
                            </a>

                            <span className="text-gray-700">·</span>

                            <a href="mailto:meepy031@gmail.com" className="flex items-center gap-1.5 group">
                                <div className="w-5 h-5 rounded bg-white flex items-center justify-center shrink-0">
                                    <svg width="12" height="9" viewBox="0 0 512 399" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none">
                                            <path d="M34.3 399h88.7V193.8L0 93v272c0 18.8 15.3 34 34.3 34z" fill="#4285F4" />
                                            <path d="M389 399h88.7c19 0 34.3-15.2 34.3-34V93l-123 100.8z" fill="#34A853" />
                                            <path d="M389 34.2V193.8L512 93V58.5c0-42-48-66-81.4-40.8z" fill="#FBBC04" />
                                            <path d="M123 193.8V34.2L256 136.4 389 34.2v159.6L256 295.6z" fill="#EA4335" />
                                            <path d="M0 58.5V93l123 100.8V34.2L81.4 17.7C48-7.5 0 16.5 0 58.5z" fill="#C5221F" />
                                        </g>
                                    </svg>
                                </div>
                                <span className="text-[11px] font-semibold text-gray-400 group-hover:text-white transition">Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Payments row */}
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-[11px] font-bold text-gray-500">💳 Payments:</span>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold tracking-wider border border-gray-700 px-2 py-0.5 rounded bg-[#1e1c1b] text-gray-400">PAYPAL</span>
                            <span className="text-gray-700">·</span>
                            <span className="text-[10px] font-bold tracking-wider border border-gray-700 px-2 py-0.5 rounded bg-[#1e1c1b] text-gray-400">GCASH</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-[10px] font-medium text-gray-600 pt-2">
                        © 2026 ToffeeBean Digital Workshop. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
