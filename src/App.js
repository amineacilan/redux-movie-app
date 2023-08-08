import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PageNotFound" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
