/* eslint-disable react/prop-types */
import { handleSmoothScroll } from "../logics/logics";

export const ContactBtn = ({ text }) => {
  const link = "#contact";
  return (
    <a
      onClick={(e) => handleSmoothScroll(e, link)}
      href={link}
      className="bg-gray-900 py-3 px-9 rounded-full text-white font-semibold hover:bg-transparent hover:text-gray-900 transition-all duration-300 border-2 border-gray-900"
    >
      {text}
    </a>
  );
};
