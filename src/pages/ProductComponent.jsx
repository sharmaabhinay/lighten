import React from 'react';
// import '../products.css';


const ProductComponent = () => {
    let productsArray = [
        {
          img : 'https://themewagon.github.io/lighten/icon/p1.png',
          cap : 'Fast service'
        },{
          img: 'https://themewagon.github.io/lighten/icon/p2.png',
          cap: 'Secure payments'
        },{
          img: 'https://themewagon.github.io/lighten/icon/p4.png',
          cap: 'Expert team'
        },{
          img: 'https://themewagon.github.io/lighten/icon/p5.png',
          cap: 'Affordable services'
        },{
          img: 'https://themewagon.github.io/lighten/icon/p6.png',
          cap: '90 Days warranty'
        },{
          img: 'https://themewagon.github.io/lighten/icon/p1.png',
          cap: 'Award winning'
        },{
          img: 'https://themewagon.github.io/lighten/icon/p4.png',
          cap: 'Award winning'
        },{
          img: 'https://themewagon.github.io/lighten/icon/p3.png',
          cap: 'Award winning'
        }
      ];
  return (
    <>
    <div className="productListContainer py-5">
                <div className="productListParent d-flex justify-space-evenly row m-auto py-4">
                     {productsArray.map((item) => (
                        <div className='PDataContainer container text-center col-12 pt-4 mb-3 col-md-3 text-center'>
                            <img src={item.img} alt="" className='img-fluid'/>
                            <p className='fs-5'>Norton Internet Security</p>
                            <p className='fs-5 px-2 fw-bold'>$25.00</p>
                        </div>                             
                    ))}
                </div>
            </div>
    </>
  )
}

export default ProductComponent