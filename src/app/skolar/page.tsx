import getProfile from "@/helpers/getProfile";

export default async function SkolarPage() {
  const userProfile = await getProfile();
  return (
    <div>
      <h1>Skolar</h1>
      <p>{userProfile.data?.isEducator ? "Educator" : "Student"}</p>
    </div>
  );
}
