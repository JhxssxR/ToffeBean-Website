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

                <div id="commission-terms" className="bg-white border-[3px] border-[#4a2c11] rounded-[1.5rem] p-8 md:p-10 shadow-[4px_4px_0_0_#4a2c11] space-y-8 mt-10">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-[#4a2c11]">Commission Terms of Service 🎨</h2>
                        <p className="text-[13px] font-medium text-[#4a2c11]/60 mt-1">Digital Art Commission — ToffeeBean Workshop</p>
                    </div>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Payment Plan</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>All payments are to be made via GCash/PayMaya [+63 962 213 5523], PayPal [orlandflorida58@gmail].</li>
                            <li>Partial payment is required before the art begins.</li>
                            <li>Payments are not refundable once the sketch is approved.</li>
                            <li>PayPal, GCash, PayMaya are accepted payment methods.</li>
                            <li>Any additional requests not included in the original order may require extra payment.</li>
                            <li>The client is responsible for sending the correct payment amount.</li>
                            <li>Currency conversion or transfer fees must be covered by the client if applicable.</li>
                            <li>Artwork will be sent via gdrive after full payment has been successfully received and confirmed.</li>
                            <li>Prices may change in the future, but confirmed commissions will keep their agreed price.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Process</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>Either party may terminate this agreement at any time with written notice.</li>
                            <li>The client must provide a clear description and references for the commission.</li>
                            <li>The artist will begin with a sketch draft for the client to review.</li>
                            <li>The client may request minor revisions during the sketch stage.</li>
                            <li>Once the sketch is approved, the artist will proceed with the final artwork.</li>
                            <li>Major changes after sketch approval may require additional fees. (Tiny details such as 'make ears longer, etc' is okay and there will be no charge. However, if the simple change can affect different layers of each drawing, this will be the time the artist will charge an additional fee)</li>
                            <li>Progress updates may be provided during the commission.</li>
                            <li>The final artwork will be delivered after the piece is completed. The images will be delivered in PNG format. The client may request a different file type.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Drawing Rules</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>The artist will only accept commissions that fall within their comfort level and artistic ability. The artist reserves the right to decline any request that they are not comfortable creating.</li>
                            <li>The artist will not draw explicit NSFW (Not Safe For Work) content, including sexual or pornographic material. (Unless there is money… evil laughter)</li>
                            <li>The artist will not draw gore or excessively violent content, including graphic injuries, dismemberment, or disturbing imagery.</li>
                            <li>The artist will not create artwork that promotes hate, discrimination, harassment, or offensive themes directed toward individuals or groups.</li>
                            <li>The artist will not accept requests that involve illegal, harmful, or inappropriate subjects.</li>
                            <li>The artist may decline requests that contain sensitive, controversial, or uncomfortable topics at their own discretion.</li>
                            <li>The artist reserves the right to refuse any commission that violates these drawing rules or personal boundaries.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Usage Rights</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>The commissioned artwork is intended for personal use only unless otherwise agreed upon. Personal use includes profile pictures, wallpapers, and posting on personal social media accounts.</li>
                            <li>The client is free to share the commissioned work with a proper credit to the artist.</li>
                            <li>The client may not sell, reproduce, redistribute, or profit from the artwork in any way without the artist's permission. This includes using the artwork for merchandise, advertising, or commercial projects.</li>
                            <li>The client must not claim the artwork as their own. Proper credit to the artist should be given whenever the artwork is shared publicly.</li>
                            <li>The client may not edit, heavily modify, or trace the artwork without the artist's permission.</li>
                            <li>The artist retains the copyright and full ownership of the artwork unless commercial rights are specifically purchased.</li>
                            <li>The artist reserves the right to display the artwork in their portfolio, social media, or promotional materials.</li>
                            <li>If the client wishes to use the artwork for commercial purposes, this must be discussed beforehand and may require additional fees.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Artist Rights</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>The artist reserves the right to decline or cancel any commission request that they are uncomfortable with or unable to complete.</li>
                            <li>The artist retains the right to display the commissioned artwork in their portfolio, social media, commission sheets, or other promotional materials unless otherwise agreed upon with the client.</li>
                            <li>The artist maintains the copyright and authorship of the artwork at all times. The client does not gain ownership of the artwork itself, only the rights specified in the Usage Rights section.</li>
                            <li>The artist has the right to include a signature or watermark on the artwork when appropriate.</li>
                            <li>The artist reserves the right to refuse changes that significantly alter the original concept after the sketch has been approved.</li>
                            <li>The artist may update or modify their Terms of Service and commission prices at any time. Changes will not affect commissions that have already been confirmed and paid for.</li>
                            <li>The artist has the right to protect their work from misuse, including unauthorized reproduction, redistribution, or commercial use.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Client Responsibility &amp; Project Abandonment</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>The client is responsible for providing clear instructions, references, and necessary information needed to complete the commission. Delays in providing required details may affect the project timeline.</li>
                            <li>The client must maintain reasonable communication during the commission process. Timely responses help ensure the project progresses smoothly.</li>
                            <li>If the client becomes unresponsive for more than 14 days, the commission may be considered abandoned.</li>
                            <li>Abandoned commissions may be cancelled without refund, especially if work has already begun.</li>
                            <li>If the client returns after the commission has been marked as abandoned, the artist may require a new payment or reopening fee to resume the project.</li>
                            <li>The artist is not responsible for delays caused by late responses, missing information, or unclear instructions from the client.</li>
                            <li>Repeated delays or failure to cooperate during the commission process may result in cancellation of the project at the artist's discretion.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Refunds &amp; Cancellations</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>The client may request to cancel the commission before work has started. In this case, the payment may be refunded minus any applicable transaction or transfer fees.</li>
                            <li>Once the commission has entered the sketch stage, only a partial refund may be provided depending on the amount of work already completed.</li>
                            <li>Refunds will not be provided after the sketch has been approved or when the artwork has entered the final stage.</li>
                            <li>If the client chooses to cancel the commission after significant progress has been made, the artist reserves the right to keep the payment for the work already completed.</li>
                            <li>If the artist must cancel the commission due to unforeseen circumstances, the client will receive a full or partial refund depending on the progress of the artwork.</li>
                            <li>Refunds will not be issued for abandoned commissions where the client becomes unresponsive for an extended period of time.</li>
                            <li>All refund requests must be communicated clearly to the artist, and refunds will be processed through the original payment method whenever possible.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Communication</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>All commission discussions must remain respectful and professional.</li>
                            <li>Harassment, spam, or inappropriate behavior may result in immediate cancellation of the commission.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Turnaround Time</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>The estimated turnaround time for commissions is around 2–7 days, depending on complexity and the artist's current workload.</li>
                            <li>Delays may occur due to artist schedule, health, school responsibilities, or client response time.</li>
                            <li>The artist will inform the client if significant delays occur.</li>
                            <li>If the artist took more than 30 days to finish your order due to unforeseen circumstances such as problems that may include personal life, accidents or death, full refund will be given.</li>
                            <li>Timer will only start after payment, however, delays due to unresponsiveness of the clients will not be counted.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-[#E67E22] mb-3 uppercase tracking-wider">Agreement to Terms</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] font-medium text-[#4a2c11]/80 leading-relaxed">
                            <li>By requesting or purchasing a commission, the client confirms that they have read, understood, and agreed to all Terms of Service stated above.</li>
                            <li>The client acknowledges that these terms apply to the entire commission process, including payment, communication, usage rights, and project policies.</li>
                            <li>Failure to follow these Terms of Service may result in cancellation of the commission without refund, depending on the situation.</li>
                        </ul>
                    </section>
                </div>
            </main>

            <ToffeeFooter />
        </div>
    );
}
