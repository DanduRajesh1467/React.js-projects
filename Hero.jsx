import React from 'react'
import swiggy from "../images/swiggy.webp";
import zomato from "../images/zomato.webp";
import kfc from "../images/kfc_png.webp";

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left'>
            <span className='title'>TASTE THE BEST KFC CHICKEN</span>
            <p>KFC (Kentucky Fried Chicken) is a popular fast-food restaurant chain known for its delicious fried chicken. It was founded by Colonel Harland Sanders in 1952 and has thousands of restaurants around the world. KFC is famous for its secret recipe of 11 herbs and spices, which gives its chicken a unique taste. In addition to fried chicken, KFC serves burgers, wraps, fries, and beverages. It is one of the most successful and well-known fast-food brands globally.</p>
            <div className='btns'> 
                <button className='btn1'>ORDER NOW</button>
                <button className='btn2'>KFC CHICKEN</button>
            </div>
            <div className='socilal'>
                <span className='social-1'>Also Available On</span>
                <div className='social-icons'>
                    <img src={swiggy} alt='' />
                    <img src={zomato} alt='' />
                </div>
            </div>
        </div>
        <div className='right'>
            <img src={kfc} alt='' />
        </div>
    </div>
  )
}

export default Hero