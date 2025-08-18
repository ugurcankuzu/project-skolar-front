import ClassroomHeroCard from "@/components/classrooms/classroomDetail/classroomHero";
import ParticipantsTable from "@/components/classrooms/classroomDetail/participantsTable";
import TopicsTree from "@/components/classrooms/classroomDetail/topicsTree";
import ViewContainer from "@/components/shared/viewContainer";

export default function ClassroomDetailPageView() {
  return (
    <div className="size-full flex flex-col gap-4 items-center">
      <ViewContainer>
        <ClassroomHeroCard />
        <ParticipantsTable />
        <TopicsTree />
      </ViewContainer>
    </div>
  );
}
