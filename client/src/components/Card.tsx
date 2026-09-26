import { ShareIcon } from "../icons/ShareIcon";
import { Tweet } from "react-tweet";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

function getYouTubeEmbedUrl(link: string) {
  const url = new URL(link);

  if (url.hostname === "youtu.be") {
    const videoId = url.pathname.slice(1);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.hostname.includes("youtube.com")) {
    const videoId = url.searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  }

  return null;
}

export const Card = ({ title, link, type }: CardProps) => {
  const embedUrl = getYouTubeEmbedUrl(link);

  return (
    <div className="w-95">
      <div className="border-slate-200 p-4 bg-white rounded-md border-2">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            {title}
          </div>

          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ShareIcon />
              </a>
            </div>

            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full pt-4 overflow-hidden ">
          {type === "youtube" && embedUrl && (
            <iframe
              className="w-full aspect-video rounded-md"
              src={embedUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}

          {type === "twitter" && (
            <div className="tweet-scale">
              <Tweet id={link.split("/status/")[1]?.split("?")[0] ?? ""} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
