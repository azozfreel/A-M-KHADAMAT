import React from 'react';

interface ProjectMockupVisualProps {
  type: 'store' | 'funnel' | 'ecosystem' | 'media' | 'analytics' | 'operations';
  accentColor: string;
}

export const ProjectMockupVisual: React.FC<ProjectMockupVisualProps> = ({ type, accentColor }) => {
  switch (type) {
    case 'store':
      return (
        <div className="w-full h-full bg-[#090A0E] p-5 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="text-xs font-bold text-white tracking-wider">AURA COLLECTION STORE</span>
            </div>
            <span className="text-[10px] text-amber-300 font-mono">Conversion: 4.8%</span>
          </div>

          {/* Product Showcase Mockup */}
          <div className="grid grid-cols-2 gap-3 my-auto">
            <div className="rounded-xl bg-zinc-900/90 border border-white/[0.06] p-2.5 flex flex-col justify-between">
              <div className="h-16 rounded-lg bg-gradient-to-br from-amber-500/10 to-zinc-800 flex items-center justify-center">
                <span className="text-[11px] text-amber-200 font-semibold tracking-wide">PREMIUM ITEM</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] text-zinc-300">Edition I</span>
                <span className="text-[10px] text-amber-400 font-bold">$189</span>
              </div>
            </div>

            <div className="rounded-xl bg-zinc-900/90 border border-white/[0.06] p-2.5 flex flex-col justify-between">
              <div className="h-16 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                <span className="text-[11px] text-zinc-300 font-semibold tracking-wide">CLASSIC SERIES</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] text-zinc-300">Edition II</span>
                <span className="text-[10px] text-amber-400 font-bold">$249</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.08]">
            <span>Fast Checkout • 1-Click Buy</span>
            <span className="text-amber-300">Stripe &amp; Apple Pay Ready</span>
          </div>
        </div>
      );

    case 'operations':
      return (
        <div className="w-full h-full bg-[#080B0F] p-5 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px] font-mono">
            <span className="text-emerald-400">FULFILLMENT &amp; LOGISTICS</span>
            <span className="text-zinc-400">DISPATCH v2.1</span>
          </div>

          <div className="my-auto space-y-2 py-1">
            <div className="p-2 rounded-lg bg-zinc-900/90 border border-emerald-500/20 flex items-center justify-between text-[10px]">
              <span className="text-zinc-200">Orders Processed Today</span>
              <span className="text-emerald-400 font-bold font-mono">148 Orders</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/90 border border-white/[0.06] flex items-center justify-between text-[10px]">
              <span className="text-zinc-300">Average Delivery Time</span>
              <span className="text-zinc-200 font-mono">24h - 48h</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/90 border border-white/[0.06] flex items-center justify-between text-[10px]">
              <span className="text-zinc-300">Delivery Success Rate</span>
              <span className="text-emerald-400 font-bold font-mono">96.4%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.08]">
            <span>Automated Courier Sync</span>
            <span className="text-emerald-400">Active Pipeline</span>
          </div>
        </div>
      );

    case 'funnel':
      return (
        <div className="w-full h-full bg-[#0A0A0C] p-5 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px] text-zinc-400 font-mono">
            <span>FUNNEL ACQUISITION</span>
            <span className="text-amber-400">QUALIFIED LEADS</span>
          </div>

          <div className="my-auto space-y-2 py-1">
            <div className="h-6 rounded-md bg-zinc-900 border border-white/[0.06] flex items-center px-3 justify-between text-[10px]">
              <span className="text-zinc-300">1. Targeted Social Traffic</span>
              <span className="text-zinc-500">100%</span>
            </div>
            <div className="h-6 rounded-md bg-zinc-900/80 border border-amber-500/20 flex items-center px-3 justify-between text-[10px]">
              <span className="text-amber-200">2. High-Converting Landing Page</span>
              <span className="text-amber-400 font-semibold">32.4%</span>
            </div>
            <div className="h-6 rounded-md bg-amber-500/10 border border-amber-500/40 flex items-center px-3 justify-between text-[10px]">
              <span className="text-white font-semibold">3. Direct Booking &amp; Order</span>
              <span className="text-amber-300 font-bold">11.8%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.08]">
            <span>ROAS Target: 3.5x+</span>
            <span className="text-amber-400">Direct Inquiries Engine</span>
          </div>
        </div>
      );

    case 'ecosystem':
      return (
        <div className="w-full h-full bg-[#080A0E] p-5 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px] text-sky-400 font-mono">
            <span>DIGITAL VENTURE LAB</span>
            <span>SYSTEM MATRIX</span>
          </div>

          <div className="my-auto grid grid-cols-3 gap-2 text-center py-1">
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-white/[0.06]">
              <span className="block text-[10px] text-zinc-400">Products</span>
              <span className="text-xs font-bold text-white">Digital</span>
            </div>
            <div className="p-2 rounded-lg bg-sky-950/40 border border-sky-500/30">
              <span className="block text-[10px] text-sky-300">Flow</span>
              <span className="text-xs font-bold text-sky-200">Automated</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-white/[0.06]">
              <span className="block text-[10px] text-zinc-400">Revenue</span>
              <span className="text-xs font-bold text-white">Recurring</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.08]">
            <span>Productized Services</span>
            <span className="text-sky-400">Zero-Friction Scale</span>
          </div>
        </div>
      );

    case 'media':
      return (
        <div className="w-full h-full bg-[#0B0910] p-5 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px] text-purple-300 font-mono">
            <span>MEDIA DISTRIBUTION</span>
            <span>REACH ENGINE</span>
          </div>

          <div className="my-auto flex items-center justify-center gap-2 py-1">
            <div className="w-16 h-20 rounded-lg bg-zinc-900 border border-purple-500/20 p-1.5 flex flex-col justify-between text-[9px] text-zinc-400">
              <span className="text-purple-300">Reels</span>
              <div className="h-7 rounded bg-purple-900/30 flex items-center justify-center text-[10px] text-purple-200">▶ 48K</div>
              <span>Reach</span>
            </div>
            <div className="w-16 h-20 rounded-lg bg-zinc-900 border border-white/[0.06] p-1.5 flex flex-col justify-between text-[9px] text-zinc-400">
              <span className="text-white">TikTok</span>
              <div className="h-7 rounded bg-zinc-800/80 flex items-center justify-center text-[10px] text-zinc-200">▶ 92K</div>
              <span>Views</span>
            </div>
            <div className="w-16 h-20 rounded-lg bg-zinc-900 border border-white/[0.06] p-1.5 flex flex-col justify-between text-[9px] text-zinc-400">
              <span className="text-white">X / Post</span>
              <div className="h-7 rounded bg-zinc-800/80 flex items-center justify-center text-[10px] text-zinc-200">24 RT</div>
              <span>Thread</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.08]">
            <span>Audience Retention: 74%</span>
            <span className="text-purple-300">Commercial Reach</span>
          </div>
        </div>
      );

    case 'analytics':
    default:
      return (
        <div className="w-full h-full bg-[#080B0F] p-5 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px] font-mono">
            <span className="text-emerald-400">ECOMMERCE GROWTH</span>
            <span className="text-zinc-400">LIVE KPIS</span>
          </div>
          <div className="my-auto grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06]">
              <span className="text-[10px] text-zinc-400 block">Total Sales</span>
              <span className="text-sm font-bold text-emerald-400">$24,850</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06]">
              <span className="text-[10px] text-zinc-400 block">Net Margin</span>
              <span className="text-sm font-bold text-white">38.2%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.08]">
            <span>Scaled Operations</span>
            <span className="text-emerald-400">Profitable Growth</span>
          </div>
        </div>
      );
  }
};
