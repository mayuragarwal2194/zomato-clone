import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className='img-responsive' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
              alt='Zomato-Logo'
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className='header-middleBox mt-3 mt-md-0 d-flex align-items-center'>
            <div className="dropdown">
              <button className="location-btn btn d-flex align-items-center dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-location-dot fa-beat fa-sm me-2"></i> 
                 <span> Jaipur </span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <form className="d-flex align-items-center">
              <div className='search-icon'>
                <i className="fa fa-search ps-3"></i>
              </div>  
              <input
                className="form-control me-2 search-box border-0"
                type="search"
                placeholder="Search for restaurent, cuisine or a dish"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
            </form>
          </div>
          <div className="collapse navbar-collapse zomato-navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link me-4" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
