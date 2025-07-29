import { IApiResponse } from "@/types/fetchWrapper";

export default async function createClassroom(formData: FormData) {
  const res = await fetch("/api/classes/create", {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  console.log(res);
  const data: IApiResponse<TClassroom> = await res.json();
  return data;
}
