import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const YieldChart = () => {
    const { t } = useLanguage();

    const data = [
        { name: t('yield_label_fd'), value: 3, fill: '#ADB5BD' },
        { name: t('yield_label_bonds'), value: 5, fill: '#6C757D' },
        { name: t('yield_label_p2p'), value: 10, fill: '#343A40' },
        { name: t('yield_label_shefa'), value: 15, fill: '#C8A34C' },
    ];

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 rounded-xl shadow-xl border border-shefa-gold/20">
                    <p className="font-heading font-medium text-shefa-navy mb-1">{label}</p>
                    <p className="text-shefa-gold font-bold text-lg">
                        {payload[0].value}%
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full h-[500px] bg-white rounded-3xl p-6 lg:p-10 shadow-xl border border-shefa-gold/20">
            <div className="mb-8">
                <h3 className="font-heading text-2xl font-medium text-shefa-navy mb-2">{t('yield_title')}</h3>
                <p className="text-shefa-gray">{t('yield_subtitle')}</p>
            </div>

            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E9ECEF" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6C757D', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            unit="%"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6C757D', fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200, 163, 76, 0.1)', radius: 8 }} />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60} animationDuration={1500}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-6 text-center text-xs text-shefa-gray/60 italic">
                * Projected returns based on historical performance and market analysis. Past performance is not indicative of future results.
            </div>
        </div>
    );
};

export default YieldChart;
