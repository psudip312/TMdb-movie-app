import React, { useEffect, useState } from "react";
import TrendingTVShows from "./TrendingTVShows";
import Routing from "./Routing";
import axios from "axios";
import { Navbar } from "react-bootstrap";
const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q'
        }
      };
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await response.json();
        console.log(data.results)
      } catch (error) {
        console.error(error);
        
      }
    };
    fetchData();
  }, []);
  return (
<>
<Routing/>
</>
  );
};
export default App;





