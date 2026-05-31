import React from 'react';
import { LayoutGrid, Map, User, LineChart, Settings } from 'lucide-react';
export default function Sidebar() {
  return (
    <div className="w-16 h-full bg-[#16181D] flex flex-col items-center py-6 z-20 shadow-xl border-r border-gray-800">
      {/* Logo Area */}
      <div className="mb-8 flex flex-col items-center">
        <span className="text-white font-bold text-xl tracking-wider">
          ERIC
        </span>
        <div className="w-8 h-0.5 bg-blue-500 mt-1 rounded-full"></div>
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col gap-6 w-full items-center flex-1">
        <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">
          <LayoutGrid size={22} />
        </button>
        <button className="p-3 text-white bg-gray-800 rounded-xl shadow-sm transition-colors relative">
          <Map size={22} />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full"></div>
        </button>
        <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">
          <User size={22} />
        </button>
        <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">
          <LineChart size={22} />
        </button>
      </nav>

      {/* Bottom Settings */}
      <div className="mt-auto">
        <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">
          <Settings size={22} />
        </button>
      </div>
    </div>);

}