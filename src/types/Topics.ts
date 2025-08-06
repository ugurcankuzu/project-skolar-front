import TTopicNote from "./TopicNote";

type TTopic = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  topicNotes: Array<TTopicNote>;
};

export default TTopic;
