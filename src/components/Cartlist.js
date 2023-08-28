import React, {useState, useEffect } from 'react'
import './Cartlist.css'
function Cartlist({cart,onCartupdate}) {
    const [CART,setCart] = useState([]);
    useEffect(()=>{
        setCart(cart);
    },[cart]);
  return (
    <div className='container'>
       <div className='cart-list'>
        <h2>Cart</h2>
        <hr/>
        <div className='menu-bar'>
            <h2>item</h2>
            <h2>quantity</h2>
            <h2>price</h2>
        </div>
        <hr />
       {CART.map((cartitem,cartindex)=>{
          return (
             <div className='cart-item'>
                <div>
                   <img src={cartitem.imageUrl} width={60}/>
                   <p>{cartitem.title}</p>
                </div>
                <div className='btn'>
                    <button onClick={()=>{
                        const _CART = CART.map((item,index)=>{
                            return cartindex===index ? {...item,quantity:item.quantity>0 ? item.quantity-1:0}:item
                        })
                        const filteredCart = _CART.filter(item => item.quantity > 0);
                        setCart(filteredCart);
                        onCartupdate(filteredCart);
                    }} className='decrease'>-</button>
                    <p>{cartitem.quantity}</p>
                    <button onClick={()=>{
                        const _CART = CART.map((item,index)=>{
                            return cartindex===index ? {...item,quantity:item.quantity + 1}:item
                        })
                        setCart(_CART)
                        onCartupdate(_CART)
                    }} className='increase'>+</button>
                </div>
                 
                <p>{cartitem.price * cartitem.quantity}</p>
             </div>
          )
       })}
       
      </div>
       <p className='total-amount'>Total Amount : 
         <div className='amount'>
         {
            CART.map(item=>item.price*item.quantity).reduce((total,value)=> total+value,0)
         }
         </div>
         
        </p>
    </div>
    
  )
}

export default Cartlist