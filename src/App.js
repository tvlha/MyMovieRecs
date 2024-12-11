import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
