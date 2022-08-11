import { useState } from "react";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SideBar from "./components/SideBar/SideBar";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="container-fluid">
        <div className="app__hero">
          <SideBar />
          <Main />
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default App;
