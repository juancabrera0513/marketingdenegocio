import React from "react";

export default function Services({ type }) {
  const webPackages = [
    {
      title: "Starter",
      price: "$250",
      features: [
        "Hasta 3 secciones esenciales",
        "Diseño adaptable móvil/tablet",
        "Formulario de contacto básico",
        "Integración con redes sociales"
      ],
      icon: "fas fa-rocket",
      highlight: false
    },
    {
      title: "Profesional",
      price: "$600",
      features: [
        "Hasta 6 secciones personalizadas",
        "Diseño optimizado para conversión",
        "SEO básico + Google Analytics",
        "30 días de soporte técnico"
      ],
      icon: "fas fa-briefcase",
      highlight: true // << ESTE es el destacado
    },
    {
      title: "Presencia Plus",
      price: "$900",
      features: [
        "Hasta 10 secciones premium",
        "Integración de blog y SEO avanzado",
        "Optimización de velocidad",
        "Formularios estratégicos de contacto"
      ],
      icon: "fas fa-globe",
      highlight: false
    },
    {
      title: "Tienda Online",
      price: "$1250+",
      features: [
        "E-commerce completo",
        "Pasarelas de pago integradas",
        "Carrito de compras optimizado",
        "Capacitación para autogestión"
      ],
      icon: "fas fa-shopping-cart",
      highlight: false
    }
  ];

  const marketingPackages = [
    {
      title: "Starter Social",
      price: "$300",
      features: [
        "2 publicaciones semanales",
        "Diseño gráfico profesional",
        "Calendario mensual de contenido",
        "1 red social incluida"
      ],
      icon: "fas fa-bullhorn",
      highlight: false
    },
    {
      title: "Marketing Activo",
      price: "$550",
      features: [
        "3-4 publicaciones semanales",
        "Gestión Instagram + Facebook",
        "Estrategias de crecimiento orgánico",
        "Reportes mensuales de métricas"
      ],
      icon: "fas fa-chart-line",
      highlight: true
    },
    {
      title: "Dominio Total",
      price: "$850",
      features: [
        "Campañas de anuncios pagados",
        "Videos reels + Contenido premium",
        "Informes y optimizaciones mensuales",
        "Soporte creativo y estratégico"
      ],
      icon: "fas fa-bullseye",
      highlight: false
    },
    {
      title: "Estrategia 360°",
      price: "$1200",
      features: [
        "Plan personalizado multired",
        "SEO aplicado a redes sociales",
        "A/B testing de campañas",
        "Consultoría estratégica constante"
      ],
      icon: "fas fa-search-dollar",
      highlight: false
    }
  ];

  const renderPackages = (title, packages) => (
    <div className="py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">{title}</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl p-8 shadow-xl border flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              plan.highlight
                ? "border-blue-600 animate-bounce-slow border-4 glow-effect"
                : "border-gray-200"
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-tr-2xl rounded-bl-2xl">
                Más Popular
              </div>
            )}
            <div className="text-4xl text-blue-500 mb-4 text-center">
              <i className={plan.icon}></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2 text-center">{plan.title}</h3>
            <p className="text-3xl font-extrabold mb-6 text-center text-gray-800">{plan.price}</p>
            <ul className="flex-1 mb-8 space-y-3 text-gray-600 text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block text-center py-3 mt-auto rounded-full font-semibold transition ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Lo quiero
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === "web") {
    return renderPackages("Diseño Web Profesional", webPackages);
  }

  if (type === "marketing") {
    return renderPackages("Marketing Digital en Redes Sociales", marketingPackages);
  }

  return null;
}
