import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MatchInfo from "../pages/MatchInfo";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match/:matchId" element={<MatchInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
