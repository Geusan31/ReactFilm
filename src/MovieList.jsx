import React from "react";

const MovieList = ({movie}) => {
  return (
    <div className="card">
      <div className="header-card">
        <p className="year">{movie.Year}</p>
      </div>
      <div className="img">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="" className="cover-film" />
      </div>
      <div className="footer-card">
        <p className="type">{movie.Type}</p>
        <h3 className="title">{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieList;