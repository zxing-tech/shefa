import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
    const { language } = useLanguage();

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 bg-shefa-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="heading-xl text-shefa-navy mb-8">
                    {language === 'ms' ? 'Dasar Privasi' : 'Privacy Policy'}
                </h1>
                <p className="body-lg mb-12">
                    {language === 'ms'
                        ? 'Terakhir dikemaskini: 18 Februari 2026'
                        : 'Last updated: February 18, 2026'}
                </p>

                <div className="space-y-12">
                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">1. Introduction</h2>
                        <p className="body-base">
                            Shefa Risk Management Sdn. Bhd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">2. Information We Collect</h2>
                        <p className="body-base mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
                        <ul className="list-disc pl-6 space-y-2 body-base">
                            <li><strong>Personal Data:</strong> Name, email address, phone number, and company details when you fill out forms.</li>
                            <li><strong>Financial Data:</strong> Information related to your business invoices and funding requirements.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, and operating system.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">3. Use of Your Information</h2>
                        <p className="body-base mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                        <ul className="list-disc pl-6 space-y-2 body-base">
                            <li>Process your application for funding or insurance.</li>
                            <li>Compile anonymous statistical data and analysis for use internally.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">4. Disclosure of Your Information</h2>
                        <p className="body-base">
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                            <strong> By Law or to Protect Rights</strong>, <strong>Third-Party Service Providers</strong>, and <strong>Business Transfers</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="heading-md text-shefa-navy mb-4">5. Contact Us</h2>
                        <p className="body-base">
                            If you have questions or comments about this Privacy Policy, please contact us at: <br /><br />
                            <strong>Shefa Risk Management Sdn. Bhd.</strong><br />
                            Level 23-1, Premier Suite, 1 Mont Kiara,<br />
                            No 1, Jalan Kiara, Mont Kiara,<br />
                            50480 Kuala Lumpur.<br />
                            Email: info@shefarisk.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
