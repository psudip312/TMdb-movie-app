import React from "react";
import "./Mycomponent.css";
const MyComponent = ({ data }) => {


  return (
    <div className="main-container">
    <img
    src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
    alt=""
  />
      <div className="image-container">
      
       
      </div>
      <div className="content-container">
<h1>{data.original_title}</h1>
<p>{data.tagline}</p>

<p>{data.overview}</p>

      </div>
    </div>
  );
};

export default MyComponent;
