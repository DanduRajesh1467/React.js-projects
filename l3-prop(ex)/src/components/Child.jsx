import React from 'react'
import "./Child.css";

const Child = (props) => {
  return (
    <div className='main'>
        <div className='item1'>
            <img src={props.pizza} alt=''/>
            <h3>{props.t1}</h3>
            <p>{props.p1}/-</p>
            <button>Order Now</button>
        </div>
        <div className='item2'>
            <img src={props.biryani} alt=''/>
            <h3>{props.t2}</h3>
            <p>{props.p2}/-</p>
            <button>Order Now</button>
        </div>
        <div className='item3'>
            <img src={props.coke} alt=''/>
            <h3>{props.t3}</h3>
            <p>{props.p3}/-</p>
            <button>Order Now</button>
        </div>
    </div>
  )
}

export default Child