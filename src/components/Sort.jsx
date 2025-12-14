/**
 *
 * Sorting options for podcasts by Newest First, Title A–Z, and Title Z–A
 *
 * @returns {JSX.Element} The sort filter
 */

export default function Sort({ sort, setSort }) {
  return (
    <div>
      <select
        defaultValue=""
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="" disabled>
          Sort
        </option>
        <option value="none">Remove sorting</option>
        <option value="latest">Latest</option>
        <option value="alphabetical">A-Z</option>
        <option value="reverse">Z-A</option>
      </select>
    </div>
  );
}
