import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./conponents/NavBar";
import { SideBar } from "./conponents/SideBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <SideBar />
      </div>
    </>
  );
}

export default App;
