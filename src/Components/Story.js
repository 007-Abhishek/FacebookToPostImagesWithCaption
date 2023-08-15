import React from "react";
import '../Style.css';
import Img1 from '../images/story.jpg';

function Story() {
  return (
    <div className="story grid text-center ">
        <div className="card opacity-75" style={{width:"130px", height:"200px"}}>
            <img src={Img1} className="card-img-top" style={{marginTop:"15%"}}/>
        </div>
        <div className="card opacity-25" style={{width:"130px", height:"200px"}}>
            <img src={Img1} className="card-img-top" style={{marginTop:"15%"}}/>
        </div>
        <div className="card opacity-25" style={{width:"130px", height:"200px"}}>
            <img src={Img1} className="card-img-top" style={{marginTop:"15%"}}/>
        </div>
        <div className="card opacity-25" style={{width:"130px", height:"200px"}}>
            <img src={Img1} className="card-img-top" style={{marginTop:"15%"}}/>
        </div>
        <div className="card opacity-25" style={{width:"130px", height:"200px"}}>
            <img src={Img1} className="card-img-top" style={{marginTop:"15%"}}/>
        </div>
        <div className="card opacity-25" style={{width:"130px", height:"200px"}}>
            <img src={Img1} className="card-img-top" style={{marginTop:"15%"}}/>
        </div>
        
    </div>
  );
}

export default Story;
