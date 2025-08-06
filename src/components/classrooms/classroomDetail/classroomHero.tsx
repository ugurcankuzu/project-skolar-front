"use client";
import CustomImage from "@/components/shared/CustomImage";
import formatTimeAgo from "@/helpers/getTimeAgo";
import useClassroomDetailSWR from "@/hooks/useClassroomDetailSWR";
import useClassroomId from "@/hooks/useClassroomId";
import ClassroomHeroSkeleton from "@/skeletons/classrooms/classroomHeroSkeleton";
import ClassroomHeroDetailCard from "./classroomHeroDetailCard";

export default function ClassroomHeroCard() {
  const { id } = useClassroomId();
  const { classroom, isLoading, error } = useClassroomDetailSWR(id);
  if (isLoading) return <ClassroomHeroSkeleton />;
  return (
    <div className="w-full space-y-8">
      <div className="size-full h-64 relative">
        <CustomImage
          src={classroom?.imageUrl ?? ""}
          alt={`${classroom?.title} classroom image.`}
          fill={true}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-heading">
          {classroom?.title}
        </p>
        <p className="text-md sm:text-lg text-body">{classroom?.description}</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <ClassroomHeroDetailCard
            title="Educator"
            data={classroom?.owner ?? "N/A"}
          />
          <ClassroomHeroDetailCard
            title="Students"
            data={`${classroom?.userCount}/${classroom?.userLimit}`}
          />
          <ClassroomHeroDetailCard
            title="Created"
            data={formatTimeAgo(
              classroom?.createdAt.toString() ?? new Date().toString()
            )}
          />
          <ClassroomHeroDetailCard
            title="Last Update"
            data={formatTimeAgo(
              classroom?.updatedAt.toString() ?? new Date().toString()
            )}
          />
        </div>
      </div>
    </div>
  );
}
