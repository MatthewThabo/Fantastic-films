import React from "react";

const SingleMovie = (props) => {
    const { movie } = props;
    console.log(movie)
    return (
        <div class="">
        <div classs="image-movie">
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
        </div>
        <div class="info">
            <div class="title">{movie.original_title} (<span>{movie.release_date.split("-")[0]}</span>) </div>
        </div>
    </div>
      );
    
}

export default SingleMovie;