export const menuOptions = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const handleToggle = (element) => {
  element.classList.toggle("hidden");
};

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
