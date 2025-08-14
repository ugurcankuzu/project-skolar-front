"use client";
import XMarkIcon from "@/components/icons/xMarkIcon";
import CreateTopicModal from "@/components/shared/modals/createTopicModal";
import RemoveSubTopicModal from "@/components/shared/modals/removeSubTopicModal";
import TreeItem from "@/components/shared/treeItem";
import formatTimeAgo from "@/helpers/getTimeAgo";
import useClassroomId from "@/hooks/useClassroomId";
import useTopicsSWR from "@/hooks/useTopicsSWR";
import TopicTreeSkeleton from "@/skeletons/classrooms/topicTreeSkeleton";
import { useModal } from "@/store/modalStore";
import TTopicNote from "@/types/TopicNote";
import TTopic from "@/types/Topics";
import Link from "next/link";
import { JSX } from "react";

export default function TopicsTree() {
  const { id } = useClassroomId();
  const { topics, isLoading, error } = useTopicsSWR(id);
  const modalContext = useModal();
  if (isLoading) return <TopicTreeSkeleton />;
  if (error)
    return (
      <div className="text-red-500 text-center">Failed to load topics.</div>
    );
  const renderItem = (item: TTopic) => {
    return (
      <div className="space-y-2">
        <p className="font-semibold text-heading">{item.title}</p>
        {item.description && (
          <p className="text-body text-sm">{item.description}</p>
        )}
        <p className="text-body text-sm">{formatTimeAgo(item.createdAt)}</p>
      </div>
    );
  };
  const renderChild = (item: TTopicNote, id: string | number) => {
    return (
      <div
        className="space-y-2 border-b border-gray-300 pb-2 last:border-b-0 last:pb-0 flex items-center justify-between"
        key={id}
      >
        <p className="font-semibold text-heading">{item.title}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOpenModal(<RemoveSubTopicModal topicNote={item} />);
          }}
          className="hover:bg-error/20 text-error rounded-full p-2 transition-colors cursor-pointer"
        >
          <XMarkIcon />
        </button>
      </div>
    );
  };
  const handleOpenModal = (modalWindow: JSX.Element) => {
    modalContext?.openModal(modalWindow);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold text-heading">Topics</h2>
        <button
          onClick={() => handleOpenModal(<CreateTopicModal />)}
          className="bg-primary shadow text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer"
        >
          Add Topic
        </button>
      </div>
      <div>
        {topics && topics?.length > 0 && (
          <ul>
            {topics?.map((topic) => (
              <li
                className="group bg-surface p-4 rounded-xl border border-gray-300 space-y-4 hover:bg-background transition-colors duration-300 my-4 first:mt-0 last:mb-0"
                key={topic.id}
              >
                <Link href={`/skolar/classroom/${id}/topic/${topic.id}`}>
                  <TreeItem
                    key={topic.id}
                    item={topic}
                    render={renderItem}
                    childItems={topic.topicNotes}
                    renderChildren={renderChild}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {topics && topics?.length === 0 && (
          <p className="text-center text-body">No topics found.</p>
        )}
      </div>
    </div>
  );
}
