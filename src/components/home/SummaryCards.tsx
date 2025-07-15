"use client";
import useDashboardSummarySWR from "@/hooks/useDashboardSummarySWR";
import SummaryCard from "./SummaryCard";
import { motion } from "motion/react";
import { enterScreen } from "@/animations/shared";
import SummaryCardsSkeleton from "@/skeletons/summaryCardsSkeleton";

export default function SummaryCards() {
  const { summaryData, isLoading, error } = useDashboardSummarySWR();
  if (error) {
    return <div>An error occurred while fetching summary summaryData.</div>;
  }

  if (isLoading) {
    return <SummaryCardsSkeleton />;
  }

  if (!summaryData) {
    return (
      <div className="w-full h-96 sm:h-48 flex items-center justify-center text-gray-400">
        No Summary data Found
      </div>
    );
  }
  return (
    <motion.div
      className="w-full h-96 sm:h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={enterScreen}
    >
      <motion.div variants={enterScreen}>
        <SummaryCard
          title="Your Courses"
          value={summaryData?.totalClassrooms || 0}
        />
      </motion.div>
      <motion.div variants={enterScreen}>
        <SummaryCard
          title="Active Assignments"
          value={summaryData?.openAssignments || 0}
        />
      </motion.div>
      <motion.div variants={enterScreen}>
        <SummaryCard
          title="Submitted Assignments"
          value={summaryData?.submittedAssignments || 0}
        />
      </motion.div>
    </motion.div>
  );
}
