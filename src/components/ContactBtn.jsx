/* eslint-disable react/prop-types */
export const ContactBtn = ({ text }) => {
  return (
    <a
      href="#contact"
      className="bg-gray-900 py-3 px-9 rounded-full text-white font-semibold hover:bg-transparent hover:text-gray-900 transition-all duration-300 border-2 border-gray-900"
    >
      {text}
    </a>
  );
};
