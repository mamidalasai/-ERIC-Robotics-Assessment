import React from 'react';
interface Props {
  isPiP: boolean;
  onClick?: () => void;
}
export default function CameraView({ isPiP, onClick }: Props) {
  // Using explicit top/left/width/height for smooth CSS transitions
  const fullscreenClasses =
  'top-0 left-0 w-full h-full rounded-none border-0 z-0';
  const pipClasses =
  'top-[calc(100%-14rem)] left-8 w-80 h-48 rounded-xl shadow-2xl border-4 border-white/10 cursor-pointer hover:border-white/30 hover:scale-105 group z-30';
  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out overflow-hidden bg-black ${isPiP ? pipClasses : fullscreenClasses}`}
      onClick={isPiP ? onClick : undefined}>
      
      <img
        className="w-full h-full object-cover"
        src="/Gemini_Generated_Image_w630l3w630l3w630.png"
        alt="Camera Feed" />
      

      {/* Hover Overlay - Only visible when in PiP mode */}
      {isPiP &&
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <span className="text-white font-semibold text-sm tracking-wide bg-black/50 px-4 py-2 rounded-full">
            Click to enter camera view
          </span>
        </div>
      }
    </div>);

}