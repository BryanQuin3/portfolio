/* eslint-disable react/prop-types */
export const Tecnologies = ({ tecnologies }) => {
  return (
    <ul className="flex items-center gap-2 flex-wrap">
      {tecnologies.map((tag, index) => (
        <li key={index} className="px-2 py-1 font-semibold md:px-4">
          <span>{tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tecnologies;
