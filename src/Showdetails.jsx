import React from 'react';
import './Showdetails.css'; // Assuming you have a separate CSS file for styling

const Showsdetails = ({ movie }) => {
  const { title, genre, overview, posterUrl, backgroundImageUrl } = movie;

  return (
    <>
    <div className="movie-details">
    <div className="movie-picture">
      <img src={posterUrl} alt={title} />
    </div>
    <div className="movie-info">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-genre">{genre}</p>
      <p className="movie-overview">{overview}</p>
    </div>
  </div>
    </>
   
  );
};

export default Showsdetails;
