import React, { useState, useEffect } from "react";

export default function Navbar({ scrollToTop }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-white/70 backdrop-blur-md shadow" : "bg-white shadow"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="text-xl font-bold text-blue-600 hover:text-blue-700 hover:underline transition"
        >
          MarketingDeNegocio.com
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? 'flex flex-col items-start' : 'hidden'
          } md:flex md:flex-row md:items-center md:gap-6 mt-4 md:mt-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow md:shadow-none rounded md:rounded-none space-y-4 md:space-y-0 transition-all duration-300 ease-in-out`}
          role="navigation"
          aria-label="Main navigation"
        >
          <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="block text-blue-900 hover:text-blue-700 w-full md:w-auto transition">
            Servicios Web
          </a>
          <a href="#marketing" onClick={(e) => handleLinkClick(e, "marketing")} className="block text-blue-900 hover:text-blue-700 w-full md:w-auto transition">
            Marketing
          </a>
          <a href="#faq" onClick={(e) => handleLinkClick(e, "faq")} className="block text-blue-900 hover:text-blue-700 w-full md:w-auto transition">
            Preguntas
          </a>

          {/* Botón Contacto */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="block w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out text-center animate-pulse"
          >
            Contáctanos
          </a>
        </nav>
      </div>
    </nav>
  );
}
