"use client";
import useClassroomsSummarySWR from "@/hooks/useClassroomsSummarySWR";
import ClassroomItemSkeleton from "@/skeletons/classroomItemSkeleton";
import ClassroomItem from "../shared/classroomItem";

export default function MyClassrooms() {
  const { classrooms, isLoading, error } = useClassroomsSummarySWR();
  const renderClasrooms = () => {
    if (error) {
      return (
        <li className="text-red-500 w-full h-full flex items-center justify-center">
          An error occurred while fetching classrooms.
        </li>
      );
    }

    if (isLoading) {
      return (
        <>
          <ClassroomItemSkeleton />
          <ClassroomItemSkeleton />
          <ClassroomItemSkeleton />
        </>
      );
    }

    if (!classrooms?.length) {
      return (
        <li className="w-full h-full flex items-center justify-center text-gray-400">
          No Classrooms Found
        </li>
      );
    }

    return classrooms.map((classroom) => (
      <li key={classroom.id} className="w-11/12 md:w-full h-64">
        <ClassroomItem classroom={classroom} />
      </li>
    ));
  };

  return (
    <div className="size-full flex flex-col gap-4 rounded-xl p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-heading">My Classrooms</h1>
        <button className="bg-primary shadow text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer">
          Create Classroom
        </button>
      </div>
      <div className="w-full h-full">
        <ul className="size-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderClasrooms()}
        </ul>
      </div>
    </div>
  );
}

//TODO: Burası tamam gibi duruyor. Buradan sonra create classroom kısmını yapıp student view'a bakacağız.