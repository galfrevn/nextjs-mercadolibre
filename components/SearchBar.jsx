import React from "react";

function SearchBar() {
  return (
    <div className="w-full" >
      <div className="flex bg-white py-1 space-x-3 rounded-sm">
        <div className="flex justify-center items-center pl-3 py-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 text-gray-400 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className="bg-white outline-none w-full pr-2 text-sm text-gray-400 font-light"
          type="text"
          placeholder="Busca productos, marcas y más"
        />
      </div>
    </div>
  );
}

export default SearchBar;
