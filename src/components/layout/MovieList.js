import React from "react";
import classes from "./MovieList.module.css";
// import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const MovieList = ({movie}) => {
   const navigate = useNavigate();

  return (
    <div className={classes.main}>  
        <div className={classes.movie}>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} onClick={() => navigate("/movie-back-page")}   />
            <div className={classes.movieinfo}>
            <h3>{movie.title}</h3>
            <p>{movie.vote_average}</p>
            </div>
        </div>
    </div> 
  );
};export default MovieList;