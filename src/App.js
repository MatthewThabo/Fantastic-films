import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import PopularFilms from "./pages/PopularFilms";
import MovieBackPage from "./components/layout/MovieBackPage";
import SingleMovie from "./components/layout/singleMovie";

function App() {
  return (
  <Layout>
    <Routes>
      <Route path='/' element={<Home />} exact/>
       <Route path='/about' element={<About />} />
       <Route path='/popular-films' element={<PopularFilms />} />
       <Route path='/movie-back-page' element={<MovieBackPage />} />
       {/* <Route path='/Single-movie' render={(props) => <SingleMovie {...props}/>} /> */}
    </Routes>
  </Layout>
  );
}

export default App;
