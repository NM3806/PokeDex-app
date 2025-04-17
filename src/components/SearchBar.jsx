export default function SearchBar({search, setSearch}) {
    return (
        <input 
            type="text" placeholder="Search Pokemon"
            value={search} onChange = {(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
        />
    )
}