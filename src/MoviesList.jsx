import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './Movieslist.css';

const MovieList = ({ searchInput, sortOrder }) => {
  const [movies, setMovies] = useState([]);
  const [havedata, setHaveData] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q'
        }
      });
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies?.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchInput?.toLowerCase())
  );

  const sortedMovies = filteredMovies?.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'desc') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  useEffect(() => {
    if (searchInput && sortOrder) {
      setHaveData(true);
    } else {
      setHaveData(false);
    }
  }, [searchInput]);

  const data = havedata ? sortedMovies : movies;

  return (
    <div>
      <h1>Trending Movies</h1>
      <div className='moviescard'>
        {data?.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
