import React, { useState, useEffect } from 'react';

import './Movie.css';

const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "a9a802925ded02d8494f5bf5199d5b4c";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        
        const API_ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();

        setMovies(data.results.slice(0, 10));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  const handleMouseEnter = (event) => {
    event.currentTarget.style.transform = 'scale(1.1)';
    event.currentTarget.style.zIndex = '3';
  
    // Find the movie element that was hovered
    const movieElement = event.currentTarget;
  
    // Create a new div element for the movie information
    const movieInfoDiv = document.createElement('div');
    movieInfoDiv.classList.add('movie-info');
  
    // Add a play button to the div
    const playButton = document.createElement('button');
    playButton.innerText = 'Play';
    movieInfoDiv.appendChild(playButton);
  
    // Add the movie title to the div
    const movieTitle = document.createElement('h3');
    movieTitle.innerText = movies.title;
    movieInfoDiv.appendChild(movieTitle);
  
    // Add the movie overview to the div
    const movieOverview = document.createElement('p');
    movieOverview.innerText = movies.overview;
    movieInfoDiv.appendChild(movieOverview);
  
    // Add the movie rating to the div
    const movieRating = document.createElement('p');
    movieRating.innerText = `Rating: ${movies.vote_average}`;
    movieInfoDiv.appendChild(movieRating);
  
    // Append the movie info div to the movie element
    movieElement.appendChild(movieInfoDiv);
  };
  
  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'scale(1)';
    event.currentTarget.style.zIndex = '0';
  
    // Find the movie element that was hovered
    const movieElement = event.currentTarget;
  
    // Find the movie info div within the movie element
    const movieInfoDiv = movieElement.querySelector('.movie-info');
  
    // Remove the movie info div from the movie element
    movieElement.removeChild(movieInfoDiv);
  };
  
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="movie" key={movie.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            > 
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Movies