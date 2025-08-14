import { HTMLAttributes, JSX, ReactNode, useState } from "react";
import ExpandCollapseIcon from "../icons/expandCollapseIcon";
import { useModal } from "@/store/modalStore";
import CreateTopicNoteModal from "./modals/createTopicNoteModal";
import XMarkIcon from "../icons/xMarkIcon";
import RemoveTopicModal from "./modals/removeTopicModal";
import TTopic from "@/types/Topics";

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
  const handleOpenModal = (modalWindow: JSX.Element) => {
    modalContext?.openModal(modalWindow);
  };
  const handleRemoveButtonModal = () => {
    modalContext?.openModal(
      <RemoveTopicModal topic={item as unknown as TTopic} />
    );
  };
  return (
    <div className="flex flex-col gap-4 relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleRemoveButtonModal();
        }}
        className="absolute top-0 right-0 hover:bg-error/20 text-error rounded-full p-2 transition-colors cursor-pointer"
      >
        <XMarkIcon />
      </button>
      {render(item)}
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleOpenModal(
              <CreateTopicNoteModal topicId={item.id as number} />
            );
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
              className="bg-background border border-gray-300 rounded-md px-4 py-2 group-hover:border group-hover:border-primary duration-300 space-y-2"
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
