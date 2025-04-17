import { useEffect, useState } from "react";

export const usePokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
          try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await res.json();
      
            const promises = data.results.map(async (pokemon) => {
              const pokeRes = await fetch(pokemon.url);
              return await pokeRes.json();
            });
      
            const detailedData = await Promise.all(promises);
            setPokemonList(detailedData);
          } catch (err) {
            console.error("Error fetching Pokémon:", err);
          } finally {
            setLoading(false);
          }
        };
      
        fetchPokemon();
      }, []);
      
    const filtered = pokemonList.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return {pokemonList: filtered, search, setSearch};
}