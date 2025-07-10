import { HTMLAttributes } from "react";

interface IPill extends HTMLAttributes<HTMLDivElement> {
  text: string;
  color: "warning" | "danger" | "success" | "primary";
  dot?: boolean;
}

// Renk seçeneklerini tam class isimleriyle eşleştiren bir harita (map) oluşturun.
// Tailwind bu tam string'leri görebilecek ve CSS'i üretecektir.
const colorClasses = {
  warning: "bg-warning/20 text-warning",
  danger: "bg-danger/20 text-danger",
  success: "bg-success/20 text-success",
  primary: "bg-primary/20 text-primary",
};

// "dot" için de renkleri ayrı bir haritada tutalım.
const dotColorClasses = {
  warning: "bg-warning",
  danger: "bg-danger",
  success: "bg-success",
  primary: "bg-primary",
};

export default function Pill({
  text,
  color,
  dot,
  className = "w-fit px-4 py-1 rounded-full flex items-center gap-2",
  ...props
}: IPill) {
  // Gelen 'color' prop'una göre doğru class'ları haritadan seçin.
  const finalClassName = `${className} ${colorClasses[color]}`;

  return (
    <div className={finalClassName} {...props}>
      {dot && (
        <span
          // Dot'un rengini de dinamik olarak haritadan alın.
          className={`w-3 h-3 rounded-full ${dotColorClasses[color]}`}
        ></span>
      )}
      <p>{text}</p>
    </div>
  );
}
