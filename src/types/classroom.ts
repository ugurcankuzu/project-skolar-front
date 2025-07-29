type TClassroom = {
  id: number;
  title: string;
  description: string;
  userCount: number;
  userLimit: number;
  participants: Array<any>;
  owner: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  imagePublicId?: string;
};
