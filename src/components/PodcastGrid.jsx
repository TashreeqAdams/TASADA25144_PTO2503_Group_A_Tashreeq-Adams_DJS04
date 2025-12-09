import PodcastCard from "./PodcastCard";
import SearchBar from "./SearchBar";

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
export default function PodcastGrid({ podcasts, genres, search, pageNumber }) {
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(podcasts.length / usersPerPage);

  return (
    <div className="grid">
      {podcasts
        .filter((podcast) => {
          return search.toLowerCase() === ""
            ? podcast
            : podcast.title.toLowerCase().includes(search);
        })
        .map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
        ))
        .slice(pagesVisited, pagesVisited + usersPerPage)}
    </div>
  );
}
