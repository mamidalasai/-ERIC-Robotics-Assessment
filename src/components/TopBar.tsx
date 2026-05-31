import React from 'react';
import {
  Pause,
  BatteryFull,
  Signal,
  CheckCircle2,
  ChevronRight } from
'lucide-react';
interface TopBarProps {
  activeView: 'map' | 'camera';
}
export default function TopBar({ activeView }: TopBarProps) {
  return (
    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none z-20">
      {/* Left Section */}
      <div className="flex flex-col gap-3 pointer-events-auto">
        <div className="bg-white rounded-full px-4 py-2 flex items-center gap-3 shadow-md border border-gray-100">
          <span className="text-sm font-semibold text-gray-800">
            Status: On Mission 1234
          </span>
          <div className="bg-gray-100 p-1 rounded-full">
            <Pause size={14} className="text-gray-700" />
          </div>
        </div>
        <button className="bg-white rounded-full px-4 py-2 flex items-center justify-between gap-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors w-fit">
          <span className="text-sm font-bold text-gray-800">QUICK GOAL</span>
          <ChevronRight size={16} className="text-gray-500" />
        </button>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center gap-3 pointer-events-auto">
        <div className="bg-[#16181D] text-white rounded-full px-5 py-2 flex items-center gap-6 shadow-lg border border-gray-800">
          <div className="flex items-center gap-2">
            <BatteryFull size={16} className="text-green-400" />
            <span className="text-sm font-medium">100%</span>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <Signal size={16} className="text-blue-400" />
            <span className="text-sm font-medium">Strong</span>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-300">System:</span>
            <span className="text-sm font-bold">Okay</span>
            <CheckCircle2 size={16} className="text-green-400 ml-1" />
          </div>
        </div>
        <div className="bg-[#2A2D35] text-white rounded-full px-6 py-1.5 shadow-md border border-gray-700">
          <span className="text-sm font-semibold tracking-wide">
            {activeView === 'map' ? 'Map View' : 'Camera View'}
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end gap-3 pointer-events-auto">
        <div className="bg-white rounded-full p-1 flex items-center shadow-md border border-gray-100">
          <span className="text-xs font-bold text-gray-500 px-3">MODE</span>
          <div className="flex bg-gray-100 rounded-full p-0.5">
            <button className="bg-[#16181D] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
              AUTO
            </button>
            <button className="text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
              MANUAL
            </button>
          </div>
        </div>
        <button className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors">
          <span className="text-sm font-bold text-gray-800">INITIATE</span>
          <div className="bg-gray-100 p-1 rounded-full">
            <ChevronRight size={14} className="text-gray-700" />
          </div>
        </button>
      </div>
    </div>);

}