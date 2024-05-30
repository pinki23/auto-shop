import React from 'react'
import {Link} from 'react-router-dom';
import { MdLocalShipping } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import './nav.css'

const Nav = ({search, setSearch, searchproduct}) => {
  return (
    <>
    <div className='header'>
        <div className='top_header'>
            <div className='icon'>
                <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Бесплатная доставка от 5000 руб.</p>
            </div>
        </div>
        <div className='mid_header'>
            <div className='logo'>
                <img src='image/logo.webp' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Поиск' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={searchproduct}><FaSearch /></button>
            </div>
            <div className='nav'>
                <ul>
                    <li><Link to='/' className='link'>На главную</Link></li>
                    <li><Link to='/shop' className='link'>В каталог</Link></li>
                    <li><Link to='/cart' className='link'>Корзина</Link></li>
                    <li><Link to='/contact' className='link'>Наши контакты</Link></li>
                    <li><Link to='/login' className='link'>Войти в аккаунт</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav