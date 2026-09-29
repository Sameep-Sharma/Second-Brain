import { Card } from "../components/Card";
import { useSharedContent } from "../hooks/useSharedContent";
import { useParams } from "react-router-dom";

const SharedDashBoard = () => {
  const { shareLink } = useParams();

  const { contents } = useSharedContent(shareLink ?? "");

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="p-4 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-primary_purple">
            Shared Brain
          </h1>
        </div>

        {/* Cards */}
        <div className="flex gap-4 p-2 flex-wrap">
          {contents.map(({ type, link, title, _id }) => (
            <div key={_id} className="min-w-0">
              <Card
                type={type}
                link={link}
                title={title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedDashBoard;