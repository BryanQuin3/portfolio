import { ContactBtn } from "./ContactBtn";
import { SocialIcon } from "./Icons";
import { aboutIcons } from "../contstants/constants";
export const Footer = () => {
  return (
    <footer className="flex justify-start items-center gap-3 w-full">
      <ContactBtn text={"Contáctame"} />
      <ul className="flex gap-3">
        {aboutIcons.map((icon, index) => (
          <li
            key={index}
            className={`group rounded-full bg-white m-auto p-2 cursor-pointer transition-all duration-300 ${icon.linkClasses}`}
          >
            <SocialIcon
              href={icon.link}
              src={icon.img.src}
              alt={icon.img.alt}
            />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
