interface IClassroomHeroDetailCard {
  title: string;
  data: string;
}
export default function ClassroomHeroDetailCard({
  title,
  data,
}: IClassroomHeroDetailCard) {
  return (
    <div className="bg-background px-4 py-1 rounded-xl">
      <p className="text-sm text-body">{title}</p>
      <p className="text-md text-heading font-semibold line-clamp-1">{data}</p>
    </div>
  );
}
