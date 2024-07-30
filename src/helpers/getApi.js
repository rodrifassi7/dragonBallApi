export const getApi = async () => {
  const response = await fetch("https://dragonball-api.com/api/characters");
  const data = await response.json();

  const characters = data.items.map((character) => {
    return {
      id: character.id,
      name: character.name,
      race: character.race,
      image: character.image,
      description: character.description,
      affiliation: character.affiliation,
      ki: character.ki,
    };
  });

  return characters;
};
