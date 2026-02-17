import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 48, suffix: 'h', label: 'Typical policy indication', prefix: '<' },
  { value: 94, suffix: '%', label: 'Claims satisfaction score', prefix: '' },
  { value: 2.8, suffix: 'B+', label: 'Receivables under coverage', prefix: 'MYR ' },
  { value: 0, suffix: '', label: 'Malaysia + key ASEAN markets', prefix: 'Regional', isText: true },
];

const WhyShefa = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      if (stat.isText) return;
      
      const duration = 2000;
      const startTime = Date.now();
      const startValue = 0;
      const endValue = stat.value;

      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const currentValue = startValue + (endValue - startValue) * easeProgress;

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] =
            stat.value % 1 !== 0
              ? parseFloat(currentValue.toFixed(1))
              : Math.round(currentValue);
          return newCounters;
        });

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-shefa-white"
    >
      <div className="w-[86vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4vw] items-center">
          {/* Left Image */}
          <div className="relative h-[300px] lg:h-[72vh] image-card">
            <img
              src="/why_meeting.jpg"
              alt="Shefa Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="eyebrow block mb-4">Why Shefa</span>
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-8">
              Built for speed.{" "}
              <span className="text-shefa-gold">Backed by discipline.</span>
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  {stat.isText ? (
                    <div className="font-heading text-3xl lg:text-5xl font-medium text-shefa-navy mb-2">
                      {stat.prefix}
                    </div>
                  ) : (
                    <div className="font-heading text-3xl lg:text-5xl font-medium text-shefa-navy mb-2">
                      {stat.prefix}
                      {counters[index]}
                      {stat.suffix}
                    </div>
                  )}
                  <div className="text-sm text-shefa-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShefa;
