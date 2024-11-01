import React from "react";

type EpisodeListProps = {
  episodes: { id: number; name: string }[];
  selectedEpisode: number | null;
  onEpisodeClick: (id: number) => void;
  onResetEpisodes: () => void;
  loading: boolean;
};

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  selectedEpisode,
  onEpisodeClick,
  onResetEpisodes,
  loading,
}) => {
  return (
    <div className="max-w-[320px]  max-[769px]:w-[300px] w-full p-4 border-r border-gray-300 mb-4">
      <div
        className="text-center cursor-pointer hover:text-red-800"
        onClick={onResetEpisodes}
      >
        Episode List
      </div>
      <hr className="my-2" />
      <div className="overflow-auto h-[96%] ">
        {loading ? ( // Show loading state
          <div className="flex items-center justify-center h-full">
            <p className="text-lg font-bold text-gray-800">
              Loading episodes...
            </p>
          </div>
        ) : (
          <ul>
            {episodes.map((episode) => (
              <li
                key={episode.id}
                className={`cursor-pointer max-[1024px]:text-sm max-[768px]:text-xs p-2 mb-2 rounded-lg ${
                  selectedEpisode === episode.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => onEpisodeClick(episode.id)}
              >
                {episode.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EpisodeList;
