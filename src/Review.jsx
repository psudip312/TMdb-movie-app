import React from "react";
import './Review.css'
const Review = ({ author, content }) => {
  return (
    <div className="review">
      <h3 className="review-author">A review by {author}</h3>
      <p className="review-content">{content}</p>
    </div>
  );
};

export default Review;
