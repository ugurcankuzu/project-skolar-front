import Loader from "@/components/shared/loader";
import ViewSwitcher from "@/components/shared/ViewSwitcher";
import { Suspense } from "react";

export default async function SkolarPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ViewSwitcher />
    </Suspense>
  );
}
