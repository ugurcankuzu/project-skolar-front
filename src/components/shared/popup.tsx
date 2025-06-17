import { fadeIn } from "@/animations/shared";
import EPopupColors from "@/enums/popupColors";
import { HTMLMotionProps, motion, Variants } from "motion/react";

interface IPopUp {
  popupColor: EPopupColors;
  popupMessage: string;
  popupSettings?: HTMLMotionProps<"span">;
  variant?: Variants;
}

const PopUpStyles = {
  base: "w-full h-full p-2 text-surface rounded-md font-medium",
};

export default function PopUp({
  popupColor,
  popupMessage,
  popupSettings,
  variant,
}: IPopUp) {
  const finalClassName = `${PopUpStyles.base} ${popupColor}`;

  return (
    <motion.span
      className={finalClassName}
      {...popupSettings}
      variants={variant || fadeIn}
      initial="hidden"
      animate={"visible"}
      exit={"hidden"}
    >
      {popupMessage}
    </motion.span>
  );
}
