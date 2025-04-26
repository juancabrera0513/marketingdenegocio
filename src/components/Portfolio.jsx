// import React from "react";

// export default function Portfolio() {
//   const projects = [
//     {
//       title: "Sitio para Cafetería",
//       image: "/images/cafe.jpg",
//       link: "#",
//     },
//     {
//       title: "Landing Page Personal",
//       image: "/images/landing.jpg",
//       link: "#",
//     },
//     {
//       title: "Tienda Online Artesanal",
//       image: "/images/tienda.jpg",
//       link: "#",
//     },
//   ];

//   return (
//     <section id="portfolio" className="py-20 bg-gray-50 px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
//         Portafolio
//       </h2>
//       <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
//         {projects.map((project, index) => (
//           <div key={index} className="rounded-xl overflow-hidden shadow-md">
//             <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <a href={project.link} className="text-blue-600 hover:underline">Ver más</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }