import React from "react";
import Dp from '../images/dp.png';

function LeftPanel() {
  return (
    <div className="leftPanel">
        <img src={Dp} style={{width:"70px", height:"70px", margin:"15px 0px 15px 35px"}}/>
            
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">COVID-19 Information <br/>Center</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Messenger</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Videos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Groups</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Games</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Setting and privacy</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Report a Problem</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Log Out</a>
            </li>
        </ul>
    </div>
  );
}

export default LeftPanel;
