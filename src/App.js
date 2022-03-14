import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import PopularFilms from "./pages/PopularFilms";
import MovieBackPage from "./components/layout/MovieBackPage";

function App() {
  return (
  <Layout>
    <Routes>
      <Route path='/' element={<Home />} exact/>
       <Route path='/about' element={<About />} />
       <Route path='/popular-films' element={<PopularFilms />} />
       <Route path='/movie-back-page' element={<MovieBackPage />} />
    </Routes>
  </Layout>
  );
}

export default App;
