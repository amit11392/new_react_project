import React from 'react';

function MovieSite() {
  const movies = [
    {
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      year: 1994,
    },
    {
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      year: 1972,
    },
    // Add more movies here
  ];

  return (
    <div>
      <h1>Movie Site</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSite;
