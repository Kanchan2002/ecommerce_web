import './App.css';
import Nav from './components/Nav';
import Music from './components/Music';
import { useState } from 'react';
import Cartlist from './components/Cartlist';
import { Route, Routes} from 'react-router-dom';
import Store from './components/Store';
import About from './components/About';
import Login from './components/login/Login';
import Signup from './components/signup/signup';
import Home from './components/Home';
import { useLocation } from 'react-router-dom';
const productsArr = [

  {
  
  title: 'Album 1',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Album 2',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Album 3',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Album 4',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
]


  
function App() {
  const location = useLocation();
  const [cart,setCart] = useState([]);
  const [showcart,setshowCart] = useState(true)
  const addToCart = (data)=>{
    setCart([...cart,{...data,quantity:1}]);
    
}
const handleshow = (value)=>{
   setshowCart(value);
}
const handleCartUpdate = (updatedCart) => {
  setCart(updatedCart);
};
const isLoginPage = location.pathname === '/';
const isSignupPage = location.pathname==='/signup';
  return (
    <div className="App">
      
      {!isLoginPage && !isSignupPage && (
        <Nav count={cart.length} handleshow={handleshow} />
      )}
          <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/home' element={
                  
                    showcart? <section className='music-content'>
                      <h2>Music</h2>
                      <div className='music'>
                          {
                            productsArr.map((item)=>{
                              return <Music product={item} title={item.title} price={item.price} src={item.imageUrl} addToCart={addToCart}/>
                            })
                          }
                      </div>
                  </section>:<Cartlist cart = {cart} onCartupdate={handleCartUpdate}/>
                
              }></Route>
              <Route path='/Store' element={<Store/>}></Route>
              <Route path='/About' element={<About/>}></Route>
          </Routes>
         
        
       
     
      
    </div>
  );
}

export default App;
