import React from 'react';
import './navbar.css';
import Services from './Services';
import ServiceProcess from './ServiceProcess';
import Footer from './Footer';
import Products from './Products';

const Hero = () => {
  return (
    <>
    {/* accordian  */}
      
    <div id="carouselExampleAutoplaying" className="carousel slide">
        <div className="carousel-indicators">
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active h-75 border">
            <img src="https://themewagon.github.io/lighten/images/banner2.jpg" className="d-block w-100 carosalImg" alt="..."/>
            <div className="carousel-caption d-block text-start text-dark imgCaption">
              <h1 className='fw-light'>OUR</h1>
              <h1 className='fw-bold text-dark'>LATEST</h1>
              <h1 className='fw-bold text-warning'>PRODUCT</h1>
              <p className='d-none d-md-block'>It is a long established fact that a <br /> reader will be distracted by the readable content of a page</p>
              <button className='bg-warning px-2 mt-2 seeMore'>
                See more Products
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://themewagon.github.io/lighten/images/banner2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-block text-start text-dark imgCaption">
              <h1 className='fw-light'>OUR</h1>
              <h1 className='fw-bold text-dark'>LATEST</h1>
              <h1 className='fw-bold text-warning'>PRODUCT</h1>
              <p>It is a long established fact that a <br /> reader will be distracted by the readable content of a page</p>
              <button className='bg-warning px-5 seeMore'>
                See more Products
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://themewagon.github.io/lighten/images/banner2.jpg" class="d-block w-100" alt="..."/>
            <div className="carousel-caption d-block text-start text-dark imgCaption">
              <h1 className='fw-light'>OUR</h1>
              <h1 className='fw-bold text-dark'>LATEST</h1>
              <h1 className='fw-bold text-warning'>PRODUCT</h1>
              <p>It is a long established fact that a <br /> reader will be distracted by the readable content of a page</p>
              <button className='bg-warning px-5 seeMore'>
                See more Products
              </button>
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      <div className="whyChoose text-center py-2 my-5 display">
        <h1 className='mb-4'><span className='why'>WHY</span> <span className=''> CHOOSE</span> US</h1> 
        <p className='px-4'>Fastest repair service with best price!</p>
      </div>
      <Services />
      <ServiceProcess/>
      <Products />
      <Footer />
    </>
  )
}

export default Hero