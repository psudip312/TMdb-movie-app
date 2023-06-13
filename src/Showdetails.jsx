import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyComponent from './MyComponent';
import { data } from 'autoprefixer';

const Showdetails = () => {
  const { id } = useParams();

  const [detail,setdetail]=useState();

  console.log("co",detail)

 
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTBiOTYyNjU1ZGIwN2M0ZTRjYzk0MWVhZWJjNjY3YiIsInN1YiI6IjY0N2Y0MDI5Y2FlZjJkMDExOWMxNzVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BfGk8WFXvkIVAapvn8Nnzks4hwXBe_aTZXFxNx_fW4Q',
        },
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
       setdetail(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div>
    <MyComponent data={detail}/>
    </div>
  );
};
export default Showdetails;