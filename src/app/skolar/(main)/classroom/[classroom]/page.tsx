import { parseClassroomLink } from "@/helpers/classroomLinkGenerate";
import getProfile from "@/helpers/getProfile";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

export default async function ClassroomDetailPage({
  params,
}: {
  params: Promise<{ classroom: string }>;
}) {
  const { classroom } = await params;
  let classroomId;
  try {
    classroomId = parseClassroomLink(classroom).id;
  } catch (err) {
    console.log(err);
    notFound();
  }
  const Views = {
    EDUCATOR: dynamic(
      () =>
        import(
          "@/views/Classrooms/ClassroomDetail/EducatorClassroomDetailPageView"
        )
    ),
    STUDENT: dynamic(
      () =>
        import(
          "@/views/Classrooms/ClassroomDetail/StudentClassroomDetailPageView"
        )
    ),
  };
  const user = await getProfile();
  const isEducator = user.data?.isEducator;
  const ViewComponent = isEducator ? Views.EDUCATOR : Views.STUDENT;
  return <ViewComponent />;
}
