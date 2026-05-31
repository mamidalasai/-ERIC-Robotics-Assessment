import React from 'react';
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle } from
'lucide-react';
export default function Controls() {
  return (
    <div className="absolute bottom-8 right-8 flex flex-col items-center gap-8 pointer-events-auto z-20">
      {/* Emergency Stop Button */}
      <button className="relative w-28 h-28 rounded-full bg-red-600 border-4 border-white shadow-[0_0_20px_rgba(220,38,38,0.4)] flex flex-col items-center justify-center hover:bg-red-700 active:scale-95 transition-all group">
        <div className="absolute inset-1 border-2 border-red-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <span className="text-white font-bold text-[10px] tracking-widest uppercase mb-1">
          Emergency
        </span>
        <span className="text-white font-black text-xl tracking-wider">
          STOP
        </span>
      </button>

      {/* D-Pad */}
      <div className="relative w-36 h-36 bg-[#1E2128] rounded-full shadow-xl border border-gray-800 flex items-center justify-center">
        {/* Center Dot */}
        <div className="w-4 h-4 bg-gray-500 rounded-full shadow-inner"></div>

        {/* Directional Buttons */}
        <button className="absolute top-2 left-1/2 -translate-x-1/2 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
          <ChevronUp size={28} />
        </button>
        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
          <ChevronDown size={28} />
        </button>
        <button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
          <ChevronLeft size={28} />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>);

}