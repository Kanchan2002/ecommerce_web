import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'
function Nav(props) {
  const logout = ()=>{
    signOut(auth).then(()=>{
       console.log('logout')
    })
  }
  return (
    <>
       <header>
            <ul>
                <li onClick={()=>props.handleshow(true)}><Link to='/home' style={{textDecoration:"none",color:'white'}}>HOME</Link></li>
                <li><Link to='/Store' style={{textDecoration:"none",color:'white'}}>STORE</Link></li>
                <li><Link to='/About' style={{textDecoration:"none",color:'white'}}>CONTACT-US</Link></li>
                <button onClick={logout}><Link to='/' style={{textDecoration:"none",color:'white'}}>LOGOUT</Link></button>
                <button onClick={()=> props.handleshow(false)}>Cart
                    <sup>{props.count}</sup>
                </button>
                
            </ul>
        </header>
       
    </>
  )
}

export default Nav