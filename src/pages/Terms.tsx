import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
    const { language } = useLanguage();

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 bg-shefa-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="heading-xl text-shefa-navy mb-8">
                    {language === 'ms' ? 'Terma Perkhidmatan' : 'Terms of Service'}
                </h1>
                <p className="body-lg mb-12">
                    {language === 'ms'
                        ? 'Terakhir dikemaskini: 18 Februari 2026'
                        : 'Last updated: February 18, 2026'}
                </p>

                <div className="space-y-12">
                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">1. Agreement to Terms</h2>
                        <p className="body-base">
                            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Shefa Risk Management Sdn. Bhd. ("Company," "we," "us," or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                        </p>
                    </section>

                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">2. Intellectual Property</h2>
                        <p className="body-base">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">3. User Representations</h2>
                        <p className="body-base mb-4">
                            By using the Site, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 body-base">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
                            <li>You are not a minor in the jurisdiction in which you reside.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">4. Limitations of Liability</h2>
                        <p className="body-base">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">5. Governing Law</h2>
                        <p className="body-base">
                            These Terms shall be governed by and defined following the laws of Malaysia. Shefa Risk Management Sdn. Bhd. and yourself irrevocably consent that the courts of Malaysia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
