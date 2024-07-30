import { DragonCard } from "./DragonCard";

export const DragonGrid = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 m-10">
      {characters.map((character) => (
        <DragonCard key={character.id} character={character} />
      ))}
    </div>
  );
};
