"use client";
import { enterScreen } from "@/animations/shared";
import { motion } from "motion/react";
import { FormEvent, useState } from "react";
import EducatorIcon from "../icons/educatorIcon";
import StudentIcon from "../icons/studentIcon";
import RoleCard from "./roleCard";
import roleSelect from "@/helpers/roleSelect";
import useLoading from "@/hooks/useLoading";
import { useUserContext } from "@/store/userStore";
import Loader from "../shared/loader";
import { useRouter } from "next/navigation";

const RoleSectionStyles = {
  container: "w-full flex justify-center items-center gap-4 px-4",
  roleIcon: "size-12",
  roleText: "text-lg text-accent font-semibold",
};

export default function RoleSection() {
  const [role, setRole] = useState<"student" | "educator" | null>(null);
  const { loading, startLoading, stopLoading } = useLoading();
  const router = useRouter();
  const userContext = useUserContext();
  const handleRoleChange = (newRole: "student" | "educator") => {
    setRole(newRole);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (role === null) return;
    startLoading();
    const result = await roleSelect(role);
    if (!result.success) {
      console.log(result.message);
      return;
    }
    if (result.data) userContext.setUser(result.data);
    stopLoading();
    router.refresh();
  };
  return (
    <motion.form
      className="w-full flex flex-col space-y-8"
      onSubmit={handleSubmit}
      variants={enterScreen}
    >
      <motion.div className={RoleSectionStyles.container}>
        <RoleCard
          disabled={role !== "student"}
          onClick={() => handleRoleChange("student")}
        >
          <StudentIcon className={RoleSectionStyles.roleIcon} />
          <p className={RoleSectionStyles.roleText}>Student</p>
        </RoleCard>
        <RoleCard
          disabled={role !== "educator"}
          onClick={() => handleRoleChange("educator")}
        >
          <EducatorIcon className={RoleSectionStyles.roleIcon} />
          <p className={RoleSectionStyles.roleText}>Educator</p>
        </RoleCard>
      </motion.div>
      <motion.div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2">
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <motion.button
            className="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-400"
            disabled={role === null}
            type="submit"
          >
            Continue
          </motion.button>
        )}
        <motion.button
          className={
            "px-4 py-2 rounded-lg bg-error text-white font-semibold hover:bg-error/80 hover:text-white cursor-pointer transition-colors duration-300"
          }
          onClick={() => userContext.logout()}
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.form>
  );
}
