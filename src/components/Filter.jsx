import { genres } from "../data";

/**
 *
 * Maps through genre data and returns each genre title in a drop down option
 *
 * @returns {JSX.Element} The genre filter
 */

export default function Filter({ genre, setGenre }) {
  return (
    <div>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="" disabled>
          Select genre
        </option>
        <option value="all">All genres</option>

        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.title}
          </option>
        ))}
      </select>
    </div>
  );
}
