import { useState } from 'react';
import { ArrowLeftRight, ShieldCheck, Zap, BarChart3, Building2, Coins } from 'lucide-react';

const Borrowers = () => {
  const [invoiceAmount, setInvoiceAmount] = useState(1000000);
  const eligibleAdvance = invoiceAmount * 0.80;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-shefa-navy text-white py-24 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/borrower_hero.jpg"
            alt="Borrowers"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy via-shefa-navy/50 to-transparent" />
        </div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold uppercase tracking-tight">
              Liquidity <span className="text-shefa-gold">Accelerated.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We provide the financial infrastructure for Malaysia's leading industrial players to bridge the gap between service delivery and payment.
            </p>
          </div>
        </div>
      </section>

      {/* Invoice Financing Section */}
      <section id="invoice-financing" className="py-24 lg:py-32 scroll-mt-24">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center transition-all">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-shefa-gold font-bold uppercase tracking-widest text-xs">Section A // Working Capital</span>
                <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase">Receivable Purchase Financing (RPF)</h2>
              </div>

              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>Sell your book debts at a discount. You deliver goods, we provide immediate liquidity.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-shefa-gold/10 flex items-center justify-center text-shefa-gold">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Immediate Cash</h4>
                      <p className="text-sm">Get up to 80% advance on your invoices within 48 hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-shefa-gold/10 flex items-center justify-center text-shefa-gold">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Credit Protection</h4>
                      <p className="text-sm">Insured receivables protect your business from default risk.</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-shefa-gold text-shefa-navy px-10 py-4 rounded font-black uppercase tracking-widest text-sm shadow-xl">Enquire Now</button>
            </div>

            <div className="relative p-12 bg-card border border-border rounded-[40px] shadow-2xl overflow-hidden group">
              {/* Visual Diagram: Seller -> Shefa -> Cash */}
              <div className="relative z-10 space-y-12">
                <div className="flex justify-between items-center">
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 rounded-2xl bg-foreground text-background flex items-center justify-center mx-auto shadow-xl"><Building2 size={32} /></div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">SME / SELLER</div>
                  </div>
                  <div className="flex-grow h-0.5 bg-border relative mx-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-shefa-gold text-shefa-navy px-3 py-1 rounded-full text-[8px] font-black uppercase">Invoice</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 rounded-2xl bg-shefa-gold text-shefa-navy flex items-center justify-center mx-auto shadow-xl font-black text-2xl">S</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">SHEFA</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowLeftRight className="text-shefa-gold rotate-90" size={32} />
                </div>

                <div className="flex justify-center">
                  <div className="px-8 py-6 bg-shefa-gold text-shefa-navy rounded-2xl text-center shadow-xl">
                    <Coins className="mx-auto mb-2" size={32} />
                    <div className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">Immediate Cash Advance</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">80% of Invoice Value</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-shefa-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Financing Section */}
      <section id="scf" className="py-24 lg:py-32 bg-shefa-navy/5 scroll-mt-24 border-y border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative p-12 bg-background border border-border rounded-[40px] shadow-2xl">
              {/* Visual Flow: Buyer -> Shefa -> Supplier */}
              <div className="flex flex-col items-center gap-12">
                <div className="w-24 h-24 rounded-full border-4 border-shefa-gold flex items-center justify-center text-shefa-navy bg-shefa-gold shadow-glow-gold transition-transform hover:scale-105">
                  <Building2 size={40} />
                </div>
                <div className="flex items-center gap-16">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center text-foreground"><Building2 size={24} /></div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Supplier</div>
                  </div>
                  <div className="w-32 h-0.5 bg-shefa-gold relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-shefa-gold text-shefa-gold px-2 py-0.5 rounded text-[8px] font-bold">Fast Payment</div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center text-foreground"><Building2 size={24} /></div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Buyer</div>
                  </div>
                </div>
                <div className="text-center max-w-sm">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-40 italic">Shefa acts as the liquidity bridge, paying suppliers early and allowing buyers to settle at maturity.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <div className="space-y-4">
                <span className="text-shefa-gold font-bold uppercase tracking-widest text-xs">Section B // Supply Chain</span>
                <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase">Supply Chain Financing</h2>
              </div>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>Reverse Factoring. We pay your suppliers early; you pay us at maturity.</p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-shefa-gold flex items-center justify-center text-shefa-navy flex-shrink-0 mt-1 shadow-glow-gold"><BarChart3 size={12} /></div>
                    <div><span className="font-bold text-foreground uppercase text-sm">Optimize Payables:</span> Extend payment terms without straining supplier relationships.</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-shefa-gold flex items-center justify-center text-shefa-navy flex-shrink-0 mt-1 shadow-glow-gold"><Zap size={12} /></div>
                    <div><span className="font-bold text-foreground uppercase text-sm">Supplier Loyalty:</span> Provide your ecosystem with access to low-cost liquidity.</div>
                  </li>
                </ul>
              </div>
              <button className="bg-shefa-navy text-white px-10 py-4 rounded font-black uppercase tracking-widest text-sm shadow-xl hover:bg-shefa-cobalt transition-all">Setup My Program</button>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Estimator */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase">Funding Estimator</h2>
              <p className="text-foreground/60 text-lg">Calculate your potential capital injection in real-time.</p>
            </div>

            <div className="bg-card border border-border rounded-[32px] p-8 lg:p-16 shadow-2xl space-y-16">
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Invoice Amount (RM)</label>
                  <div className="text-4xl lg:text-6xl font-black tracking-tighter text-foreground">
                    <span className="text-base font-bold opacity-30 mr-2 uppercase">RM</span>
                    {invoiceAmount.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                  className="w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer accent-shefa-gold"
                />
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <span>RM 100k</span>
                  <span>RM 10M</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8 border-t border-border">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-50">Eligible Advance (80%)</span>
                  <div className="text-4xl lg:text-5xl font-black text-shefa-gold tracking-tighter">
                    RM {eligibleAdvance.toLocaleString()}
                  </div>
                </div>
                <button className="w-full bg-shefa-gold text-shefa-navy py-6 rounded-xl font-black uppercase tracking-[0.2em] text-sm shadow-xl hover:brightness-105 transition-all">Apply For This Funding</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Borrowers;
