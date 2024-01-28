import React from 'react';
import './products.css';
import ProductComponent from './ProductComponent';

const Products = () => {

  return (
    <>
    <div className="productsContainer">
        <div className="productsParent" id='c'>
            <ProductComponent />
            {/* carausal start */}
            <div id="carouselExample" class="carousel slide my-1 carouselMain mb-5" data-bs-ride="carousel">
                <div class="carousel-inner py-3">
                    <div class="carousel-item active">
                        <div className="carouselContentParent m-auto">
                            <h1 className='my-4'>What Clients Say?</h1>
                            <div className="carousalImgContainer d-block d-md-flex align-items-center">
                                <img src="https://themewagon.github.io/lighten/images/lllll.png" class="d-block me-5" alt="..." width=""/>
                                <span className='fs-3 fst-italic'>
                                    <span>Abhinay Sharma</span><br />
                                    <span>24-01-2004</span>                                  
                                </span>
                            </div>
                            <div className="clientPara text-center text-md-start">
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.</p>
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am</p>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="carouselContentParent m-auto">
                            <h1 className='my-4'>What Clients Say?</h1>
                            <div className="carousalImgContainer d-block d-md-flex align-items-center">
                                <img src="https://themewagon.github.io/lighten/images/lllll.png" class="d-block  me-5" alt="..." width=""/>
                                <span className='fs-3 fst-italic'>
                                    <span className=''>Abhinay Sharma</span><br />
                                    <span>24-01-2004</span>                                  
                                </span>
                            </div>
                            <div className="clientPara text-center text-md-start">
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.</p>
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am</p>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="carouselContentParent m-auto">
                            <h1 className='my-4'>What Clients Say?</h1>
                            <div className="carousalImgContainer d-block d-md-flex align-items-center">
                                <img src="https://themewagon.github.io/lighten/images/lllll.png" class="d-block me-5" alt="..." width=""/>
                                <span className='fs-3 fst-italic'>
                                    <span>Abhinay Sharma</span><br />
                                    <span>24-01-2004</span>                                  
                                </span>
                            </div>
                            <div className="clientPara text-center text-md-start">
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.</p>
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* carousal end */}
          <div className="getQuoteContainer mt-5 row w-100 m-auto">
            <div className="quoteParent mt-5 py-4 d-block d-md-flex justify-space-between align-items-center col-11 col-md-10 m-auto bg-warning">
                <div>
                    <b className='text-white fs-2 d-block d-md-inline request'>REQUEST A FREE QUOTE</b><img src="https://themewagon.github.io/lighten/icon/calll.png" alt="call icon" className='ms-3'/>
                    <p className='fs-3'>Get answers and advice from people you want it from.</p>
                </div>
                <div className='text-center'>
                    <button className='bg-dark fs-2 px-5 py-1 text-white rounded-pill ms-md-5 text-center'>Get Quote</button>
                </div>
            </div>
          </div>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8786.958540421263!2d-0.21507643485385738!3d51.48959473596952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1706290390705!5m2!1sen!2sin" className='w-100' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default Products