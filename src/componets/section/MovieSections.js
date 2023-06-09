import React from 'react';

function MovieSections() {
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
      <h2>Movie Section 1</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
          </li>
        ))}
      </ul>

      <h2>Movie Section 2</h2>
      {/* Add more movie sections here */}
    </div>
  );
}

export default MovieSections;