import React from "react";

export default function Process() {
  const steps = [
    {
      title: "1. Descubrimiento",
      description: "Analizamos tu negocio, tu mercado y tus objetivos para crear una estrategia sólida.",
      icon: "fa-search",
    },
    {
      title: "2. Estrategia Visual",
      description: "Diseñamos la estructura y estilo visual que mejor representa tu marca.",
      icon: "fa-paint-brush",
    },
    {
      title: "3. Construcción y Optimización",
      description: "Desarrollamos el sitio aplicando técnicas de SEO, velocidad y experiencia de usuario.",
      icon: "fa-tools",
    },
    {
      title: "4. Lanzamiento Estratégico",
      description: "Publicamos tu página con optimizaciones iniciales para un impacto inmediato.",
      icon: "fa-rocket",
    },
    {
      title: "5. Acompañamiento y Crecimiento",
      description: "Opcionalmente, te ayudamos a mantener, actualizar y escalar tu sitio.",
      icon: "fa-chart-line",
    }
  ];

  return (
    <section id="process" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Nuestro Proceso de Trabajo
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-transform duration-300 hover:scale-[1.03]"
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <div className="text-blue-600 text-3xl">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-1">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
