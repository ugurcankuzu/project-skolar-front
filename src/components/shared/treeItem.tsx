import { HTMLAttributes, ReactNode, useState } from "react";
import ExpandCollapseIcon from "../icons/expandCollapseIcon";
import { useModal } from "@/store/modalStore";
import CreateTopicNoteModal from "./modals/createTopicNoteModal";

interface ITreeItem<T, A> {
  item: T;
  render: (item: T) => ReactNode;
  childItems?: Array<A>;
  renderChildren?: (childItem: A, id: string | number) => ReactNode;
  subItemListStyle?: HTMLAttributes<HTMLUListElement>;
}

export default function TreeItem<
  T extends { id: string | number },
  A extends { id: string | number }
>({
  item,
  render,
  childItems,
  renderChildren,
  subItemListStyle,
}: ITreeItem<T, A>) {
  const hasChildren = childItems && childItems?.length > 0 && renderChildren;
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const toggleExpand = () => {
    setExpanded((state) => !state);
  };
  const modalContext = useModal();
  const handleOpenModal = () => {
    modalContext?.openModal(
      <CreateTopicNoteModal topicId={item.id as number} />
    );
  };
  return (
    <div className="flex flex-col gap-4">
      {render(item)}
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleOpenModal();
          }}
          className="text-primary font-medium px-4 py-2 rounded-md border border-dashed border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer"
        >
          Add Sub-topic
        </button>
      </div>
      {hasChildren && (
        <>
          <button
            type="button"
            className="flex items-center text-primary font-medium"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              toggleExpand();
            }}
          >
            <span
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-90" : "rotate-0"
              }`}
            >
              <ExpandCollapseIcon />
            </span>
            Topic Sections
          </button>
          {isExpanded && (
            <ul
              className="bg-background border border-gray-300 rounded-md px-4 py-2 group-hover:border group-hover:border-primary duration-300"
              {...subItemListStyle}
            >
              {childItems?.map((child) => renderChildren(child, child.id))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
