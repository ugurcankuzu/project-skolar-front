import { parseClassroomLink } from "@/helpers/classroomLinkGenerate";
import { useParams } from "next/navigation";

export default function useClassroomId() {
  const { classroom } = useParams<{
    classroom: string;
  }>();
  const parsedClassroomId = parseClassroomLink(classroom);
  return parsedClassroomId;
}
