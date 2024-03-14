import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <div className="container-fluid text-center topNavParent py-1 d-none d-lg-block" id='home'>
        <div className="row topNav justify-center">
          <div className="col-sm-12  profileItems fs-5">
            <span><i className="fa-brands fa-facebook"></i></span>
            <span><i className="fa-brands fa-twitter"></i></span>
            <span><i className="fa-brands fa-instagram"></i></span>
            <span><i className="fa-brands fa-linkedin-in"></i></span>
          </div>
          <div className="col-sm center">
            <p className='text-end '>long established fact that a reader will be</p>
          </div>
        </div>
      </div>
      {/* navbar start */}
      <nav className="navbar mainNavContainer py-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://github.com/sharmaabhinay">
            <img src="https://themewagon.github.io/lighten/images/logo.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top logoImg"/>
            
          </a>
          <nav className="navbar navbar-expand-lg col-lg-9 d-lg-flex">
            <div className="container-fluid">
              <div className=' w-100 d-md-none container-fluid  burgerMenu'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon text-white"></span>
                </button>
              </div>
              
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navParent d-lg-flex justify-content-between w-100">
                  <li className="nav-item">
                    <Link to="/" className='nav-link text-dark '>HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/About" className='nav-link text-dark '>ABOUT</Link>
                  </li>
                  <li className="nav-item">
                   <Link to="/Product" className='nav-link text-dark '>PRODUCT</Link>
                  </li>
                  <li className="nav-item">
                   <Link to="/Blog" className='nav-link text-dark '>BLOG</Link>
                  </li><li className="nav-item">
                    <Link to="/Contact" className='nav-link text-dark '>CONTACT</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#">SIGNUP</a>
                  </li>
                </ul>
                {/* <span className="navbar-text">
                  Navbar text with an inline element
                </span> */}
                <div>
                <button type="button" className="btn btn-warning px-5 ms-4">Login</button>

                </div>
              </div>
            </div>
          </nav>
            </div>
      </nav>      
    </>
  )
}

export default Navbar