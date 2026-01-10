'use client';
import { useState } from 'react';

export default function Pricing() {
  // Initialized to true so Yearly is active on page load
  const [isYearly, setIsYearly] = useState(true);

  const plans = {
    free: { price: "0" },
    basic: { 
      monthly: "6.99", 
      yearly: "4.99" 
    },
    pro: { 
      monthly: "16.99", 
      yearly: "13.99" 
    }
  };

  return (
    <div className="min-h-screen bg-black py-16 relative overflow-hidden">
      {/* Recessed Blue Ambient Glow */}
      <div 
        className="absolute left-1/2 top-1/4 w-[500px] h-[500px] blur-[100px] pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(6,182,212,0.8) 50%, transparent 100%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
            Simple Pricing
          </h1>
          
          {/* Toggle Switch */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center relative">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 ${!isYearly ? 'text-white' : 'text-white/40'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 ${isYearly ? 'text-white' : 'text-white/40'}`}
              >
                Yearly
              </button>
              {/* Sliding Highlight */}
              <div 
                className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white/10 rounded-full transition-transform duration-300 ease-out ${isYearly ? 'translate-x-full' : 'translate-x-0'}`}
              />
            </div>
            {isYearly && (
              <span className="text-blue-400 text-[11px] font-medium uppercase tracking-wider animate-fade-in">
                Save 20% with yearly billing
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-12">
          
          {/* Free Card */}
          <div className="flex flex-col bg-blue-500/[0.02] backdrop-blur-2xl border border-white/5 rounded-[2rem] p-7 hover:border-blue-500/20 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-white/40 mb-3">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium text-white">£0</span>
                <span className="text-white/20 text-sm font-light">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-2.5 text-white/60 text-sm font-light">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>2,500 words/month</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/60 text-sm font-light">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>Standard processing</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="block w-full bg-white/5 text-white text-sm text-center py-3 rounded-full font-medium border border-white/10 hover:bg-white/10 transition-all">
                Download Free
              </button>
            </div>
          </div>

          {/* Basic Card (Popular) */}
          <div className="flex flex-col bg-blue-500/[0.05] backdrop-blur-2xl border border-blue-500/20 rounded-[2rem] p-7 hover:border-blue-500/40 transition-all duration-500 relative">
            <div className="absolute top-5 right-7">
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-bold">
                Popular
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-normal text-white/40 mb-3">Basic</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium text-white">
                  £{isYearly ? plans.basic.yearly : plans.basic.monthly}
                </span>
                <span className="text-white/20 text-sm font-light">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-2.5 text-white/80 text-sm font-light">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                <span>Unlimited transcriptions</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/80 text-sm font-light">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                <span>30-day history</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/80 text-sm font-light">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                <span>45 WPM tracking</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="block w-full bg-blue-600 text-white text-sm text-center py-3 rounded-full font-medium shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:bg-blue-500 transition-all">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Card */}
          <div className="flex flex-col bg-blue-500/[0.02] backdrop-blur-2xl border border-white/5 rounded-[2rem] p-7 hover:border-blue-500/20 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-white/40 mb-3">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium text-white">
                  £{isYearly ? plans.pro.yearly : plans.pro.monthly}
                </span>
                <span className="text-white/20 text-sm font-light">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-2.5 text-white/60 text-sm font-light">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>Infinite history</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/60 text-sm font-light">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>Priority processing</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/60 text-sm font-light">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>Custom AI commands</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="block w-full bg-white text-black text-sm text-center py-3 rounded-full font-medium hover:bg-gray-200 transition-all">
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}