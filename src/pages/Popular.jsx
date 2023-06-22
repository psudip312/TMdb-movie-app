import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
const Popular = () => {
  // State to store the popular movies
  const [popularMovies, setPopularMovies] = useState([]);

  // Fetch the data from the API
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setPopularMovies(json.results))
      .catch(err => console.error('error:', err));
  }, []);

  // Render the list of popular movies
  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="moviepage">
      {popularMovies.map(movie => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;
