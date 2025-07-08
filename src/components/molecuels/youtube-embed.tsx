// components/YouTubeEmbed.tsx
type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
};

const YouTubeEmbed = ({
  videoId,
  title = "YouTube video",
}: YouTubeEmbedProps) => {
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
