import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='mx-auto md:w-5/6 '>
            <Carousel/>
        </div>
    </>
  )
}

export default Home