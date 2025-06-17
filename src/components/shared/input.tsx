import { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}
const InputStyle = {
  input: "px-4 py-2 rounded-md border border-heading/35 w-full",
};
export default function Input({ className, ...props }: IInput) {
  return (
    <input
      className={`${InputStyle.input} ${className || ""}`.trim()}
      {...props}
    />
  );
}
