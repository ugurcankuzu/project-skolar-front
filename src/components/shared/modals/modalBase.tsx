import XMarkIcon from "@/components/icons/xMarkIcon";
import { ReactNode } from "react";

interface IModalBase {
  children: ReactNode;
  title: string;
  description?: string;
}
export default function ModalBase({
  children,
  title,
  description,
}: IModalBase) {
  return (
    <div
      className="w-full min-h-[200px] bg-surface rounded-xl shadow-xl p-4 flex flex-col gap-4
    "
    >
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold text-heading">{title}</p>
          {description && (
            <p className="text-sm text-gray-400">{description}</p>
          )}
        </div>
        <button className="bg-primary shadow text-white font-semibold p-1 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer">
          <XMarkIcon />
        </button>
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
