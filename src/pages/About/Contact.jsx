import React from 'react'
import Yellowbg from './Yellowbg'
import Footer from '../Footer'


const Contact = () => {
  return (
    <>
    <Yellowbg data="Contact Us"/>
    <div className='col-11 m-auto my-5'>
      <form className='col-12 col-md-10 m-auto formC'>
        <div className='d-block d-md-flex justify-content-between'>
         <input type="text" placeholder='Your name' className='border border-warning col-md-5 col-12 border-2'/> <input type="email" placeholder='Email'  className='border border-warning border-2 col-md-5 col-12'/> <br />
        </div>
        <input type="text" placeholder='Phone number' className='col-12 border border-warning border-2'/> <br />
        <textarea name="" id="" cols="" rows="2" placeholder='Message' className='border border-warning border-2 col-12'></textarea>
        <div className='col-12 col-md-10 m-auto text-center my-4'>
          <button className='col-12 col-md-3  bg-dark text-white py-3'>SEND</button>
        </div>
      </form>
    </div>

    <Footer />
    </>
  )
}

export default Contact