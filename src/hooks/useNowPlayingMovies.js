import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      // "https://api.themoviedb.org/3/movie/now_playing?page=1",
      // API_OPTIONS
      "https://api.themoviedb.org/3/discover/movie?with_original_language=te&sort_by=popularity.desc&page=1",
      // "https://api.themoviedb.org/3/movie/now_playing?region=IN&language=te-IN&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
