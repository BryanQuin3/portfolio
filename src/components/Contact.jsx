import { InputField } from "./InputField";
import { Notification } from "./Notification";
import { useForm } from "@formspree/react";
import { inputsType, messages } from "../contstants/constants";
import { useState } from "react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xvojnknz");
  const [showNotification, setShowNotification] = useState(false);

  const handleNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3500);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    handleNotification();
  };

  return (
    <form
      onSubmit={onSubmit}
      id="contact"
      className="animate-scroll mt-12 w-full p-10 bg-no-repeat bg-cover bg-center bg-fixe rounded-3xl flex flex-col gap-5"
      style={{ backgroundImage: "url('../images/bg.webp')" }}
    >
      {inputsType.map((input) => (
        <div key={input.id}>
          <InputField {...input} />
        </div>
      ))}
      <div className="flex justify-between items-center align-start mt-4">
        <button className="bg-gray-900 py-2 px-8 rounded-full text-white font-semibold hover:bg-transparent hover:text-gray-900 transition-all duration-300 border-2 border-gray-900">
          {state.submitting ? "Enviando..." : "Enviar"}
        </button>

        {state.succeeded && showNotification && !state.submitting && (
          <Notification
            message={state.errors ? messages.error : messages.success}
          />
        )}
      </div>
    </form>
  );
};

export default Contact;
