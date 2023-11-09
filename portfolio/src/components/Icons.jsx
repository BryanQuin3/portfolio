/* eslint-disable react/prop-types */
export const MenuIcon = () => {
  return (
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  );
};

export const SocialIcon = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        className="transition-all duration-300 group-hover:invert"
        src={src}
        alt={alt}
      />
    </a>
  );
};

export default { MenuIcon };
