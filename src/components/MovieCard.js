import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;
  return (
    <div className="w-40 md:w-56 flex-shrink-0 cursor-pointer">
      <img alt={title} src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
