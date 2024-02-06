import React, { useState } from 'react'
import Yellowbg from './Yellowbg'
import Footer from '../Footer'


const Contact = () => {
  let [userInput , setUserInput] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: ""
  });
  const postUserData = (e) => {
    setUserInput({
      ...userInput , [e.target.name]:e.target.value
    })
  }
  const submitData = async (e) => {
    e.preventDefault();
    const{fullname,email,phone,message} = userInput;
    const res = await fetch("https://lightenproject-c644d-default-rtdb.firebaseio.com/lighteData.json",{
      method : "POST",
      headers : {
        "Content-Type":"application/json"
      },body: JSON.stringify({
        fullname,email,phone,message
      })
    })
    if(res.ok){
      alert("data submited")
      setUserInput({
        fullname: "",
        email: "",
        phone: "",
        message: ""
      })
    }else{
      alert("something is broken")
    }
  }
  return (
    <>
    <Yellowbg data="Contact Us"/>
    <div className='col-11 m-auto my-5'>
      <form className='col-12 col-md-10 m-auto formC'>
        <div className='d-block d-md-flex justify-content-between formGap'>
          <div className='col-12 col-md-6'>
            <input type="text" required name='fullname' value={userInput.fullname} onChange={postUserData} placeholder='Your name' className='border border-warning col-md-12 col-12 border-2 trouble'/> 
          </div>
          <div className='col-12 col-md-6 text-end'>
           <input type="email" name='email' value={userInput.email} onChange={postUserData} placeholder='Email'  className='border border-warning border-2 col-md-12 col-12 trouble'/> <br />
          </div>
        </div>
        <input type="text" name='phone' inputMode='Numeric' value={userInput.phone} onChange={postUserData} placeholder='Phone number' className='col-12 border border-warning border-2'/> <br />
        <textarea name="message" value={userInput.message} onChange={postUserData} id="" cols="" rows="2" placeholder='Message' className='border border-warning border-2 col-12'></textarea>
        <div className='col-12 col-md-10 m-auto text-center my-4'>
          <button className='col-12 col-md-3  bg-dark text-white py-3' type='submit' onClick={submitData}>SEND</button>
        </div>
      </form>
    </div>

    <Footer />
    </>
  )
}

export default Contact