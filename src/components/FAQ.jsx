import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "¿Qué necesito para comenzar?",
      answer: "Solo contáctanos y te guiaremos paso a paso. No necesitas conocimientos técnicos.",
    },
    {
      question: "¿Puedo pagar en cuotas?",
      answer: "Sí, ofrecemos opciones de pago flexibles.",
    },
    {
      question: "¿Puedo hacer cambios después?",
      answer: "Sí, puedes solicitar cambios o te enseñamos a gestionar tu página de forma autónoma.",
    },
    {
      question: "¿Cuánto tarda el desarrollo?",
      answer: "Depende del plan, pero normalmente entre 5 y 10 días hábiles.",
    },
    {
      question: "¿Incluye el dominio?",
      answer: "El dominio se gestiona por separado según tus necesidades.",
    },
    {
      question: "¿Se puede conectar con redes sociales?",
      answer: "Sí, integramos tus redes sociales directamente en el sitio web.",
    },
    {
      question: "¿Mi sitio será visible en Google?",
      answer: "Sí, aplicamos prácticas básicas de SEO para que tu página sea indexada correctamente.",
    },
    {
      question: "¿Diseñan sitios en más de un idioma?",
      answer: "Sí, podemos crear sitios bilingües o multilingües según tus necesidades.",
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer: "Sí, brindamos soporte mensual opcional para mantenimiento y actualizaciones.",
    },
    {
      question: "¿Pueden ayudarme a crear contenido para mi página?",
      answer: "Sí, ofrecemos asistencia básica en redacción, imágenes y estructura para mejorar tu mensaje.",
    },
  
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section id="faq" className="py-20 bg-gray-50 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 cursor-pointer shadow-sm"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="text-lg font-semibold text-blue-600">{faq.question}</h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}

        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 font-medium hover:underline"
          >
            {showAll ? "Ver menos preguntas" : "Ver más preguntas"}
          </button>
        </div>
      </div>
    </section>
  );
}
