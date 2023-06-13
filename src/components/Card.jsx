import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ movie }) => {
  console.log(movie.id)
  const navigate=useNavigate();
  const handleCardClick = () => {
    navigate(`/Showsdetails/${movie.id}`);
  };
  return (
    <div className="cardd"  onClick={handleCardClick}>
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
          <div className="flip-card-back">
          <h1 className="card-heading">{movie.name}</h1>
          <ul className="card-details">
            <li>
              <span className="detail-label">Title:</span> {movie.name}
            </li>
            <li>
              <span className="detail-label">Original Name:</span> {movie.original_name}
            </li>
            <li>
              <span className="detail-label">Original Language:</span> {movie.original_language}
            </li>
            <li>
              <span className="detail-label">Overview:</span> {movie.overview}
            </li>
            <li>
              <span className="detail-label">First Air Date:</span> {movie.first_air_date}
            </li>
          </ul>
        </div>
        
        </div>
      </div>
    </div>
  );
};
export default Card;
