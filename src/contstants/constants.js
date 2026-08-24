export const menuOptions = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Proyectos",
    link: "#projects",
  },
  {
    name: "Contacto",
    link: "#contact",
  },
];

export const aboutIcons = [
  {
    link: "https://www.linkedin.com/in/bryan-quintana-full-stack",
    title: "Perfil de LinkedIn",
    img: {
      src: "./images/linkedin.svg",
      alt: "linkedin",
    },
  },
  {
    link: "https://github.com/BryanQuin3",
    title: "Perfil de GitHub",
    img: {
      src: "./images/github.svg",
      alt: "github",
    },
  },
];

export const projects = [
  {
    id: 1,
    name: "NFT Marketplace",
    description:
      "Propuesta para la startup Conquer Degens: Optimicé la interfaz para una experiencia más amigable y aumenté el rendimiento al máximo, alcanzando un 100% en PageSpeed, superando el 52% original.",
    img: {
      src: "./images/nft.webp",
      alt: "nft",
    },
    link: "https://bryanquin3.github.io/nft",
    bgColor: "bg-indigo-500",
    textColor: "text-white",
    tecnologies: ["Tailwind", "Vanilla JS", "HTML"],
  },
  {
    id: 2,
    name: "Alianza Refrigeración",
    description:
      "Transformé el sitio web de Alianza Refrigeración, mejorando la página de inicio y optimizando el SEO para aumentar el tráfico orgánico de manera impresionante, logrando un aumento del 170% en solo 6 meses.",
    img: {
      src: "./images/catalogo.webp",
      alt: "catalogo",
    },
    link: "https://alianzarefrigeracion.com",
    bgColor: "bg-indigo-500",
    textColor: "text-white",
    tecnologies: ["Wordpress", "CSS", "Elementor"],
  },
  {
    id: 3,
    name: "Gestión veterinaria",
    description:
      "Desarrollé una plataforma veterinaria que centraliza clientes, mascotas y turnos, con dashboard operativo, autenticación segura y registros de auditoría para una clínica moderna.",
    img: {
      src: "./images/gestion-veterinaria.webp",
      alt: "Dashboard de gestión veterinaria con clientes, mascotas y turnos",
    },
    link: "https://veterinaria-libertad.netlify.app/",
    bgColor: "bg-indigo-500",
    textColor: "text-gray-900",
    tecnologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 4,
    name: "Web de Turismo en Japón",
    description:
      "En colaboración con el talentoso diseñador Mehrab Bozorgi, he transformado su visión creativa en una cautivadora plataforma web de turismo.",
    img: {
      src: "./images/japon.webp",
      alt: "japon",
    },
    link: "https://tourismjapantravel.netlify.app/",
    bgColor: "bg-indigo-500",
    textColor: "text-white",
    tecnologies: ["Tailwind", "Astro", "GSAP"],
  },
];

export const inputsType = [
  {
    label: "Nombre",
    type: "text",
    id: "name",
    placeholder: "Juan Pérez",
  },
  {
    label: "Correo",
    type: "email",
    id: "email",
    placeholder: "ejemplo@gmail.com",
  },
  {
    label: "Mensaje",
    id: "message",
    isTextArea: true,
    placeholder: "Escribe aquí tu mensaje...",
  },
];

export const messages = {
  success:  "Enviado",
  error: "Hubo un error, por favor intenta de nuevo.",
};
