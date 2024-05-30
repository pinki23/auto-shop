import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { ImCross } from "react-icons/im";

const Cart = ({cart, setCart}) => {
  const incqty = (product) =>
    {
      const exist = cart.find((x) => 
      {
        return x.id === product.id
      })
      setCart(cart.map((curElm) => 
      {
        return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
      }))
    }

    const decqty = (product) =>
      {
        const exist = cart.find((x) => 
        {
          return x.id === product.id
        })
        setCart(cart.map((curElm) => 
        {
          return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
        }))
      }

    const removeproudct = (product) => 
      {
        const exist = cart.find((x) => 
        {
          return x.id === product.id
        })
        if (exist.qty > 0)
          {
            setCart(cart.filter((curElm) =>
            {
              return curElm.id !== product.id
            }))
          }
      }

    const total = cart.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
    <div className='cart'>
      <h3>Ваша корзина</h3>
      {
        cart.length === 0 && 
        <>
        <div className='empty_cart'>
          <h2>Ваша корзина пуста</h2>
          <Link to='/shop'><button>В каталог</button></Link>
        </div>
        </>
      }
      <div className='container'>
        {
          cart.map((curElm) =>
          {
            return(
              <>
              <div className='box'>
                <div className='img_box'>
                  <img src={curElm.image} alt=''></img>
                </div>
                <div className='detail'>
                  <div className='info'>
                  <h4>{curElm.cat}</h4>
                  <h3>{curElm.Name}</h3>
                  <p>Цена за штуку: {curElm.price} руб</p>
                  <p>Полная стоимость: {curElm.price * curElm.qty} руб</p>
                  </div>
                  <div className='quantity'>
                    <button onClick={() => incqty (curElm)}>+</button>
                    <input type='number' value={curElm.qty}></input>
                    <button onClick={() => decqty (curElm)}>-</button>
                  </div>
                  <div className='icon'>
                    <li onClick={() => removeproudct(curElm)}><ImCross /></li>
                  </div>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
      <div className='bottom'>
        {
          cart.length > 0 &&
          <>
          <div className='Total'>
            <h4>Общая стоимость: {total} руб</h4>
          </div>
          <button>Оплатить</button>
          </>
        }
      </div>
    </div>
    </>
  )
}

export default Cart