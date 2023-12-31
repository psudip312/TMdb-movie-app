import React, { useEffect, useState } from 'react';
import './TrendingTVShows.css'
import Card from './components/Card';
import { useNavigate,useParams} from 'react-router-dom';
function TrendingTVShows({ sortOrder, searchQuery }) {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const navigate =useNavigate();

  console.log("tvshowskodetails",shows)
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
        setShows(data.results);
      } catch (error) {
        console.error(error);
        
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const updatedSortedShows = shows?.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.title.localeCompare(ba.title);
      } else if (sortOrder === 'desc') {
        return ba.title.localeCompare(a.title);
      }
      return 0;
    });
    setFilteredShows(updatedSortedShows);
  }, [sortOrder, shows]);
  useEffect(() => {
    const filteredData = shows.filter((show) => show.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredShows(filteredData);
  }, [searchQuery, shows]);
  return (
    <div>
    <h1 className="heading">Trending TV Shows</h1>
    <div className="card-container">
      {filteredShows?.map((show, index) => (
        <Card key={index} movie={show} />
      ))}
    </div>
  </div>
  
  );
}
export default TrendingTVShows;