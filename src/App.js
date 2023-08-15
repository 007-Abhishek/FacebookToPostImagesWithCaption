import React from "react";
import Header from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";
import MainArea from "./Components/MainArea";
import './Style.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="page">
        <LeftPanel/>
        <MainArea/>
      </div>
    </div>
  );
}

export default App;
