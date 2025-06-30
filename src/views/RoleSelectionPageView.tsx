import RoleContainer from "@/components/role-selection/roleContainer";
import RoleSection from "@/components/role-selection/roleSection";
import RoleSelectionTitle from "@/components/role-selection/roleSelectionTitle";

export default function RoleSelectionPageView() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <RoleContainer>
        <RoleSelectionTitle />
        <RoleSection />
      </RoleContainer>
    </div>
  );
}
