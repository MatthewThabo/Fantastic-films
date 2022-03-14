import classes from "./MovieList.module.css";
function MovieBackPage ({movie}) {
    return(
 <div className={classes.flex} style={{ backgroundColor: '#fffff', padding: '1em' }}>
          {/* <div className=''>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
          </div>
          <div className=''>
            <h3>  {movie.title} ({movie.release_date})</h3>
            <p>  Rating: {movie.vote_average}</p>
            <p>Overview</p>
            <p>  {movie.overview}</p>
          </div> */}
         
         
        </div>        

    );
}

export default MovieBackPage;