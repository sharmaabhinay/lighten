import React from 'react'

const BlogContent = () => {
    let arrayimg = [
        {
          img : 'https://themewagon.github.io/lighten/images/1.jpg',
          cap : 'Live with Music'
        },{
          img: 'https://themewagon.github.io/lighten/images/2.jpg',
          cap: 'Best Music'
        },{
          img: 'https://themewagon.github.io/lighten/images/3.jpg',
          cap: 'Feel Music'
        }
      ];
  return (
    <>
    <div className="col-12 col-md-9 m-auto shadowMic">
                <div className='d-block my-4 d-md-flex justify-content-between cardContainer'>
                    
                    {arrayimg.map((item) => (
                        <div className='col-12 card'>
                            <img src={item.img} alt="" className=''/>
                            <div className='p-3 col-11 lh-3'>
                                <h3>{item.cap}</h3>
                                <pre className='fs-6 text-danger fw-400'>March   20Comment</pre>
                                <p className='fs-6 fw-light'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>

                            </div>
                        </div>                         
                    ))}
                        {/* <img src={arrayimg.img} alt="" />
                        <div className='p-2'>
                            

                        </div> */}
                    
                </div>
            </div>
    </>
  )
}

export default BlogContent