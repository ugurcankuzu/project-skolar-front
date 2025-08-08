import { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}
const InputStyle = {
  input: "px-4 py-2 rounded-xl outline-none border border-gray-300 w-full",
};
export default function Input({ className, ...props }: IInput) {
  return (
    <input
      className={`${InputStyle.input} ${className || ""}`.trim()}
      {...props}
    />
  );
}
