import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import ikon search

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      onSearch(keyword);
    }
  };

  return (
    <div className="flex items-center w-full max-w-3xl bg-gradient-to-l from-purple-300 to-purple-100 rounded-full shadow-md px-4 py-4">
      {/* Input Search */}
      <input
        type="text"
        placeholder="Keyword : [Mata Kuliah] [Dosen]"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 px-4 py-2"
      />

      {/* Tombol Cari dengan Ikon */}
      <button onClick={handleSearch} className="p-2 rounded-full text-purple-500 hover:text-purple-700">
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
