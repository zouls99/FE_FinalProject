import React from 'react';
import MovieCard from './MovieCard';

const Movie = ({ movies, selectedMovie, onMovieClick, onClear }) => {
  if (selectedMovie) {
    return (
      <div className="bg-slate-800 w-full pt-7 h-screen">
        <div className="w-full flex items-center justify-center">
          <div className="ml-5 bg-slate-700 p-2 rounded-md text-white w-[60%]">
            <h1 className="text-2xl font-bold">Title: {selectedMovie.Title}</h1>
            <p>Director: {selectedMovie.Director}</p>
            <p>Genre: {selectedMovie.Genre}</p>
            <p>Year: {selectedMovie.Year}</p>
            <p>Country: {selectedMovie.Country}</p>
            <p>Actors: {selectedMovie.Actors}</p>
            <p>Language: {selectedMovie.Language}</p>
            <p>Rating: {selectedMovie.imdbRating}</p>
            <p>Plot: {selectedMovie.Plot}</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4" onClick={onClear}>
              Back
            </button>
          </div>
          <div>
            <img
              src={selectedMovie.Poster}
              alt={selectedMovie.Title}
              className="w-[300px] h-[450px] object-cover mb-2 rounded-md"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 w-full pt-7 h-screen">
      <div className="w-full flex flex-wrap justify-center gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={() => onMovieClick(movie)} />
        ))}
      </div>
    </div>
  );
};

export default Movie;

