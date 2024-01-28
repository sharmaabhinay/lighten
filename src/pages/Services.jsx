import React from 'react';
import './services.css'

const Services = () => {
  let arrayimg = [
    {
      img : 'https://themewagon.github.io/lighten/icon/1.png',
      cap : 'Data recovery'
    },{
      img: 'https://themewagon.github.io/lighten/icon/2.png',
      cap: 'Computer repair'
    },{
      img: 'https://themewagon.github.io/lighten/icon/3.png',
      cap: 'Mobile service'
    },{
      img: 'https://themewagon.github.io/lighten/icon/4.png',
      cap: 'Network solutions'
    }
  ];
    
  return (
    <>
    <div className="S-container bg-warning text-center">
        <div className="S-parent m-auto bg-white box-shadow py-5 text-center col-10" id='dataRecovery'>
            <div className='d-flex justify-space-evenly row'>
            {arrayimg.map((item) => (
                <div className='dataContainer container text-center col col-md-3 px-3 text-center'>
                <img src={item.img} alt="" className='img-fluid'/>
                <p className='fs-2'>{item.cap}</p>
                <p className='fs-5 px-2'>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>                             
            ))}
            </div>
            <div className='readMoreContainer m-auto'>
              <button className='text-center m-auto p-2 px-5 fs-4 border border-warning bg-none readMoreContent bg-body'>Read More</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services