/* eslint-disable react/prop-types */
import { CheckCircle } from "./Icons";

export const Notification = ({ message }) => {
  return (
    <aside
      className="bg-green-50 rounded-lg py-2 px-3 text-green-800 font-semibold animate-fade-up"
      role="status"
    >
      <CheckCircle className="inline-block mr-2" />
      <span>{message}</span>
    </aside>
  );
};
