import React from "react";

type CharacterGridProps = {
  characters: { name: string; image: string }[];
};

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
  return (
    <div
      className="w-full p-4 grid grid-cols-5 max-[1024px]:grid-cols-4 max-[768px]:grid-cols-3
     gap-4 overflow-auto "
    >
      {characters.map((character, index) => (
        <div key={index} className="border p-2 rounded-lg">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-auto mb-2 rounded-lg"
          />
          <h3 className="text-lg font-semibold max-[1024px]:text-base max-[768px]:text-sm">
            {character.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
