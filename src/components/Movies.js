import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {!movies.length ? (
        <div>
          <h3>Malumot topilmadi</h3>
          <img
            style={{ width: "100vh" }}
            src="https://i.gifer.com/7iJR.gif"
            alt="malumot topilmadi"
          />
        </div>
      ) : (
        movies.map((movi) => <Movie key={movi.imdbID} {...movi} />)
      )}
    </div>
  );
};

export default Movies;
