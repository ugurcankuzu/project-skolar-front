import getProfile from "@/helpers/getProfile";
import ClassroomsPageEducatorView from "@/views/Classrooms/ClassroomsPageEducatorView";
import dynamic from "next/dynamic";

export default async function ClassroomsPage() {
  const userProfile = await getProfile();
  /* const Views = {
    EDUCATOR: dynamic(
      () => import("@/views/Classrooms/ClassroomsPageEducatorView")
    ),
    STUDENT: dynamic(
      () => import("@/views/Classrooms/ClassroomsPageStudentView")
    ),
  };
  const ViewComponent = userProfile.data?.isEducator
    ? Views.EDUCATOR
    : Views.STUDENT; */
  return <ClassroomsPageEducatorView />;
}
