const typeColors = {
  grass: "bg-green-500",
  fire: "bg-red-500",
  water: "bg-blue-500",
  bug: "bg-lime-500",
  normal: "bg-gray-400",
  poison: "bg-purple-500",
  electric: "bg-yellow-400",
  ground: "bg-yellow-700",
  fairy: "bg-pink-400",
  fighting: "bg-red-700",
  psychic: "bg-pink-600",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-500",
  ice: "bg-cyan-400",
  dragon: "bg-indigo-700",
  dark: "bg-gray-700",
  steel: "bg-gray-500",
  flying: "bg-blue-300",
};

export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transform hover:scale-105 transition-all duration-200 ease-in-out">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <h2 className="capitalize text-lg font-semibold mt-2 text-center">{pokemon.name}</h2>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {pokemon.types.map(({ type }) => (
          <span
            key={type.name}
            className={`text-xs text-white px-2 py-1 rounded-full ${typeColors[type.name] || "bg-gray-500"}`}
          >
            {type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
  