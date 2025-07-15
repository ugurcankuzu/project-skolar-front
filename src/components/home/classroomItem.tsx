import formatTimeAgo from "@/helpers/getTimeAgo";
import TClassroomSummary from "@/types/ClassroomSummary";
import Link from "next/link";
import UsersIcon from "../icons/usersIcon";
import { motion } from "motion/react";
import { enterScreen } from "@/animations/shared";

interface IClassroomItem {
  classroom: TClassroomSummary;
}

export default function ClassroomItem({ classroom }: IClassroomItem) {
  return (
    <motion.li
      variants={enterScreen}
      className="
      h-full flex-shrink-0 snap-start w-11/12 md:w-1/3 lg:w-1/4 flex flex-col group
    "
    >
      <Link
        href={`/skolar/classroom/${classroom.id}`}
        className="flex flex-col bg-surface shadow rounded-xl size-full"
      >
        <div className="flex items-center gap-2 bg-primary rounded-t-xl px-4 py-2 text-white">
          <span>
            <UsersIcon />
          </span>
          <p>{`${classroom.userCount}/${classroom.userLimit}`}</p>
        </div>
        <div className="bg-surface px-4 py-2 rounded-b-xl flex-1 flex flex-col justify-center group-hover:bg-primary/20 transition-bg duration-300">
          <p className="font-semibold text-heading text-xl line-clamp-1">
            {classroom.title}
          </p>
          <p className="text-gray-500 text-sm">
            {formatTimeAgo(classroom.createdAt)}
          </p>
        </div>
      </Link>
    </motion.li>
  );
}
