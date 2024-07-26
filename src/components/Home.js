import React from "react";
import "./Home.css";
import wallpaper from "../images/wallpaper.jpg";
import Nav from "./Nav";

function Home() {
  return (
    <div className="home">
      <img src={wallpaper} style={{ width: "100vw" }} />
      <Nav />
    </div>
  );
}

export default Home;
