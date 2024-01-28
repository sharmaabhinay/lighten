import React from 'react'
import Footer from '../Footer'
import ServiceProcess from '../ServiceProcess'
import '../services.css';
import Services from '../Services';
import Yellowbg from './Yellowbg';


const About = () => {
  let Aname = "ABOUT US"
  return (
    <>
    <Yellowbg data={Aname}/>
    <div className='d-block d-md-flex col-12 col-md-10 m-auto justify-content-between my-5 py-5'>
        <div>
            <img src="https://themewagon.github.io/lighten/images/pc_layout.png" alt="" width="550" className='img-fluid p-4'/>
        </div>
        <div className='col-md-6 aPContainer p-4'>
            <h1>Who is Lighten</h1>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    </div>
    <Services />
    <ServiceProcess />
    <Footer />
    </>
  )
}

export default About