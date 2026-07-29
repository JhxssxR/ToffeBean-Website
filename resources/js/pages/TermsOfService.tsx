import { ToffeeNavbar } from '@/components/ToffeeNavbar';
import { ToffeeFooter } from '@/components/ToffeeFooter';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function TermsOfService() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[#4a2c11] bg-[#fef1df] autumn-overlay-bg">
            <Head title="Terms of Service" />
            <ToffeeNavbar />

            <div className="w-full h-5 relative" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 20 20 40 0' fill='none' stroke='%234a2c11' stroke-width='4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center bottom'
            }}></div>

            <main className="max-w-[800px] mx-auto px-6 w-full flex-1 pb-24 pt-10 relative">
                <div className="text-center pb-8">
                    <h1 className="text-3xl font-bold text-[#4a2c11]">Terms of Service 📜</h1>
                    <p className="text-[14px] font-medium text-[#4a2c11]/70 mt-2 max-w-md mx-auto leading-relaxed">
                        Toffee Bean Workshop
                    </p>
                </div>

                <div className="bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-8 md:p-10 shadow-[4px_4px_0_0_#4a2c11] space-y-8">
                    
                    <section>
                        <h2 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Terms of Use</h2>
                        <div className="space-y-4 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <p>
                                The following terms of use contains the terms and conditions applicable to you and your access to use
                                the website https://toffeebean.art, the official Toffee Bean instagram page, and any other official online platforms, services or content are operated by me (Toffee Bean), a freelance digital artist in South-East Asia.
                            </p>
                            <p className="font-bold text-[#4a2c11]">
                                PLEASE READ THE FOLLOWING TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THE SERVICES OFFERED TO YOU TO AVOID ANY DEER-SASTERS. All users of this site agree that access to use of this site is subject to follow the terms and conditions. If you do not agree to these terms and conditions, please do not use this site.
                            </p>
                            <p>
                                By using the services, you confirm that you are old enough under the laws of your country to agree to these terms. If you are a minor or under the required age, a parent or a legal guardian must review and agree to these terms on your behalf.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Copyright (Not Copyleft)</h2>
                        <div className="space-y-4 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <p>
                                Everything you see on Toffee Bean – including artwork, illustrations, stickers, logos, graphics, text, designs, and other content – is owned by me (Toffee Bean) unless stated otherwise, and is protected by copyright and other applicable intellectual property laws.
                            </p>
                            <p>
                                You’re welcome to view, share links to my content, and download or print material for your own personal, non-commercial use unless I say otherwise.
                            </p>
                            <p>
                                Please don’t copy, trace, repost, edit, sell, redistribute, claim, or use my artwork or other content for commercial purposes without my permission. This also includes using my artwork to create merchandise, NFTs, AI training datasets, or other works unless I’ve explicitly allowed it.
                            </p>
                            <p>
                                If you’d like to use my work for something that isn’t covered here, just send me a message first. I’m always happy to discuss permissions!
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Name and Logo</h2>
                        <div className="space-y-4 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <p>
                                “Toffee Bean”, the Toffee Bean logo, and other branding used in my services are part of my identity as an artist. Please don’t use them in a way that suggests I’m affiliated with, sponsoring, or endorsing you or your project without my permission.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">No Warranty</h2>
                        <div className="space-y-4 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <p>
                                I do my very best to keep Toffee Bean running smoothly and provide accurate information, but I can’t guarantee that everything will always go smoothly, error-free, or up to date.
                            </p>
                            <p>
                                The services are provided “as is” and “as available”. While I make every reasonable effort to maintain the website and my online platforms. I can’t promise that they will always be uninterrupted, secure, or free from bugs (which I do not like), technical issues or other unexpected problems. 
                            </p>
                            <p className="italic">
                                By using the services, you understand and accept that you do so at your own discretion (If you are still here reading this, Toffee is very impressed)
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Limitation of Liability</h2>
                        <div className="space-y-4 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <p>
                                To all the trees and nature, to the fullest extent by law, I (Toffee Bean) won’t be responsible for any indirect, incidental, special, or any sorts of damages that may result from your use of, or inability to use, the services. This includes, but is not limited to technical issues, website downtime, delays, lost data (KEEP IN MIND), or interruptions caused by third party services.
                            </p>
                            <p>
                                While I do my very deer-est best to provide a smooth experience for you, I cannot guarantee that everything will always work perfectly. By using the services I offered, you understand and accept you do so at your own discretion and <span className="font-bold">HIGH RISK</span> (I typed “HIGH” for dramatic effect).
                            </p>
                            <p>
                                Nothing in these terms is intended to limit any rights or protections that cannot legally be excluded under applicable law.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Oopsies and Pricing Errors</h2>
                        <div className="space-y-4 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <p>
                                I do my best to make sure all prices, product descriptions, commission information, and other details are accurate. However mistakes can happen from time to time especially this deer artist is sleepy.
                            </p>
                            <p>
                                If something is listed with an incorrect price or contains an obvious error, I reserve the right to correct the mistake, refuse or cancel order before it is completed. If you have already paid for an order that has to be canceled because of an error, you’ll receive a full refund of the amount you paid.
                            </p>
                            <p>
                                If you ever notice something looks wrong (like bed bugs on a couch, or couch bugs on your bed), I’d really appreciate it if you let me know! Mistakes happen, and I’ll do my best to fix them as quickly as possible!
                            </p>
                        </div>
                    </section>

                </div>
            </main>

            <ToffeeFooter />
        </div>
    );
}
