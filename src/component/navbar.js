import React from "react";
import { useState } from "react/cjs/react.development";

export default function Navbar(props) {
  const { addMovie } = props;
  const [search, setSearch] = useState("");
  const [searchMovie, setSearchMovie] = useState(null);
  // console.log("searchMovie", searchMovie);
  // console.log(search);
  async function handelOnClick() {
    if (search) {
      const url = `http://omdbapi.com/?t=${search}&apikey=891a9115`;
      const response = await fetch(url);
      const data = await response.json();
      // setSearch("");
      setSearchMovie(data);
    } else {
      alert("Enter the movie name");
    }
  }
  function addToMoviesClick() {
    addMovie(searchMovie);
    setSearchMovie(null);
    setSearch("");
  }
  return (
    <div className="nav">
      <div className="search-container">
        <input
          placeholder="Enter the movie Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handelOnClick} className="search-btn">
          Search
        </button>
      </div>

      {searchMovie && (
        <div className="search-result">
          <img src={searchMovie.Poster} alt="movie-poster" />

          <div className="movie-info">
            <div className="title">
              <h3>{searchMovie.Title}</h3>
            </div>
            <div className="plot">{searchMovie.Plot}</div>
            <button
              // className="add-to-movies movie-info button"
              onClick={addToMoviesClick}
            >
              Add to movies
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
