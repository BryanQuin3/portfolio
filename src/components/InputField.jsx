/* eslint-disable react/prop-types */
export const InputField = ({ label, type, id, placeholder, isTextArea }) => {
  if (isTextArea) {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id}>{label}</label>
        <textarea
          required
          name={id}
          className="rounded-lg p-3 w-full h-32 max-h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-900"
          id={id}
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        required
        type={type}
        className="rounded-lg p-3 w-full focus:ring-2 focus:ring-gray-900"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
