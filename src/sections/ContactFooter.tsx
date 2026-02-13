import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-shefa-white"
    >
      <div className="w-[86vw] mx-auto py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4vw]">
          <div>
            <span className="eyebrow block mb-4">Get in Touch</span>
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-8">
              Contact <span className="text-shefa-gold">Shefa</span>
            </h2>

            {submitted ? (
              <div className="card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-shefa-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-shefa-gold" />
                </div>
                <h3 className="font-heading text-xl font-medium text-shefa-navy mb-2">
                  Message Sent!
                </h3>
                <p className="text-shefa-gray">
                  Thank you for reaching out. We will get back to you within 48
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-shefa-navy mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-shefa-navy mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-shefa-navy mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-shefa-navy mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 text-shefa-gold border-gray-300 rounded focus:ring-shefa-gold"
                  />
                  <label htmlFor="consent" className="text-xs text-shefa-gray leading-tight">
                    I agree to the <a href="#" className="underline">Privacy Policy</a> and consent to being contacted.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="card p-8 lg:p-10 h-full">
              <h3 className="font-heading text-xl font-medium text-shefa-navy mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-shefa-navy/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-shefa-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-shefa-navy mb-1">
                      Address
                    </div>
                    <div className="text-shefa-gray text-sm">
                      Level 19, Boutique Office 1, Menara 2
                      <br />
                      No. 3, Jalan Bangsar, KL Eco City
                      <br />
                      59200 Kuala Lumpur, Malaysia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-shefa-navy/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-shefa-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-shefa-navy mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+60327745254"
                      className="text-shefa-gray text-sm hover:text-shefa-gold transition-colors"
                    >
                      +60 3-2774 5254
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-shefa-navy/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-shefa-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-shefa-navy mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@shefa-risk.com"
                      className="text-shefa-gray text-sm hover:text-shefa-gold transition-colors"
                    >
                      info@shefa-risk.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-shefa-navy/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-shefa-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-shefa-navy mb-1">
                      Business Hours
                    </div>
                    <div className="text-shefa-gray text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E9ECEF]">
        <div className="w-[86vw] mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/Logo-Shefa-Risk-Management-OL_Shefa-Icon.png"
                alt="Shefa"
                className="h-8 w-auto"
              />
              <span className="font-heading font-semibold text-shefa-navy">
                Shefa Risk Management
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-shefa-gray">
              <a href="#" className="hover:text-shefa-navy transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-shefa-navy transition-colors">
                Terms of Service
              </a>
            </div>

            <div className="text-sm text-shefa-gray">
              &copy; {new Date().getFullYear()} Shefa Risk Management. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
