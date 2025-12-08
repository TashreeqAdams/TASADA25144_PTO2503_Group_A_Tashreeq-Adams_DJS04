import { genres } from "../data";

/**
 *
 * Maps through genre data and returns each genre title in a drop down option
 *
 * @returns {JSX.Element} The genre filter
 */

export default function Filter() {
  return (
    <div>
      <select>
        {genres.map((genre) => (
          <option key={genre.id}>{genre.title}</option>
        ))}
      </select>
    </div>
  );
}
