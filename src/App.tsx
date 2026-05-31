import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Controls from './components/Controls';
import MapView from './components/MapView';
import CameraView from './components/CameraView';
export function App() {
  const [activeView, setActiveView] = useState<'map' | 'camera'>('map');
  const toggleView = () => {
    setActiveView((prev) => prev === 'map' ? 'camera' : 'map');
  };
  return <div className="flex h-screen w-screen overflow-hidden bg-black font-sans text-gray-900 selection:bg-blue-500 selection:text-white">
      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden bg-black">
        {/*
         Both views are always rendered to prevent the video from reloading.
         CSS transitions handle moving them between fullscreen and Picture-in-Picture.
        */}
        <MapView isPiP={activeView === 'camera'} onClick={toggleView} />
        <CameraView isPiP={activeView === 'map'} onClick={toggleView} />

        {/* Floating UI Layer */}
        <div className="absolute inset-0 z-40 pointer-events-none">
          <TopBar activeView={activeView} />
          <Controls />
        </div>
      </main>
    </div>;
}