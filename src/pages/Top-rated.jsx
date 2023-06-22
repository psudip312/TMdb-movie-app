import React, { useEffect, useState } from 'react';

const TopRated = () => {
  // State to store the top-rated movies
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // Fetch the data from the API
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setTopRatedMovies(json.results))
      .catch(err => console.error('error:', err));
  }, []);

  // Render the list of top-rated movies
  return (
    <div>
      <h1>Top Rated Movies</h1>
      <ul>
        {topRatedMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopRated;
