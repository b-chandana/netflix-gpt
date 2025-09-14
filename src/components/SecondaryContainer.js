import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div>
        <div className=" bg-black ">
          <div className="-mt-80 px-12 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Trending  "} movies={movies.TrendingMovies} />
            <MovieList title={"Popular"} movies={movies.PopularMovies} />
            <MovieList
              title={"Upcoming Movies"}
              movies={movies.UpcomingMovies}
            />

            {/*
    
    movielist-popular
    movieCrd*n
    movielist-nowplaying
    movielist-trending
    movielist-horror
    */}
          </div>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
