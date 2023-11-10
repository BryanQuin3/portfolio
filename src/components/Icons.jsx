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

export function ArrowOutward(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7L14.6 7H7q-.425 0-.713-.288T6 6q0-.425.288-.713T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17q-.425 0-.713-.288T16 16V8.4Z" />
    </svg>
  );
}

export default { MenuIcon };
