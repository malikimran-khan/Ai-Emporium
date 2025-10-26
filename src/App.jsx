import React, { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to load video from cache if available
    const cachedVideo = localStorage.getItem("cachedVideo");

    if (cachedVideo) {
      // If cached blob URL exists, use it
      setVideoSrc(cachedVideo);
      setLoading(false);
    } else {
      // Otherwise fetch and cache it
      fetch("/video.mp4")
        .then((res) => res.blob())
        .then((blob) => {
          const blobURL = URL.createObjectURL(blob);
          localStorage.setItem("cachedVideo", blobURL);
          setVideoSrc(blobURL);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, []);

  const [videoSrc, setVideoSrc] = useState("");

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black overflow-hidden relative">
      {/* Loading Spinner */}
      {loading && (
        <div className="absolute flex flex-col items-center justify-center w-full h-full text-white">
          <div className="w-16 h-16 border-4 border-gray-400 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-lg tracking-wider">Loading...</p>
        </div>
      )}

      {/* Video */}
      {!loading && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setLoading(false)}
          className="object-contain rounded-xl shadow-lg w-full h-full"
        />
      )}
    </div>
  );
}
