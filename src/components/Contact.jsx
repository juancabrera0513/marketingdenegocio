import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [formVisible, setFormVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ywkf6l7", 
        "template_okjps2i", 
        form.current, 
        "QomFGcKltdQDXhSSp"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("¡Mensaje enviado! Te responderemos en menos de 24 horas.");
        },
        (error) => {
          console.log(error.text);
          toast.error("Ocurrió un error. Inténtalo de nuevo.");
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFormVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (form.current) {
      observer.observe(form.current);
    }

    return () => {
      if (form.current) {
        observer.unobserve(form.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mb-4">
          ¿Tienes preguntas o quieres comenzar un proyecto? Escríbenos y recibe respuesta en menos de 24 horas.
        </p>
        <p className="text-center text-blue-600 font-semibold mb-12">
          ¡Te ayudaremos a impulsar tu proyecto rápidamente!
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-6">
  <div className="space-y-4">
    <input
      type="text"
      name="fullName"
      placeholder="Nombre completo"
      required
      autoComplete="name"
      className="w-full border p-3 rounded-md"
    />
    <input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      required
      autoComplete="email"
      className="w-full border p-3 rounded-md"
    />
    <input
      type="tel"
      name="phone"
      placeholder="Número de teléfono"
      required
      autoComplete="tel"
      className="w-full border p-3 rounded-md"
    />
    <input
      type="text"
      name="subject"
      placeholder="Asunto"
      required
      autoComplete="off"
      className="w-full border p-3 rounded-md"
    />
  </div>
  <div className="space-y-4">
    <textarea
      name="message"
      placeholder="Escribe tu mensaje..."
      rows="10"
      required
      autoComplete="off"
      className="w-full border p-3 rounded-md"
    ></textarea>
    <button
      type="submit"
      className={`bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition w-full ${
        formVisible ? "animate-pulse-button" : ""
      }`}
    >
      Enviar mensaje
    </button>
  </div>
</form>

      </div>
    </section>
  );
}
