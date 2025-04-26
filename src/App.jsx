import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Importamos el Footer correctamente

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-800 relative overflow-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Navbar scrollToTop={scrollToTop} />
      </div>

     
      {/* Contenido principal */}
      <div className="pt-24">
        <section id="home" data-aos="fade-in" className="relative z-30">
          <Hero
            heading="Impulsa tu éxito digital"
            subheading="Creamos sitios web estratégicos y campañas de marketing para llevar tu negocio al siguiente nivel."
            cta="Solicita tu estrategia personalizada"
            smallText="Primera consulta gratuita y sin compromiso."
          />
        </section>

        <section id="about" className="bg-white relative z-30" data-aos="fade-right">
          <About />
        </section>

        <section id="services" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 relative z-30" data-aos="zoom-in-up">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                Nuestros planes de Diseño Web
              </h2>
              <p className="mt-2 text-gray-600">
                Elige el paquete perfecto para comenzar o hacer crecer tu presencia digital.
              </p>
            </div>
            <Services type="web" />
          </div>
        </section>

        <section id="marketing" className="bg-gradient-to-br from-blue-100 to-blue-200 py-20 relative z-30" data-aos="zoom-in-up">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                Servicios de Marketing Digital
              </h2>
              <p className="mt-2 text-gray-600">
                Haz que tu marca crezca con estrategias inteligentes y contenido de alto impacto.
              </p>
            </div>
            <Services type="marketing" />
          </div>
        </section>

        <section className="bg-gray-50 relative z-30" data-aos="fade-left">
          <Process />
        </section>

        <section className="bg-gradient-to-br from-white via-gray-100 to-white relative z-30" data-aos="flip-up">
          <Testimonials />
        </section>

        <section id="faq" className="bg-gray-100 relative z-30" data-aos="zoom-in">
          <FAQ />
        </section>

        <section id="contact" className="bg-gradient-to-tr from-white to-blue-50 relative z-30" data-aos="zoom-in-left">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Botón volver arriba */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
        >
          ↑
        </button>
      )}

      {/* Toaster para notificaciones */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
