import Loader from "@/components/shared/loader";
import getProfile from "@/helpers/getProfile";
import removeJWT from "@/helpers/removeJWT";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function SkolarPage() {
  const views = {
    EDUCATOR: dynamic(() => import("@/views/Home/EducatorHomeView")),
    STUDENT: dynamic(() => import("@/views/Home/StudentHomeView")),
  };
  const userProfile = await getProfile();
  if (!userProfile.success) {
    await removeJWT();
    redirect("/login");
  }
  const ViewComponent = userProfile.data?.isEducator
    ? views.EDUCATOR
    : views.STUDENT;
  return (
    <Suspense fallback={<Loader />}>
      <ViewComponent />
    </Suspense>
  );
}
