import React, { useState } from 'react'
import '../../src/App.css'
function Home(props) {
  const cardData = props.CartDataHandler
  console.log(props);
  return (
    <div>
      <div className='add-to-cart'>
        <span>{cardData.length}</span>
         <img src="data:image/png;base64,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" alt="" />
      </div>
      <h3>Home Component </h3>
      <div className='card-wrapper'>
        
        <div className='img-wrapper item'>
          <img src="https://img.etimg.com/photo/msid-101297745,imgsize-63600/OnePlus11R5G.jpg" alt="" />
        </div>
        <div className='text-wrapper item'>
         <span>
          Realme
         </span>
         <span>
          Price: Rs 13000.00
         </span>
        </div>
        <div className='btn-wrapper item'>
            <div className='btn-wrapper-box'>
            <button onClick={()=>
             props.addToCartHandler({price:13000, name:'Realme'})
              }> Add to Cart</button>

              <button onClick={()=> props.removeToCartHandler({ price: 13000, name: 'Realme' })}>Remove</button>
            </div>
        </div>
      </div>



      <div className='card-wrapper'>
        <div className='img-wrapper item'>
          <img src="https://img.etimg.com/photo/msid-101297745,imgsize-63600/OnePlus11R5G.jpg" alt="" />
        </div>
        <div className='text-wrapper item'>
         <span>
          I-Phone
         </span>
         <span>
          Price: $1000.00
         </span>
        </div>
        <div className='btn-wrapper item'>
            <div className='btn-wrapper-box'>
            <button onClick={()=>
             props.addToCartHandler({price:1000, name:'I phone'})
              }> Add to Cart</button>

              <button onClick={()=> props.removeToCartHandler({ price: 1000, name: 'I phone' })}>Remove</button>
            </div>
        </div>
      </div>




      <div className='card-wrapper'>
        
        <div className='img-wrapper item'>
          <img src="https://img.etimg.com/photo/msid-101297745,imgsize-63600/OnePlus11R5G.jpg" alt="" />
        </div>
        <div className='text-wrapper item'>
         <span>
          Vivo
         </span>
         <span>
          Price: Rs 15000.00
         </span>
        </div>
        <div className='btn-wrapper item'>
            <div className='btn-wrapper-box'>
            <button onClick={()=>
             props.addToCartHandler({price:15000, name:'Vivo'})
              }> Add to Cart</button>

              <button onClick={()=> props.removeToCartHandler({ price: 15000, name: 'Vivo' })}>Remove</button>
            </div>
        </div>
      </div>



    </div>
  )
}


export default Home;