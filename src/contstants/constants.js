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
    link: "https://linkedin.com/in/bryan-quintana-440176299",
    linkClasses: "hover:bg-blue-700 ",
    img: {
      src: "./images/linkedin.svg",
      alt: "linkedin",
    },
  },
  {
    link: "https://github.com/BryanQuin3",
    linkClasses: "hover:bg-gray-900",
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
    name: "Clon de Crunchyroll",
    description:
      "Recreé la experiencia de navegación de Crunchyroll utilizando una API de datos de anime, desarrollando una SPA, logrando mejorar la experiencia de usuario y la velocidad de carga.",
    img: {
      src: "./images/crunchyroll.webp",
      alt: "crunchyroll",
    },
    link: "https://crunchyroll-clone-seven.vercel.app/",
    bgColor: "bg-indigo-500",
    textColor: "text-gray-900",
    tecnologies: ["React", "CSS", "API"],
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
    link: "https://bryanquin3.github.io/Tourism-Website-Japan/",
    bgColor: "bg-indigo-500",
    textColor: "text-white",
    tecnologies: ["Sass", "Vanilla JS", "HTML"],
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
