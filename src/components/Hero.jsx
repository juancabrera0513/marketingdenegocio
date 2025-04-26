import React from "react";

export default function Hero({ heading, subheading, cta, smallText }) {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center px-4 text-center">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      {/* Contenido encima del video */}
      <div className="relative z-10 bg-white/80 text-gray-800 p-8 rounded-xl max-w-3xl shadow-lg backdrop-blur-md animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {heading}
        </h1>
        <p className="text-lg md:text-xl mb-6">
          {subheading}
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:scale-105"
        >
          {cta}
        </a>
        {smallText && (
          <p className="mt-4 text-sm text-gray-600">
            {smallText}
          </p>
        )}
      </div>
    </section>
  );
}
