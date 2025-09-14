import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 ">
      <h1 className="text-white text-3xl font-bold py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
