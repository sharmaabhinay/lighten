import React from 'react';
import ProductComponent from '../ProductComponent';
import Footer from '../Footer';
import '../products.css';
import Yellowbg from './Yellowbg';

const Product = () => {
  let Aname = "OUR PRODUCTS"
  return (
    <>
    <Yellowbg data={Aname}/>
    <div className="text-center my-5">
      <p className='fs-4 fw-400'>We package the products with best services to make you a happy customer.</p>
    </div>
    <div className="productsContainer">
      <div className="productsParent">
       <ProductComponent />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Product