import { useState } from "react";
import { HiSearch } from "react-icons/hi";

interface SearchProjectsProps {
  onSearch: (query: string) => void;
}

export default function SearchProjects({ onSearch }: SearchProjectsProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
    </div>
  );
}
