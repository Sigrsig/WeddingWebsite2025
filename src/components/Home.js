import React from "react";
import "./Home.css";
import wallpaper from "../images/wallpaper.jpg";
import Nav from "./Nav";
import Event from "./pages/Event";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Outlet />
      <img src={wallpaper} style={{ width: "100vw" }} />
      <Nav />
    </div>
  );
}

export default Home;
