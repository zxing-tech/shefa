import { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FundingCalculator = () => {
    const { t } = useLanguage();
    const [amount, setAmount] = useState(100000);
    const [days, setDays] = useState(60);

    const results = useMemo(() => {
        const advanceRate = 0.80; // 80% advance
        const monthlyRate = 0.015; // 1.5% per month

        const advance = amount * advanceRate;
        const fee = advance * monthlyRate * (days / 30);
        const net = advance - fee;

        return {
            advance,
            fee,
            net
        };
    }, [amount, days]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-MY', {
            style: 'currency',
            currency: 'MYR',
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-shefa-gold/20">
            <div className="bg-shefa-navy p-6 text-white text-center">
                <div className="w-12 h-12 rounded-full bg-shefa-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-6 h-6 text-shefa-gold" />
                </div>
                <h3 className="font-heading text-xl font-medium mb-2">{t('calc_title')}</h3>
                <p className="text-white/70 text-sm max-w-xs mx-auto">{t('calc_desc')}</p>
            </div>

            <div className="p-8 space-y-8">
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-shefa-navy mb-2 flex justify-between">
                            <span>{t('calc_label_amount')}</span>
                            <span className="text-shefa-gold font-bold">{formatCurrency(amount)}</span>
                        </label>
                        <input
                            type="range"
                            min="10000"
                            max="1000000"
                            step="5000"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-shefa-gold"
                        />
                        <div className="flex justify-between text-xs text-shefa-gray mt-2">
                            <span>MYR 10k</span>
                            <span>MYR 1M</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-shefa-navy mb-2">
                            {t('calc_label_terms')}
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {[30, 60, 90].map((d) => (
                                <button
                                    key={d}
                                    onClick={() => setDays(d)}
                                    className={`py-2 px-4 rounded-xl text-sm font-medium transition-all ${days === d
                                        ? 'bg-shefa-navy text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-shefa-gray hover:bg-gray-200'
                                        }`}
                                >
                                    {d} Days
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-shefa-navy/5 rounded-2xl p-6 space-y-4 border border-shefa-navy/10">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-shefa-navy/70">{t('calc_result_advance')}</span>
                        <span className="font-bold text-shefa-navy">{formatCurrency(results.advance)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-shefa-navy/70">{t('calc_result_fees')}</span>
                        <span className="font-bold text-red-500">-{formatCurrency(results.fee)}</span>
                    </div>
                    <div className="h-px bg-shefa-navy/10 my-2" />
                    <div className="flex justify-between items-center">
                        <span className="font-heading font-medium text-shefa-navy">{t('calc_result_net')}</span>
                        <span className="font-heading text-2xl font-bold text-shefa-gold">{formatCurrency(results.net)}</span>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xs text-shefa-gray mb-6 italic">{t('calc_disclaimer')}</p>
                    <a href="#apply" className="btn-primary w-full justify-center">
                        {t('borrowers_cta_apply')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FundingCalculator;
