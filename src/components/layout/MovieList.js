import React from "react";
import classes from "./MovieList.module.css";
// import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import ReactCircleModal from 'react-circle-modal'

import MainNavigation from './MainNavigation';

const MovieList = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <ReactCircleModal
      backgroundColor="#ffffff;"
      toogleComponent={onClick => (
        <button className={classes.btn} onClick={onClick}>
          <div className={classes.main}>
            <div className={classes.movie}>
              <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
              <div className={classes.movieinfo}>
                <h3>{movie.title}</h3>
                <p>{movie.vote_average}</p>
              </div>
            </div>
          </div>
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <><MainNavigation className={classes.top}/>
        <div className={classes.flex} style={{ backgroundColor: '#fffff', padding: '1em' }}>
          <div className=''>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
          </div>
          <div className=''>
            <h3>  {movie.title} ({movie.release_date})</h3>
            <p>  Rating: {movie.vote_average}</p>
            <p>Overview</p>
            <p>  {movie.overview}</p>
          </div>
        </div>
          <div className={classes.formcenter}>
  <form>
    <label>Email:</label>
    <input type="email" name="email" placeholder="Email"></input>
    <input type="submit"></input>
  </form>		
</div>

        </>
        
      )}
    </ReactCircleModal>
  );
}; export default MovieList;