import React from 'react'
import Yellowbg from './Yellowbg'
import '../services.css';
import Footer from '../Footer';
import BlogContent from './BlogContent';

const Blog = () => {
    let Aname = "BLOG";

  return (
    <>
    <Yellowbg data={Aname}/>
    <div className="">
        <div className="">
            <p className='col-12 col-md-6 m-auto text-center fs-5 py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
            <BlogContent />
            <BlogContent />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Blog