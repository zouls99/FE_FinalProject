import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  if (!movie || !movie.Title) return null;

  return (
    <div
      className="bg-slate-700 p-4 rounded-md text-white w-[200px] cursor-pointer"
      onClick={onClick}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-[300px] object-cover mb-2 rounded-md"
      />
      <h2 className="text-xl font-bold">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;