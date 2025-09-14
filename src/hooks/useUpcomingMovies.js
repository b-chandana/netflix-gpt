import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      // "https://api.themoviedb.org/3/movie/now_playing?page=1",
      " https://api.themoviedb.org/3/discover/movie?with_original_language=te&sort_by=release_date.asc&primary_release_date.gte=2025-09-14&page=1",

      //   "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      // "https://api.themoviedb.org/3/movie/now_playing?region=IN&language=te-IN&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
