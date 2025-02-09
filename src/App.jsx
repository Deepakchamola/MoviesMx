import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Peoples from "./components/Peoples";
import About from "./components/About";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PeopleDetails from "./components/PeopleDetails";
import Trailer from "./components/Templates/Trailer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="bg-[#1F1E24] w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/details/:id' element={<MovieDetails />} >
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route> 
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />} >
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<Peoples />} />
        <Route path="/person/details/:id" element={<PeopleDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
