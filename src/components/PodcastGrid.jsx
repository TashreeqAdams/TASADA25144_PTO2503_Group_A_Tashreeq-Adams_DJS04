import PodcastCard from "./PodcastCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

/**
 * Displays a grid layout of podcast preview cards. Each card includes
 * podcast details such as title, image, genres, season count, and updated date.
 *
 * @param {Object} props
 * @param {Array<Object>} props.podcasts - Array of podcast objects to display.
 * @param {Array<Object>} props.genres - Array of genre objects used to map genre IDs to titles.
 *
 * @returns {JSX.Element} The rendered grid of podcast cards.
 *
 */
export default function PodcastGrid({
  podcasts,
  genres,
  search,
  pagesVisited,
  usersPerPage,
  genre,
}) {
  const filteredPodcasts = podcasts
    .filter((p) =>
      genre === "" || genre === "all" ? true : p.genres.includes(Number(genre))
    )
    .filter((p) =>
      search === ""
        ? true
        : p.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(pagesVisited, pagesVisited + usersPerPage);

  return (
    <div className="grid">
      {filteredPodcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
          genres={genres}
          genre={genre}
        />
      ))}
    </div>
  );
}
