import { usePokemon } from "../hooks/usePokemon";
import PokemonCard from "../components/PokemonCards";
import SearchBar from "../components/SearchBar";

export default function Home() {
    const { pokemonList, search, setSearch } = usePokemon();

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="flex justify-center text-2xl pb-2 mb-3 text-red-300 font-bold">PokeDex App</h1>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {pokemonList.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}