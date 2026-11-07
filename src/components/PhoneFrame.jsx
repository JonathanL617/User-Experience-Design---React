import React from 'react';
import { Wifi } from 'lucide-react';

export default function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto w-full sm:w-[390px] h-screen sm:h-[844px] sm:my-4 bg-white sm:rounded-[50px] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] sm:ring-[12px] sm:ring-slate-900 flex flex-col overflow-hidden select-none sm:border-[3px] sm:border-slate-700/30">
      {/* iOS Status Bar */}
      <div className="h-11 px-8 pt-2.5 flex items-center justify-between text-slate-900 text-[13px] font-semibold shrink-0 z-30 select-none bg-white">
        <span>9:41</span>
        
        {/* Dynamic Island / Speaker Pill */}
        <div className="w-24 h-5 bg-black rounded-full mx-auto" />

        <div className="flex items-center gap-1.5">
          {/* Signal Bars */}
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-[3px] h-1.5 bg-slate-900 rounded-xs" />
            <span className="w-[3px] h-2 bg-slate-900 rounded-xs" />
            <span className="w-[3px] h-2.5 bg-slate-900 rounded-xs" />
            <span className="w-[3px] h-3 bg-slate-900 rounded-xs" />
          </div>
          {/* Wi-Fi */}
          <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
          {/* Battery */}
          <div className="w-5 h-2.5 border-[1.5px] border-slate-900 rounded-[3px] p-[1px] flex items-center">
            <div className="w-full h-full bg-slate-900 rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative bg-white">
        {children}
      </div>

      {/* iOS Home Indicator */}
      <div className="h-5 bg-white flex items-center justify-center shrink-0 z-30">
        <div className="w-32 h-1 bg-slate-400/80 rounded-full" />
      </div>
    </div>
  );
}
