import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const movieText = "hobbit";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `http://www.omdbapi.com/?s=${movieText}&type=movie&apikey=${APIKey}`
      );
      console.log("THE RESPONSE FROM API", response);
      dispatch(addMovies(response.data));
      /* dispatch(addMovies(response.data)); */
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
