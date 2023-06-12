import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ movie }) => {
  // console.log({ movie });
  const navigate=useNavigate();
  return (
    <div className="cardd" onClick={() => navigate('/Showsdetails/:id')}>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.name}
            />
            <div>
            
            </div>
          </div>
          <div class="flip-card-back">
            <h1>{movie.name}</h1>
            <ul>
              <li>Title: {movie.name}</li>
              <li>Original Name: {movie.original_name}</li>
              <li>Original Language: {movie.original_language}</li>
              <li>Overview: {movie.overview}</li>
              <li>First Air Date: {movie.first_air_date}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
