import React from "react";
import "./MyComponent.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Review from "./Review";
import ModelDesign from "./modal/Modal";
const MyComponent = ({ data }) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [buttonopen,setbuttonopen]=useState(false);
  const [reviews, setReviews] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const navigate=useNavigate();
  const handleCardClick = (recommendationId) => {
    navigate(`/Showsdetails/${recommendationId}`);
  };
  console.log("idinmycomponent", id);
  console.log("mycomponent data received", { data });
  const openModal = () => {
    setIsOpen(true);
  };

  console.log("hel",isOpen)

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleButtonclick=()=>{
setbuttonopen(true);

  }
  const closebutton = () => {
    setbuttonopen(false);
  };
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${data?.backdrop_path})`,
  };
  const handleClick = () => {
    setShowReview(true);
  };

  // fetch to retrieve movies review
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q",
            },
          }
        );
        const json = await response.json();
        setReviews(json.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };

    fetchMovieReviews();
  }, [id]);

  // fetch to retreive recommendation 

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q",
            },
          }
        );
        const json = await response.json();
        setRecommendations(json.results);
      } catch (error) {
        console.error("Error fetching movie recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [id]);

  console.log("Reviews:", reviews);
  return (
    <>
      <div className="main-container" style={backgroundStyle}>
        <div className="pop-image-container" onClick={openModal}>
  
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt=""
          />
        </div>
        <div className="content-container">
          <h1>{data?.original_title}</h1>
          <p class="ptag">{data?.tagline}</p>
          <p>{data?.overview}</p>
        </div>
      </div>
      <button onClick={handleClick}>
        <h2>Show Reviews:</h2>
      </button>
      {showReview && (
        <div className="reviews-container">
          {reviews.map((review) => (
            <Review
              key={review.id}
              author={review.author}
              content={review.content}
            />
          ))}
        </div>
      )}
      <div className="recommendations-container">
      <h2>Recommendations:</h2>
      <div className="recommendations-scroll" >
      
        {recommendations.map((recommendation) => (
          <div className="recommendation" key={recommendation.id}  onClick={() => handleCardClick(recommendation.id)}>
            <img src={`https://image.tmdb.org/t/p/w200${recommendation.poster_path}`} alt="" />
            <p>{recommendation.title}</p>
          </div>
        ))}
      </div>
    </div>
    <ModelDesign isOpen={isOpen} closemodel={closeModal}>
    <h1>hello</h1>
    <h1>hello</h1>
    </ModelDesign>
    </>
  );
};
export default MyComponent;
