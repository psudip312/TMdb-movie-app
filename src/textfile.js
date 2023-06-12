import React, { useState } from "react";
import LoginPage from "./pages/Loginpage";
import MovieList from "./MoviesList";
import TrendingTVShows from "./TrendingTVShows";

const App = () => {
  const [showTvShows, setTvShows] = useState(true);
  const [showMoviesShows, setMoviesShows] = useState(true);

  const handleTvShowsClick = () => {
    setTvShows(true);
    setMoviesShows(false);
  };

  const handleMoviesShows = () => {
    setTvShows(false);
    setMoviesShows(true);
  };

  return (
    <div>
      <button onClick={handleTvShowsClick}>TvShows</button>
      <button onClick={handleMoviesShows}>MoviesShows</button>
      {showTvShows && <TrendingTVShows />}
      {showMoviesShows && <MovieList />}
    </div>
  );
};

export default App;
