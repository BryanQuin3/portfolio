import { InputField } from "./InputField";
import { useForm, ValidationError } from "@formspree/react";
import { inputsType } from "../contstants/constants";
export const Contact = () => {
  const [state, handleSubmit] = useForm("xvojnknz");

  return (
    <form
      onSubmit={handleSubmit}
      id="contact"
      className="animate-scroll mt-12 w-full p-10 bg-no-repeat bg-cover bg-center bg-fixe rounded-3xl flex flex-col gap-5"
      style={{ backgroundImage: "url('../images/bg.webp')" }}
    >
      {inputsType.map((input) => (
        <div key={input.id}>
          <InputField {...input} />
          <ValidationError
            prefix={input.type}
            field={input.type}
            errors={state.errors}
            placeholder={input.placeholder}
          />
        </div>
      ))}
      <div className="align-start mt-4">
        <button className="bg-gray-900 py-2 px-8 rounded-full text-white font-semibold hover:bg-transparent hover:text-gray-900 transition-all duration-300 border-2 border-gray-900">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Contact;
