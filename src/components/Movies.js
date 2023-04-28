import React from "react";
import { movies } from "../data";

const movieList = movies.map(movie => {
  return (
    <div className="movieCard" key={movie.title}>
      <p>{movie.title}</p>
      <p>Time: {movie.time} minutes</p>
      <div>Genres:
        <ul>
          {movie.genres.map(genre => {
            return (
              <li key={genre}>{genre}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;



  
