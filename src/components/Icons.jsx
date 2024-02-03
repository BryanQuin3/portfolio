/* eslint-disable react/prop-types */
export const MenuIcon = ({ isActive }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      height="2em"
      className={isActive ? "transform -rotate-45" : ""}
    >
      <path
        className={
          isActive ? "line line-top-bottom menu-active" : "line line-top-bottom"
        }
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      ></path>
      <path className="line" d="M7 16 27 16"></path>
    </svg>
  );
};

export const SocialIcon = ({ href, src, alt, title }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title}>
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

export function CheckCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
      />
    </svg>
  );
}

export default { MenuIcon };
