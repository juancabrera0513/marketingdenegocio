import React, { useState } from "react";

export default function FloatingIcons() {
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setClickedIcon(icon);
    setTimeout(() => setClickedIcon(null), 300);
  };

  const leftIcons = [
    { id: "facebook", iconClass: "fab fa-facebook-f", baseColor: "text-blue-500", top: "top-20 left-6" },
    { id: "tiktok", iconClass: "fab fa-tiktok", baseColor: "text-black", top: "top-1/3 left-8" },
    { id: "laptop", iconClass: "fas fa-laptop-code", baseColor: "text-indigo-500", top: "top-1/2 left-10" },
    { id: "bullhorn", iconClass: "fas fa-bullhorn", baseColor: "text-pink-500", top: "top-3/4 left-8" },
  ];

  const rightIcons = [
    { id: "chart", iconClass: "fas fa-chart-line", baseColor: "text-green-500", top: "top-20 right-6" },
    { id: "globe", iconClass: "fas fa-globe", baseColor: "text-yellow-500", top: "top-1/3 right-8" },
    { id: "instagram", iconClass: "fab fa-instagram", baseColor: "text-pink-500", top: "top-1/2 right-10" },
    { id: "linkedin", iconClass: "fab fa-linkedin-in", baseColor: "text-blue-500", top: "top-3/4 right-8" },
  ];

  return (
    <div className="hidden sm:block fixed top-0 left-0 w-full h-full z-40 pointer-events-none">
      {/* Lado izquierdo */}
      {leftIcons.map((item, index) => (
        <div
          key={item.id}
          className={`absolute ${index % 2 === 0 ? "animate-drift" : "animate-drift-slower"} ${item.top} opacity-40 text-4xl md:text-5xl pointer-events-auto`}
        >
          <button
            onClick={() => handleIconClick(item.id)}
            className={`transition-all transform ${
              clickedIcon === item.id
                ? "scale-150 opacity-100"
                : "hover:scale-150 hover:opacity-100"
            }`}
          >
            <i className={`${item.iconClass} ${item.baseColor}`}></i>
          </button>
        </div>
      ))}

      {/* Lado derecho */}
      {rightIcons.map((item, index) => (
        <div
          key={item.id}
          className={`absolute ${index % 2 === 0 ? "animate-drift" : "animate-drift-slower"} ${item.top} opacity-40 text-4xl md:text-5xl pointer-events-auto`}
        >
          <button
            onClick={() => handleIconClick(item.id)}
            className={`transition-all transform ${
              clickedIcon === item.id
                ? "scale-150 opacity-100"
                : "hover:scale-150 hover:opacity-100"
            }`}
          >
            <i className={`${item.iconClass} ${item.baseColor}`}></i>
          </button>
        </div>
      ))}
    </div>
  );
}
