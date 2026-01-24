import TTopicNoteBlock from "@/types/TopicNoteBlock";

interface NotebookBlockRendererProps {
  block: TTopicNoteBlock;
}

export default function NotebookBlockRenderer({
  block,
}: NotebookBlockRendererProps) {
  const renderBlockContent = () => {
    switch (block.type.toLowerCase()) {
      case "heading":
      case "h1":
        return (
          <h2 className="text-2xl font-bold text-heading mb-2">
            {block.content}
          </h2>
        );

      case "h2":
      case "subheading":
        return (
          <h3 className="text-xl font-semibold text-heading mb-2">
            {block.content}
          </h3>
        );

      case "h3":
        return (
          <h4 className="text-lg font-medium text-heading mb-2">
            {block.content}
          </h4>
        );

      case "image":
        return (
          <figure className="my-4">
            <img
              src={block.imageUrl || block.content}
              alt={block.content || "Notebook image"}
              className="max-w-full h-auto rounded-lg shadow-md mx-auto"
            />
            {block.content && block.imageUrl && (
              <figcaption className="text-center text-sm text-body mt-2">
                {block.content}
              </figcaption>
            )}
          </figure>
        );

      case "quote":
      case "blockquote":
        return (
          <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-body bg-background rounded-r-md">
            {block.content}
          </blockquote>
        );

      case "code":
        return (
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            <code>{block.content}</code>
          </pre>
        );

      case "list":
      case "bullet":
        return (
          <ul className="list-disc list-inside space-y-1 my-3 text-body">
            {block.content.split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );

      case "numbered":
      case "ordered":
        return (
          <ol className="list-decimal list-inside space-y-1 my-3 text-body">
            {block.content.split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        );

      case "divider":
      case "separator":
        return <hr className="my-6 border-gray-300" />;

      case "text":
      default:
        return (
          <p className="text-body leading-relaxed mb-4 whitespace-pre-wrap">
            {block.content}
          </p>
        );
    }
  };

  return (
    <div className="notebook-block animate-fadeIn">{renderBlockContent()}</div>
  );
}
