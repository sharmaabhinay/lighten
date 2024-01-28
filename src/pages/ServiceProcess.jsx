import React from 'react';
import './serviceProcess.css'

const ServiceProcess = () => {
  let arrayServiceProcess = [
    {
      img : 'https://themewagon.github.io/lighten/icon/service1.png',
      cap : 'Fast service'
    },{
      img: 'https://themewagon.github.io/lighten/icon/service2.png',
      cap: 'Secure payments'
    },{
      img: 'https://themewagon.github.io/lighten/icon/service3.png',
      cap: 'Expert team'
    },{
      img: 'https://themewagon.github.io/lighten/icon/service4.png',
      cap: 'Affordable services'
    },{
      img: 'https://themewagon.github.io/lighten/icon/service5.png',
      cap: '90 Days warranty'
    },{
      img: 'https://themewagon.github.io/lighten/icon/service6.png',
      cap: 'Award winning'
    }
  ];
  return (
    <>
    <div className="sp-container py-5">
        <div className="sp-parent col-12 m-auto">
            <div className="sp-heading text-center">
                 <h1 className='fs-1 fs-md-2'><span className='text-warning'> SERVICE </span> PROCESS</h1>
                 <p className='fs-2'>Easy and effective way to get your device repair</p>
            </div>
            <div className="spContent-container d-flex justify-content-between align-items-center row p-1 p-md-5">
            {arrayServiceProcess.map((item) => (
                <div className='spDataContainer container text-center col col-md-4 px-3 text-center mb-4'>
                <img src={item.img} alt="" className='img-fluid'/>
                <p className='fs-2'>{item.cap}</p>
                <p className='fs-6 px-2'>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>                             
            ))}
            </div>
              <div className="ourProducts-Container">
                <div className="OP-Parent py-2 p-md-3 ps-md-5">
                  <h1 className=''><span className='our text-warning'>OUR </span>PRODUCTS</h1>
                  <p className='fs-4'>We package the products with best services to make you a happy customer.</p>
                </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default ServiceProcess