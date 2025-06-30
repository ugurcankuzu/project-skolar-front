import getProfile from "@/helpers/getProfile";
import { redirect } from "next/navigation";

export default async function RoleSelectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getProfile();
  if (!profile.data?.isFirstLogin) {
    redirect("/skolar");
  }
  return <>{children}</>;
}
