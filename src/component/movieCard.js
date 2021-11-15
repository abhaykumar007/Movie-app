import React, { useState } from "react";

export default function MovieCard(props) {
  const { movie, handelFavOnClick, handelRemoveFavOnClick, favorite } = props;
  //   console.log("Movie", movie);
  // console.log(favorite);
  return (
    <div className="movie-card">
      <div className="left">
        <img src={movie.Poster} alt="Movie Poster" />
      </div>
      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <div className="rating">{movie.imdbRating}</div>
          <div>
            {favorite ? (
              <button
                onClick={() => handelRemoveFavOnClick(movie)}
                className="unfavourite-btn"
              >
                unfavorite
              </button>
            ) : (
              <button
                onClick={() => handelFavOnClick(movie)}
                className="favourite-btn "
              >
                favorite
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
