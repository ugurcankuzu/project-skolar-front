import { HTMLAttributes, ReactNode } from "react";

const RoleCardStyles = {
  container:
    "w-full sm:w-1/4 aspect-square flex flex-col justify-center items-center space-y-2 rounded-lg hover:bg-secondary/50 hover:shadow-md transition-bg duration-300 cursor-pointer",
};
interface IRoleCard extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  children: ReactNode;
}
export default function RoleCard({
  children,
  disabled = true,
  ...props
}: IRoleCard) {
  const cardStyle = `${RoleCardStyles.container} ${
    disabled ? "bg-slate-100 text-slate-400" : "bg-secondary/35 text-primary"
  }`;
  return (
    <div className={cardStyle} {...props}>
      {children}
    </div>
  );
}
