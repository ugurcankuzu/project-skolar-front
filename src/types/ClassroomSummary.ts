type TClassroomSummary = {
  id: number;
  title: string;
  userCount: number;
  userLimit: number;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  imagePublicId?: string;
};

export default TClassroomSummary;
