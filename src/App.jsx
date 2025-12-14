import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import ReactPaginate from "react-paginate";
import Sort from "./components/Sort";

/**
 * App - The root component of the Podcast Explorer application. It handles:
 * - Fetching podcast data from a remote API
 * - Managing loading and error states
 * - Rendering the podcast grid once data is successfully fetched
 * - Displaying a header and fallback UI during loading or error
 * @returns {JSX.Element} The rendered application interface
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("");

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  // Calculate the total number of pages **after filtering**
  const filteredPodcasts = podcasts
    .filter((p) =>
      genre === "" || genre === "all" ? true : p.genres.includes(Number(genre))
    )
    .filter((p) =>
      search === ""
        ? true
        : p.title.toLowerCase().includes(search.toLowerCase())
    );

  const pageCount = Math.ceil(filteredPodcasts.length / usersPerPage);

  return (
    <>
      <Header />
      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter genre={genre} setGenre={setGenre} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <main>
        {loading && (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}

        {error && (
          <div className="message-container">
            <div className="error">
              Error occurred while tyring fetching podcasts: {error}
            </div>
          </div>
        )}

        {!loading && !error && (
          <PodcastGrid
            podcasts={podcasts}
            genres={genres}
            search={search}
            pageNumber={pageNumber}
            pageCount={pageCount}
            pagesVisited={pagesVisited}
            usersPerPage={usersPerPage}
            genre={genre}
            sort={sort}
          />
        )}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </main>
    </>
  );
}
