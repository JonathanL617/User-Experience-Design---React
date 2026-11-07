import React from 'react';
import { Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SuccessView() {
  const { successConfig, setCurrentScreen } = useApp();

  const title = successConfig?.title || 'Success!';
  const subtitle = successConfig?.subtitle || 'Action completed successfully';
  const next = successConfig?.nextScreen || 'home';

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full bg-white px-8 select-none animate-fadeIn">
      {/* Big Animated / Clean Check Circle */}
      <div className="w-28 h-28 rounded-full bg-[#e0f2fe] flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full border-4 border-[#00a6f4] flex items-center justify-center">
          <Check className="w-9 h-9 text-[#00a6f4] stroke-[3]" />
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-[26px] font-extrabold text-[#0f172a] text-center tracking-tight">
        {title}
      </h1>

      {/* Subtitle / Details */}
      <p className="text-slate-500 text-[15px] font-medium text-center mt-2.5 mb-8">
        {subtitle}
      </p>

      {/* Return Button */}
      <button
        onClick={() => setCurrentScreen(next)}
        className="w-full py-4 rounded-2xl bg-[#00a6f4] text-white font-bold text-base shadow-sm hover:bg-[#0092d8] active:scale-[0.98] transition cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
}
