import { useState } from "react";

/**
 * Search Bar Element
 * @returns {JSX.Element} Search Bar
 */

export default function SearchBar({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Podcasts"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}
