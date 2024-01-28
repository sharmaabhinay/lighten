import React from 'react';
import './products.css';

const Footer = () => {
  return (
    <>
    <div className="footerContainer w-100 m-auto bg-dark">
        <div className="footerParent  py-3">
            <div className='text-center d-flex col-12 col-md-2 m-auto justify-content-evenly text-white mt-5'>
                <span><i className="fa-brands fa-facebook"></i></span>
                <span><i className="fa-brands fa-twitter"></i></span>
                <span><i className="fa-brands fa-instagram"></i></span>
                <span><i className="fa-brands fa-linkedin-in"></i></span>
            </div>
            <div className='text-white mt-5 d-block my-5 text-start d-md-flex m-auto justify-content-between col-10'>
                <div className='col-md-3 col-12'>
                    <h3>CONATCT US</h3>
                    <ul className='mt-4'>
                        <li>123 Second Street Fifth Avenue,</li>
                        <li>Manhattan, New York</li>
                        <li>+91 777-3896-496</li>
                    </ul>
                    
                </div>
                <div className='col-md-3 col-12'>
                    <h3>ADDITIONAL LINKS</h3>
                    <ul className='mt-4'>
                        <li><a href="#home" className='text-white text-decoration-none'>About us</a></li>
                        <li><a href="#home" className='text-white text-decoration-none'>Terms and conditions</a></li>
                        <li><a href="#home" className='text-white text-decoration-none'>Privacy policy</a></li>
                        <li><a href="#home" className='text-white text-decoration-none'>News</a></li>
                        <li><a href="#home" className='text-white text-decoration-none'>Contact us</a></li>
                    </ul>
                    
                </div>
                <div className='col-12 col-md-3'>
                    <h3>SERVICE</h3>
                    <ul className='mt-4'>
                        <li></li>
                        <li><a href="#dataRecovery" className='text-white text-decoration-none'>Computer repair</a></li>
                        <li><a href="#dataRecovery" className='text-white text-decoration-none'>Mobile service</a></li>
                        <li><a href="#dataRecovery" className='text-white text-decoration-none'>Network solutions</a></li>
                        <li><a href="#dataRecovery" className='text-white text-decoration-none'>Technical support</a></li>
                    </ul>
    
                </div>
                <div className='col-12 col-md-3'>
                    <h3>ABOUT LIGHTEN</h3>
                    <p className='mt-4'>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices,</p>
                </div>
            </div>
        </div>
        <div className='bg-warning fs-5 text-center pt-2 pb-1 fw-light px-2'>
            <p>Copyright 2019 All Right Reserved By Free html Templates Distributed By ThemeWagon</p>
        </div>
    </div>
    </>
  )
}

export default Footer