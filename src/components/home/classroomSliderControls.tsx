import ArrowLeftIcon from "../icons/arrowLeftIcon";
import ArrowRightIcon from "../icons/arrowRightIcon";

interface IClassroomsSliderControls {
  scrollByDirection: (direction: "left" | "right") => void;
}
export default function ClassroomSliderControls({
  scrollByDirection,
}: IClassroomsSliderControls) {
  return (
    <div className="flex items-center gap-4">
      <button
        className="bg-background rounded-full text-heading p-1 hover:bg-primary hover:text-white transition-bg duration-300 cursor-pointer active:bg-primary/80"
        onClick={() => scrollByDirection("left")}
      >
        <ArrowLeftIcon className="size-5" />
      </button>
      <button
        className="bg-background rounded-full p-1 text-heading hover:bg-primary hover:text-white transition-bg duration-300 cursor-pointer active:bg-primary/80"
        onClick={() => scrollByDirection("right")}
      >
        <ArrowRightIcon className="size-5" />
      </button>
    </div>
  );
}
