import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";
const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `http://www.omdbapi.com/?s=${movieText}&type=movie&apikey=${APIKey}`
      );
      console.log("THE RESPONSE FROM API", response);
      /*  const url = `http://www.omdbapi.com/?s=${movieText}&type=movie&apikey=${APIKey}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log("THE RESPONSE FROM API", responseJson); */
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing></MovieListing>
    </div>
  );
};

export default Home;
