import { useEffect, useState } from "react";
import { DragonGrid } from "./DragonGrid";
import { HeroImg } from "./HeroImg";
import { getApi } from "../helpers/getApi";

export const HeroSection = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getApi()
      .then((characters) => {
        setCharacters(characters);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className=" bg-gray-800 flex flex-col items-center">
      <HeroImg />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-bold pt-7 pb-4">Dragon Ball</h1>
        <h3 className="text-white text-2xl font-bold">Powered by elRodri</h3>
      </div>
      <DragonGrid characters={characters} />
    </div>
  );
};
