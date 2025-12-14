export default function Sort() {
  return (
    <div>
      <select defaultValue="">
        <option value="" disabled>
          Sort
        </option>

        <option value="latest">Latest</option>
        <option value="alphabetical">A-Z</option>
        <option value="reverse">Z-A</option>
      </select>
    </div>
  );
}
