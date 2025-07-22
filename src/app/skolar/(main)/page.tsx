import Loader from "@/components/shared/loader";
import getProfile from "@/helpers/getProfile";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default async function SkolarPage() {
  const views = {
    EDUCATOR: dynamic(() => import("@/views/Home/EducatorHomeView")),
    STUDENT: dynamic(() => import("@/views/Home/StudentHomeView")),
  };
  const userProfile = await getProfile();
  console.log(userProfile);
  const ViewComponent = userProfile.data?.isEducator
    ? views.EDUCATOR
    : views.STUDENT;
  return (
    <Suspense fallback={<Loader />}>
      <ViewComponent />
    </Suspense>
  );
}
