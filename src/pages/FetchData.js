// import React, { useEffect, useState } from "react";
// import MovieList from "../components/layout/MovieList";


// const FetchData = () => {
//   const url =
//     "https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=1";
//     useEffect(() => {
//     fetchPopular();
//   },[]);
  
//   const [popular, setPopular] = useState([]);

//     const fetchPopular = async () => {
//     const data = await fetch(url);
//     const movies = await data.json();
//     console.log(movies);
//     setPopular(movies.results);
//   };
  
//   return (
//     <div>

//       {popular.map(movie => {
//         return <MovieList key={movie.id} movie={movie} />;
//       })}
//     </div>
//   );
// };


// export default FetchData;