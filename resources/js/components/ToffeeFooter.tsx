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
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-1 text-2xl font-bold tracking-tight text-white mb-2">
                            <img src="/logo.png" alt="Toffee Bean" className="h-20 md:h-24 w-auto object-contain -my-6 origin-left" />
                        </div>
                        <p className="text-[13px] font-medium leading-relaxed text-gray-400 max-w-sm">
                            Cute kemono character illustrations, customized stickers, and reference guides matching warm, rustic autumn colors.
                        </p>
                    </div>

                    {/* Column 2: Contact Me */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg tracking-wider mb-4" style={{ textShadow: '2px 2px 0px #000' }}>CONTACT ME</h3>
                        <div className="flex flex-col gap-3">
                            {/* Discord */}
                            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition group">
                                <div className="w-8 h-8 rounded bg-[#5865F2] flex items-center justify-center shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                                    </svg>
                                </div>
                                <span className="text-[14px] font-bold text-gray-300 group-hover:text-white transition">toffee_bean</span>
                            </a>
                            
                            {/* Instagram */}
                            <a href="https://www.instagram.com/toffeebean.art" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition group">
                                <div className="w-8 h-8 rounded flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </div>
                                <span className="text-[14px] font-bold text-gray-300 group-hover:text-white transition">@toffeebean.art</span>
                            </a>
                            
                            {/* Facebook */}
                            <a href="https://www.facebook.com/eyulf.nightveil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition group">
                                <div className="w-8 h-8 rounded bg-[#1877F2] flex items-center justify-center shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.19795 21.5V12.5H6.5V9.5H9.19795V7.5C9.19795 4.5 11.198 3.5 13.698 3.5C14.698 3.5 15.698 3.5 15.698 3.5V6.5H14.198C13.198 6.5 12.698 7.5 12.698 8.5V9.5H15.698L15.198 12.5H12.698V21.5H9.19795Z" />
                                    </svg>
                                </div>
                                <span className="text-[14px] font-bold text-gray-300 group-hover:text-white transition">Toffee Bean</span>
                            </a>
                            
                            {/* X (Twitter) */}
                            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition group">
                                <div className="w-8 h-8 rounded bg-black border border-gray-700 flex items-center justify-center shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>
                                <span className="text-[14px] font-bold text-gray-300 group-hover:text-white transition">@ToffeeBean31</span>
                            </a>
                            
                            {/* Gmail */}
                            <a href="mailto:meepy031@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition group">
                                <div className="w-8 h-8 rounded bg-white flex items-center justify-center shrink-0">
                                    <svg width="20" height="16" viewBox="0 0 512 399" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none">
                                            <path d="M34.3 399h88.7V193.8L0 93v272c0 18.8 15.3 34 34.3 34z" fill="#4285F4"/>
                                            <path d="M389 399h88.7c19 0 34.3-15.2 34.3-34V93l-123 100.8z" fill="#34A853"/>
                                            <path d="M389 34.2V193.8L512 93V58.5c0-42-48-66-81.4-40.8z" fill="#FBBC04"/>
                                            <path d="M123 193.8V34.2L256 136.4 389 34.2v159.6L256 295.6z" fill="#EA4335"/>
                                            <path d="M0 58.5V93l123 100.8V34.2L81.4 17.7C48-7.5 0 16.5 0 58.5z" fill="#C5221F"/>
                                        </g>
                                    </svg>
                                </div>
                                <span className="text-[14px] font-bold text-gray-300 group-hover:text-white transition">meepy031@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Column 3: Misc */}
                    <div className="flex flex-col items-start md:items-end gap-6">
                        <div className="flex flex-col items-start md:items-end gap-2">
                            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Region & Currency</span>
                            <button className="bg-transparent border border-gray-700 text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-gray-800 transition">
                                Philippines | PHP ₱
                            </button>
                        </div>
                        
                        <div className="flex flex-col items-start md:items-end gap-2">
                            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Accepted Payments</span>
                            <div className="flex flex-wrap gap-2 md:justify-end">
                                {['PAYPAL', 'GCASH'].map(method => (
                                    <span key={method} className="text-[10px] font-bold tracking-wider border border-gray-700 px-2 py-1 rounded bg-[#201d1c] text-gray-300">{method}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom copyright row */}
                <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-gray-500 gap-4">
                    <p>© 2026 ToffeeBean Digital Workshop. All rights of illustrations maintained strictly by the artist.</p>
                </div>
            </footer>
        </div>
    );
}
