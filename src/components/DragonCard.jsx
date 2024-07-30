import "animate.css";

export const DragonCard = ({ character }) => {
  return (
    <article className=" animate__animated animate__zoomIn flex flex-col items-center justify-center border-2 border-gray-700 rounded-lg shadow-md">
      <div className="h-96 w-full bg-gray-700 rounded-lg shadow-md">
        <img
          className="-z-10 hover:scale-125 transition-all duration-500 h-full w-full object-contain"
          src={character.image}
          alt={character.name}
        />
      </div>
      <footer className="flex flex-col  justify-center p-5 rounded-lg w-full">
        <h3 className="z-10 text-white text-3xl font-bold mb-5">{character.name}</h3>
        <h2 className="text-white">Raza:</h2>
        <h2 className="text-yellow-300 mb-3">{character.race}</h2>
        <h2 className="text-white">Ki:</h2>
        <h2 className="text-yellow-300">{character.ki}</h2>
        <h2 className="text-white">Clase:</h2>
        <h2 className="text-yellow-300">{character.affiliation}</h2>
      </footer>
    </article>
  );
};
