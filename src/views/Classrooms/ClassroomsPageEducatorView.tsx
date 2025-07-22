import MyClassrooms from "@/components/classrooms/MyClassrooms";
import ViewContainer from "@/components/shared/viewContainer";

export default function ClassroomsPageEducatorView() {
  return (
    <div className="size-full flex flex-col items-center">
      <ViewContainer>
        <MyClassrooms />
      </ViewContainer>
    </div>
  );
}
