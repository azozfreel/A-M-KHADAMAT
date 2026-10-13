import React from 'react';

interface ProjectMockupVisualProps {
  type: 'store' | 'funnel' | 'ecosystem' | 'media' | 'analytics' | 'operations';
  accentColor: string;
}

export const ProjectMockupVisual: React.FC<ProjectMockupVisualProps> = ({ type }) => {
  switch (type) {
    case 'store':
      return (
        <div className="w-full h-full bg-[#111318] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-zinc-200">Aura Retail Store</span>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono">Conversion: 4.8%</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 my-auto">
            <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-2.5 flex flex-col justify-between">
              <div className="h-14 rounded-md bg-zinc-800/60 flex items-center justify-center">
                <span className="text-[11px] text-zinc-300 font-medium">Product Item 01</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Edition I</span>
                <span className="text-zinc-200 font-semibold">$189</span>
              </div>
            </div>

            <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-2.5 flex flex-col justify-between">
              <div className="h-14 rounded-md bg-zinc-800/60 flex items-center justify-center">
                <span className="text-[11px] text-zinc-300 font-medium">Product Item 02</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Edition II</span>
                <span className="text-zinc-200 font-semibold">$249</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-zinc-800">
            <span>Fast Checkout • Mobile Optimized</span>
            <span className="text-zinc-400">1-Click Payment</span>
          </div>
        </div>
      );

    case 'operations':
      return (
        <div className="w-full h-full bg-[#111318] p-4 flex flex-col justify-between select-none font-mono">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px]">
            <span className="text-zinc-300">FULFILLMENT DISPATCH</span>
            <span className="text-zinc-500">OPERATIONS</span>
          </div>

          <div className="my-auto space-y-1.5 py-1">
            <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-between text-[11px]">
              <span className="text-zinc-400">Orders Processed</span>
              <span className="text-zinc-200 font-bold">148 Orders</span>
            </div>
            <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-between text-[11px]">
              <span className="text-zinc-400">Average Transit</span>
              <span className="text-zinc-200 font-bold">24h - 48h</span>
            </div>
            <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-between text-[11px]">
              <span className="text-zinc-400">Success Rate</span>
              <span className="text-emerald-400 font-bold">96.4%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-zinc-800">
            <span>Automated Logistics</span>
            <span className="text-zinc-400">Real-Time Sync</span>
          </div>
        </div>
      );

    case 'funnel':
      return (
        <div className="w-full h-full bg-[#111318] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px] text-zinc-400 font-mono">
            <span>ACQUISITION FUNNEL</span>
            <span>INTENT LEADS</span>
          </div>

          <div className="my-auto space-y-1.5 py-1">
            <div className="h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center px-2.5 justify-between text-[10px]">
              <span className="text-zinc-400">1. Social Traffic</span>
              <span className="text-zinc-500">100%</span>
            </div>
            <div className="h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center px-2.5 justify-between text-[10px]">
              <span className="text-zinc-300">2. Landing Engagement</span>
              <span className="text-zinc-200 font-medium">32.4%</span>
            </div>
            <div className="h-6 rounded bg-zinc-800/80 border border-zinc-700 flex items-center px-2.5 justify-between text-[10px]">
              <span className="text-white font-medium">3. Order / Booking</span>
              <span className="text-emerald-400 font-bold">11.8%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-zinc-800">
            <span>ROAS Target: 3.5x+</span>
            <span className="text-zinc-400">Verified Pipeline</span>
          </div>
        </div>
      );

    case 'ecosystem':
      return (
        <div className="w-full h-full bg-[#111318] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px] text-zinc-400 font-mono">
            <span>DIGITAL LAB</span>
            <span>SYSTEM MATRIX</span>
          </div>

          <div className="my-auto grid grid-cols-3 gap-2 text-center py-1">
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
              <span className="block text-[10px] text-zinc-500">Products</span>
              <span className="text-xs font-semibold text-zinc-200">Digital</span>
            </div>
            <div className="p-2 rounded bg-zinc-800/70 border border-zinc-700">
              <span className="block text-[10px] text-zinc-400">Workflow</span>
              <span className="text-xs font-semibold text-white">Automated</span>
            </div>
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
              <span className="block text-[10px] text-zinc-500">Revenue</span>
              <span className="text-xs font-semibold text-zinc-200">Recurring</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-zinc-800">
            <span>Productized Services</span>
            <span className="text-zinc-400">Scalable System</span>
          </div>
        </div>
      );

    case 'media':
    default:
      return (
        <div className="w-full h-full bg-[#111318] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px] text-zinc-400 font-mono">
            <span>MEDIA DISTRIBUTION</span>
            <span>ORGANIC REACH</span>
          </div>

          <div className="my-auto flex items-center justify-center gap-2 py-1">
            <div className="w-16 h-18 rounded bg-zinc-900 border border-zinc-800 p-1.5 flex flex-col justify-between text-[9px] text-zinc-400">
              <span>Shorts</span>
              <div className="h-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-200">48K</div>
              <span>Views</span>
            </div>
            <div className="w-16 h-18 rounded bg-zinc-900 border border-zinc-800 p-1.5 flex flex-col justify-between text-[9px] text-zinc-400">
              <span>Reels</span>
              <div className="h-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-200">92K</div>
              <span>Reach</span>
            </div>
            <div className="w-16 h-18 rounded bg-zinc-900 border border-zinc-800 p-1.5 flex flex-col justify-between text-[9px] text-zinc-400">
              <span>Posts</span>
              <div className="h-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-200">24 RT</div>
              <span>Engage</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-zinc-800">
            <span>Retention Rate: 74%</span>
            <span className="text-zinc-400">Audience Growth</span>
          </div>
        </div>
      );
  }
};
