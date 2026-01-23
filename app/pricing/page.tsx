'use client';

import { useMemo, useState } from 'react';

type Billing = 'monthly' | 'yearly';
type PlanKey = 'free' | 'basic' | 'pro';

type Plan = {
  key: PlanKey;
  name: string;
  monthlyPrice: number;            // £ per month when billed monthly
  yearlyMonthlyPrice: number;      // £ per month when billed yearly (effective monthly)
  features: string[];
  disabledFeatures?: string[];
  highlight?: boolean;
};

function formatPriceGBP(value: number) {
  if (value === 0) return '£0';
  return `£${value.toFixed(2)}`;
}

function calcYearlySavingsPercent(monthly: number, yearlyMonthly: number) {
  if (monthly <= 0) return 0;
  const pct = Math.round((1 - yearlyMonthly / monthly) * 100);
  return Math.max(0, pct);
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const billing: Billing = isYearly ? 'yearly' : 'monthly';

  const plans: Plan[] = useMemo(() => {
    return [
      {
        key: 'free',
        name: 'Free',
        monthlyPrice: 0,
        yearlyMonthlyPrice: 0,
        features: [
          '2,000 words/month',
          '10 AI optimizations/month',
          'Standard processing speed',
          '30-day history',
          '95+ languages',
        ],
        disabledFeatures: ['Double-tap lock mode'],
      },
      {
        key: 'basic',
        name: 'Basic',
        monthlyPrice: 6.99,
        yearlyMonthlyPrice: 4.99,
        features: [
          '25,000 words/month',
          '75 AI optimizations/month',
          'Priority processing speed',
          'Double-tap lock mode',
          '90-day history',
          '95+ languages',
        ],
        disabledFeatures: [],
        highlight: true,
      },
      {
        key: 'pro',
        name: 'Pro',
        monthlyPrice: 16.99,
        yearlyMonthlyPrice: 11.99,
        features: [
          'Unlimited words',
          '750 AI optimizations/month',
          'Fastest processing speed',
          'Double-tap lock mode',
          'Infinite history',
          'Zero-Persistence Architecture',
          'Priority support',
          'Early access to features',
          '95+ languages',
        ],
        disabledFeatures: [],
      },
    ];
  }, []);

  const savingsPct = calcYearlySavingsPercent(
    // use Basic as the headline savings reference (or choose Pro if you prefer)
    plans.find(p => p.key === 'basic')!.monthlyPrice,
    plans.find(p => p.key === 'basic')!.yearlyMonthlyPrice
  );

  const priceFor = (p: Plan) => {
    const val = billing === 'yearly' ? p.yearlyMonthlyPrice : p.monthlyPrice;
    return formatPriceGBP(val);
  };

  const ctaHref = (plan: PlanKey) => `/api/download?plan=${plan}&billing=${billing}`;

  return (
    <div className="min-h-screen bg-black py-16 relative overflow-hidden">
      <div
        className="absolute left-1/2 top-1/4 w-[500px] h-[500px] blur-[100px] pointer-events-none opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(6,182,212,0.8) 50%, transparent 100%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight"
            style={{ fontFamily: 'SF Pro Display, sans-serif' }}
          >
            Simple Pricing
          </h1>

          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center relative">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 ${
                  !isYearly ? 'text-white' : 'text-white/40'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 ${
                  isYearly ? 'text-white' : 'text-white/40'
                }`}
              >
                Yearly
              </button>

              <div
                className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white/10 rounded-full transition-transform duration-300 ease-out ${
                  isYearly ? 'translate-x-full' : 'translate-x-0'
                }`}
              />
            </div>

            {isYearly && (
              <span className="text-blue-400 text-[11px] font-medium uppercase tracking-wider">
                Save {savingsPct}% with yearly billing
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-12">
          {/* Free */}
          <div className="flex flex-col bg-blue-500/[0.02] backdrop-blur-2xl border border-white/5 rounded-[2rem] p-7 hover:border-blue-500/20 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-white/40 mb-3">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium text-white">{priceFor(plans[0])}</span>
                <span className="text-white/20 text-sm font-light">/mo</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {plans[0].features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/60 text-sm font-light">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{f}</span>
                </li>
              ))}
              {(plans[0].disabledFeatures || []).map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/30 text-sm font-light line-through">
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href={ctaHref('free')}
                className="block w-full bg-white/5 text-white text-sm text-center py-3 rounded-full font-medium border border-white/10 hover:bg-white/10 transition-all"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Basic (Popular) */}
          <div className="flex flex-col bg-blue-500/[0.05] backdrop-blur-2xl border border-blue-500/20 rounded-[2rem] p-7 hover:border-blue-500/40 transition-all duration-500 relative">
            <div className="absolute top-5 right-7">
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-bold">
                Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-normal text-white/40 mb-3">Basic</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium text-white">{priceFor(plans[1])}</span>
                <span className="text-white/20 text-sm font-light">/mo</span>
              </div>
              {isYearly && (
                <div className="text-white/30 text-xs mt-2">
                  Billed yearly ({formatPriceGBP(plans[1].yearlyMonthlyPrice * 12)}/yr)
                </div>
              )}
            </div>

            <ul className="space-y-4 mb-10">
              {plans[1].features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/80 text-sm font-light">
                  <div className="w-1 h-1 rounded-full bg-blue-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href={ctaHref('basic')}
                className="block w-full bg-white-600 text-white text-sm text-center py-3 rounded-full font-medium hover:bg-blue-500 transition-all"
              >
                Upgrade In-App
              </a>
            </div>
          </div>

          {/* Pro */}
          <div className="flex flex-col bg-blue-500/[0.02] backdrop-blur-2xl border border-white/5 rounded-[2rem] p-7 hover:border-blue-500/20 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-white/40 mb-3">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium text-white">{priceFor(plans[2])}</span>
                <span className="text-white/20 text-sm font-light">/mo</span>
              </div>
              {isYearly && (
                <div className="text-white/30 text-xs mt-2">
                  Billed yearly ({formatPriceGBP(plans[2].yearlyMonthlyPrice * 12)}/yr)
                </div>
              )}
            </div>

            <ul className="space-y-4 mb-10">
              {plans[2].features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/60 text-sm font-light">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href={ctaHref('pro')}
                className="block w-full bg-white text-black text-sm text-center py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
              >
                Upgrade In-App
              </a>
            </div>
          </div>
        </div>

        {/* Tiny footnote for clarity */}
        <div className="text-center text-white/25 text-xs mt-8">
          Prices shown in GBP. Yearly shows effective monthly price.
        </div>
      </div>
    </div>
  );
}