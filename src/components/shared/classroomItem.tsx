import formatTimeAgo from "@/helpers/getTimeAgo";
import TClassroomSummary from "@/types/ClassroomSummary";
import Link from "next/link";
import UsersIcon from "../icons/usersIcon";
import { motion } from "motion/react";
import { enterScreen } from "@/animations/shared";
import CustomImage from "./CustomImage";
import ClockIcon from "../icons/clockIcon";
import classroomLinkGenerate from "@/helpers/classroomLinkGenerate";

interface IClassroomItem {
  classroom: TClassroomSummary;
}

export default function ClassroomItem({ classroom }: IClassroomItem) {
  const generatedUrl = classroomLinkGenerate(classroom.id, classroom.title);
  return (
    <motion.div
      variants={enterScreen}
      className="
      size-full flex flex-col group
    "
    >
      <Link
        href={`${generatedUrl}`}
        className="flex flex-col bg-background rounded-lg size-full hover:shadow-md transition-shadow duration-300"
      >
        <div className="w-full h-1/2 relative">
          <CustomImage
            src={classroom.imageUrl || ""}
            fill={true}
            alt={`${classroom.title} classroom image.`}
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="px-4 py-2 rounded-b-lg flex-1 flex flex-col justify-center group-hover:bg-gray-100 transition-colors duration-300">
          <p className="font-semibold text-heading text-xl line-clamp-1">
            {classroom.title}
          </p>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 text-accent text-sm mt-1">
            <div className="flex items-center gap-1">
              <span>
                <UsersIcon className="size-4" />
              </span>
              <p>{`${classroom.userCount}/${classroom.userLimit}`}</p>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <ClockIcon className="size-4" />
              </span>
              <p className="text-gray-500">
                {formatTimeAgo(classroom.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
