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
      src: "./images/linkedin.png",
      alt: "linkedin",
    },
  },
  {
    link: "https://github.com/BryanQuin3",
    linkClasses: "hover:bg-gray-900",
    img: {
      src: "./images/github.png",
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
      "Transformé el sitio web de Alianza Refrigeración, mejorando la página de inicio, optimizando el SEO para aumentar el tráfico orgánico en un impresionante 170% en solo 6 meses",
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
      "Este proyecto tiene como objetivo replicar la experiencia de navegación y visualización de anime en Crunchyroll utilizando una API de datos de anime.",
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
      "Diseñada para la Embajada, fusiona estética y funcionalidad, destacando la riqueza cultural del país nipón para potenciar el turismo de manera impactante.",
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
