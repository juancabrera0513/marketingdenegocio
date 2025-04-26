import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Tu éxito digital empieza aquí
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-4">
          En <strong>MarketingDeNegocio.com</strong> ayudamos a negocios locales a alcanzar su máximo potencial en internet.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4">
          Más de 100 empresas ya confiaron en nuestro equipo para crear sitios modernos, rápidos y diseñados estratégicamente para atraer clientes.
        </p>
        <p className="text-base md:text-lg text-gray-700">
          Nuestra misión es ofrecer soluciones personalizadas, accesibles y enfocadas en resultados reales para cada marca.
        </p>
      </div>
    </section>
  );
}
