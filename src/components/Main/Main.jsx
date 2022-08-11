import React from "react";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import "./Main.scss";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Main;
