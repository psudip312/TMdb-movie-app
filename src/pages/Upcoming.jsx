import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
const Upcoming = () => {
  // State to store the upcoming movies
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // Fetch the data from the API
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setUpcomingMovies(json.results))
      .catch(err => console.error('error:', err));
  }, []);

  // Render the list of upcoming movies
  return (
    <div>
      <h1>Upcoming Movies</h1>
      <div className="moviepage">
      {upcomingMovies.map(movie => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
      <ul>
        {upcomingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Upcoming;
