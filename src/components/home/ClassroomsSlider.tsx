import useClassroomsSummarySWR from "@/hooks/useClassroomsSummarySWR";
import ClassroomItem from "./classroomItem";
import ClassroomItemSkeleton from "@/skeletons/classroomItemSkeleton";
import { motion } from "motion/react";
import { enterScreen } from "@/animations/shared";

interface IClassroomsSlider {
  scrollRef: React.RefObject<HTMLUListElement | null>;
}

export default function ClassroomsSlider({ scrollRef }: IClassroomsSlider) {
  const { classrooms, isLoading, error } = useClassroomsSummarySWR();

  const renderSlider = () => {
    if (error) {
      return (
        <li className="text-red-500 w-full h-full flex items-center justify-center">
          An error occurred while fetching classrooms.
        </li>
      );
    }

    if (isLoading) {
      return (
        <>
          <ClassroomItemSkeleton />
          <ClassroomItemSkeleton />
          <ClassroomItemSkeleton />
        </>
      );
    }

    if (!classrooms?.length) {
      return (
        <li className="w-full h-full flex items-center justify-center text-gray-400">
          No Classrooms Found
        </li>
      );
    }

    return classrooms.map((classroom) => (
      <ClassroomItem key={classroom.id} classroom={classroom} />
    ));
  };

  return (
    <motion.div className="w-full h-48" variants={enterScreen}>
      <motion.ul
        variants={enterScreen}
        className="size-full overflow-x-auto no-scrollbar flex items-stretch snap-x snap-mandatory gap-4 py-2"
        ref={scrollRef}
      >
        {renderSlider()}
      </motion.ul>
    </motion.div>
  );
}
