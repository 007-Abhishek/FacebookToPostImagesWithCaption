import React from "react";
import Story from "./Story";
import PostBar from "./PostBar";

function MainArea() {
  return (
    <div className="rightPanel">
        <Story/>
        <PostBar/>
    </div>
  );
}

export default MainArea;
