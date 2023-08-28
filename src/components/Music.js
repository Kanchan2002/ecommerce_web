import React from 'react'
import './Music.css'
function Music(props) {
  return (
    <>
       <section className='music'>
            <div>
                <h3>{props.title}</h3>
                <img src={props.src} alt="" />
                <div className='description'>
                   <p>{props.price}</p>
                   <button onClick={()=> props.addToCart(props.product)}>ADD TO CART</button>
                </div>
                
            </div>
       </section>
    </>
  )
}

export default Music