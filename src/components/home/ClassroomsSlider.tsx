import useClassroomsSummarySWR from "@/hooks/useClassroomsSummarySWR";
import ClassroomItem from "./classroomItem";
import ClassroomItemSkeleton from "@/skeletons/classroomItemSkeleton";

interface IClassroomsSlider {
  scrollRef: React.RefObject<HTMLUListElement | null>;
}

export default function ClassroomsSlider({ scrollRef }: IClassroomsSlider) {
  const { classrooms, isLoading, error } = useClassroomsSummarySWR();
  return (
    <div className="w-full h-48">
      <ul
        className="size-full overflow-x-auto no-scrollbar flex items-stretch snap-x snap-mandatory gap-4 py-2"
        ref={scrollRef}
      >
        {!isLoading &&
          classrooms?.map((classroom) => (
            <ClassroomItem key={classroom.id} classroom={classroom} />
          ))}
        {isLoading && <ClassroomItemSkeleton />}
      </ul>
    </div>
  );
}
