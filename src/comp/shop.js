import React, { useState } from 'react'
import './shop.css'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    const [showDetail, setShowDetail] = useState(false)

    const [detail, setDetail] = useState([])

    const detailpage = (product) => 
        {
            const detaildata = ([{product}])
            const productdetail = detaildata[0]['product']
            setDetail(productdetail)
            setShowDetail(true)
        }
    const closedetail = () =>
        {
            setShowDetail(false)
        }
  return (
    <>
    {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><ImCross /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4>{detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <h4>{detail.desc}</h4>
                    <h3>{detail.price} руб</h3>
                    <button onClick={() => addtocart (detail)}>Добавить в корзину</button>
                </div>
            </div>
        </div>
        </>
        : null
    }

    <div className='shop'>
        <h2>Каталог</h2>
        <p>Главная  . каталог</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>Список товаров</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={() => allcatefilter ()}>Все товары</li>
                            <li onClick={() => Filter("Инструменты")}>ИНСТРУМЕНТЫ</li>
                            <li onClick={() => Filter("Химия")}>АВТОХИМИЯ</li>
                            <li onClick={() => Filter("Электроника")}>ЭЛЕКТРОНИКА</li>
                            <li onClick={() => Filter("Аккумуляторы")}>АККУМУЛЯТОРЫ</li>
                            <li onClick={() => Filter("Моторные масла")}>МАСЛА МОТОРНЫЕ</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='product_box'>
                    <h2>Товары</h2>
                    <div className='product_container'>
                        {
                            shop.map((curElm)=>
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                                <li><FaHeart /></li>
                                                <li onClick={() => detailpage (curElm)}><FaEye /></li>
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>{curElm.price} руб</p>
                                            <button onClick={() => addtocart (curElm)}>Добавить в корзину</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop