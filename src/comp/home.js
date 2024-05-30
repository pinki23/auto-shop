import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='home'>
    <Link to={'/shop'} className='link_home'>Перейти в магазин</Link>
    </div>
    </>
  )
}

export default Home