import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./MoviePage.css"

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q",
  }
    };
  
    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="moviepage">
      {movies.map(movie => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesPage;
