export default function PokemonCard({ pokemon }) {
    return (
      <div className="bg-white shadow rounded p-4 text-center dark:bg-gray-800">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto" />
        <h2 className="capitalize font-semibold mt-2">{pokemon.name}</h2>
      </div>
    );
  }
  