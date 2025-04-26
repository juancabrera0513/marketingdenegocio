import React, { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Laura G.", feedback: "Estoy encantada con mi nueva página. ¡Es rápida, linda y mis clientes me contactan mucho más!" },
    { name: "Carlos M.", feedback: "Excelente servicio, muy profesional y siempre atento. Recomiendo totalmente." },
    { name: "Andrea R.", feedback: "Mi tienda online quedó espectacular. Gracias por toda tu ayuda y paciencia." },
    { name: "Rosa V.", feedback: "Mi negocio creció muchísimo desde que tengo presencia en redes. ¡Gracias por el excelente trabajo!" },
    { name: "Miguel H.", feedback: "Recibí atención personalizada desde el primer día. Muy recomendado para emprendedores." },
    { name: "Sofía T.", feedback: "El sitio web quedó mejor de lo que imaginaba. Rápido, bonito y fácil de usar." },
    { name: "Luis C.", feedback: "Gracias por ayudarme a llevar mi negocio al mundo digital. ¡Gran experiencia!" },
    { name: "Fernanda P.", feedback: "El branding y diseño fue justo lo que necesitaba. Todo quedó excelente." },
    { name: "Diego F.", feedback: "Ahora tengo una imagen profesional y presencia en línea gracias a su equipo." },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const getVisibleTestimonials = () => {
    const end = startIndex + visibleCount;
    if (end <= testimonials.length) {
      return testimonials.slice(startIndex, end);
    }
    return [
      ...testimonials.slice(startIndex),
      ...testimonials.slice(0, end - testimonials.length),
    ];
  };

  return (
    <section id="testimonials" className="py-20 px-4 text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Testimonios</h2>
      <div className="flex justify-center gap-6 transition-transform duration-700 ease-in-out flex-wrap">
        {getVisibleTestimonials().map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm flex-grow"
          >
            <p className="text-gray-700 mb-4 text-lg italic">“{item.feedback}”</p>
            <p className="text-blue-600 font-semibold">— {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
