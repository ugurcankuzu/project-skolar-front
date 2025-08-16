import getProfile from "@/helpers/getProfile";
import dynamic from "next/dynamic";

export default async function ViewSwitcher() {
  const views = {
    EDUCATOR: dynamic(() => import("@/views/Home/EducatorHomeView")),
    STUDENT: dynamic(() => import("@/views/Home/StudentHomeView")),
  };
  const userProfile = await getProfile();
  console.log(userProfile);
  const ViewComponent = userProfile.data?.isEducator
    ? views.EDUCATOR
    : views.STUDENT;
  return <ViewComponent />;
}
