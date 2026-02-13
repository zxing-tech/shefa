import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is trade credit insurance?',
    answer:
      'Trade credit insurance protects your business against the risk of non-payment by your buyers. If a buyer becomes insolvent or fails to pay within the agreed terms, the insurance policy covers a significant portion of the outstanding debt, typically 80-90% of the invoice value.',
  },
  {
    question: 'How is the premium calculated?',
    answer:
      'Premiums are calculated based on several factors including your annual turnover, the creditworthiness of your buyers, your industry sector, trading history, and claims experience. We provide tailored quotes after analyzing your specific business profile and risk exposure.',
  },
  {
    question: 'How long does a claim take?',
    answer:
      'Most claims are processed within 30-60 days from the date of submission with complete documentation. Simple cases with clear evidence of default can be resolved faster, while complex cases involving recovery actions may take longer.',
  },
  {
    question: 'Do you cover export buyers?',
    answer:
      'Yes, we provide comprehensive export credit coverage for businesses trading with buyers across ASEAN and globally. Our policies include protection against both commercial risks (buyer default) and political risks (currency restrictions, expropriation).',
  },
  {
    question: 'Is there a minimum invoice size?',
    answer:
      'We work with businesses of all sizes. While there is no strict minimum invoice size, our policies are most cost-effective for businesses with annual credit sales of at least MYR 500,000. We also offer single-buyer policies for larger transactions.',
  },
  {
    question: 'Can I cancel or change coverage?',
    answer:
      'Yes, our policies offer flexibility. You can adjust coverage limits, add or remove buyers, or modify terms with appropriate notice. Cancellation terms are clearly outlined in your policy documentation, and we prorate premiums for any unused coverage period.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-shefa-white">
      <div className="w-[86vw] mx-auto">
        <div className="max-w-[920px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="eyebrow block mb-4">FAQ</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              Common <span className="text-shefa-gold">questions</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E9ECEF] rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-shefa-navy/[0.02] transition-colors"
                >
                  <span className="font-heading text-base lg:text-lg font-medium text-shefa-navy pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-shefa-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-shefa-gray leading-relaxed text-sm lg:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
