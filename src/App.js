import React, {useEffect, useState } from 'react'
import Nav from './comp/nav'
import Rout from './comp/rout';
import Products from './comp/products'
import { BrowserRouter } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';

const App = () => {
  const [cart, setCart] = useState([])

  const [shop, setShop] = useState(Products)

  const [search, setSearch] = useState('')

  const Filter = (x) =>
    {
      const cateFilter = Products.filter((product) =>
        {
          return product.cat === x
        })
      setShop(cateFilter)
    }

  const allcatefilter = () => 
    {
      setShop(Products)
    }

    const searchlength = (search || []).length === 0
    const searchproduct = () => 
      {

    if(searchlength)
      {
        alert("Найдите что нибудь!")
        setShop(Products)
      }
      else
      {
            const searchfilter = Products.filter((x) =>
              {
                return x.cat === search
              }
            )
            setShop(searchfilter)
      
      }
    }

    const addtocart = (product) => 
      {
        const exist = cart.find((x) => 
          {
            return x.id === product.id
          })
          if(exist)
            {
              alert("Вы уже добавили этот товар!")
            }
          else
          {
            setCart([...cart, {...product, qty:1}])
            alert("Добавлено в корзину")
          }
      }
      console.log(cart)

      const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
  
      console.log("Encoded JWT ID token" + response.credential);
      var userObject = jwtDecode(response.credential);
      console.log(userObject);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
    }
  
    function handleSignOut(event) {
      setUser({});
      document.getElementById("signInDiv").hidden = false;
    }
  
    useEffect(() => {
      window.google.accounts.id.initialize({
        client_id: "267954344652-1et6l4obv4erd3kinckbcjtcjppb9dit.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large"}
      );
  
    }, []);

  return (
    <>
      <div id='signInDiv'></div>
      <button onClick={(e) => handleSignOut(e)}>Выйти из аккаунта</button>

      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      </BrowserRouter>
    </>
  )
}


export default App
