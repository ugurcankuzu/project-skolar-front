import Link from "next/link";

interface IQuickActionItem {
  title: string;
  link: string;
}
export default function QuickActionItem({ title, link }: IQuickActionItem) {
  return (
    <li className="w-full md:w-auto" key={title}>
      <Link
        href={link}
        className="bg-surface px-4 py-2 rounded-full shadow text-primary font-semibold hover:bg-primary hover:text-white transition-colors duration-300 active:bg-primary/80"
      >
        {title}
      </Link>
    </li>
  );
}
