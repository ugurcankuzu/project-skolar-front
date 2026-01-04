import ViewContainer from "@/components/shared/viewContainer";
import TopicsTiles from "@/components/topics/TopicsTiles";

interface IClassroomTopicsViewSettings {
  classroomId: number;
}
interface IClassroomTopicsView {
  settings: IClassroomTopicsViewSettings;
}
export default function ClassroomTopicsView({
  settings,
}: IClassroomTopicsView) {
  return (
    <div className="size-full flex flex-col items-center">
      <ViewContainer>
        <TopicsTiles
          settings={{
            classroomId: settings.classroomId,
          }}
        />
      </ViewContainer>
    </div>
  );
}
