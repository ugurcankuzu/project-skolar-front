"use client";
import { useRef } from "react";
import ComputerIcon from "../icons/computerIcon";
import ClassroomsSlider from "./ClassroomsSlider";
import ClassroomSliderControls from "./classroomSliderControls";
import { motion } from "motion/react";
import { enterScreen, fadeIn } from "@/animations/shared";

export default function Classrooms() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const scrollByDirection = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    if (direction === "left") {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div variants={fadeIn} className="w-full  p-4 rounded-2xl space-y-4">
      <div className="w-full flex items-center justify-between mb-4">
        <motion.div variants={enterScreen}>
          <h2 className="text-xl font-semibold text-heading flex items-center gap-2">
            <span>
              <ComputerIcon />
            </span>
            My Classrooms
          </h2>
        </motion.div>
        <ClassroomSliderControls scrollByDirection={scrollByDirection} />
      </div>
      <ClassroomsSlider scrollRef={scrollRef} />
    </motion.div>
  );
}
