import React from "react";

export default function AIEmporium() {
  return (
    <div className="relative w-[60wv] h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Centered Video (slightly smaller than full screen) */}
      <video
        src="/video 1 -.mp4" // ensure file is in public folder
        autoPlay
        loop
        muted
        playsInline
        className="max-w-[60vw] max-h-[60vh] object-contain rounded-xl shadow-lg"
      />
    </div>
  );
}
