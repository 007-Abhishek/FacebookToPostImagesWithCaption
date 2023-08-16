import React from "react";
import home from '../images/home.png';
import request from '../images/request.png';
import notification from '../images/notification.png';
import profile from '../images/profile.png';

function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MyFacebook</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><img style={{width:"25px"}} src={home}/></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><img style={{width:"30px"}} src={request}/></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><img style={{width:"30px"}} src={notification}/></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><img style={{width:"22px"}} src={profile}/></a>
                        </li>
                    </ul>
                    <form className="d-flex" style={{width:"35%"}} role="search">
                        <input className="form-control me-0" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Header;
