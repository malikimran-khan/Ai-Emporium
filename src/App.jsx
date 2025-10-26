import React from "react";

export default function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen  bg-black overflow-hidden">
      {/* Centered and Small Video */}
      <video
        src="/video.mp4" // ensure file is in the public folder
        autoPlay
        loop
        muted
        playsInline
        className="object-contain rounded-xl shadow-lg"
      />
    </div>
    
  );
}
