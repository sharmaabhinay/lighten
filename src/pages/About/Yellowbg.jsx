import React from 'react'

const Yellowbg = (props) => {
  return (
    <>
        <div className='text-center fs-2 bg-warning p-5 aboutContainer'>
             <b className='fw-500 fs-1'>{props.data}</b>
        </div>
    </>

  )
}

export default Yellowbg