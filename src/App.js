import { useState } from "react";
import "./App.css";
import MovieCard from "./component/movieCard";
import NavbarComponent from "./component/navbar";
import { data } from "./data";
function App() {
  const [movieList, setMovieList] = useState(data);
  const [favoriteList, setFavoriteList] = useState([]);
  const [isFavTab, setFavTab] = useState(false);
  // console.log(movieList);
  function handelFavOnClick(movie) {
    setFavoriteList((prevState) => [...prevState, movie]);
  }
  function handelRemoveFavOnClick(movie) {
    let ref = favoriteList.filter((element) => element !== movie);
    setFavoriteList(ref);
  }

  const listOfMovies = isFavTab ? favoriteList : movieList;

  function favorite(movie) {
    let index = favoriteList.findIndex((element) => element === movie);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  function addMovie(movie) {
    setMovieList((prevState) => [movie, ...prevState]);
  }
  return (
    <div className="App">
      <NavbarComponent addMovie={addMovie} />

      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${isFavTab ? "" : "active-tabs"}`}
            onClick={() => setFavTab(false)}
          >
            Movie
          </div>
          <div
            className={`tab ${isFavTab ? "active-tabs" : ""}`}
            onClick={() => setFavTab(true)}
          >
            Favorite
          </div>
        </div>

        <div className="list">
          {listOfMovies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              handelFavOnClick={handelFavOnClick}
              handelRemoveFavOnClick={handelRemoveFavOnClick}
              favorite={favorite(movie)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
