import React from 'react'
import "./App.css";
import Child from './components/Child';
import pizza from "./assets/pizza.jpeg";
import biryani from "./assets/biryani.jpg";
import coke from "./assets/coke.jpeg";

const App = () => {
  const title1 ="Pizza";
  const price1 = 300;
  const title2 ="Biryani";
  const price2 = 349;
  const title3 ="Coke";
  const price3 = 99;
  
  return (
    <div>
      <Child 
      pizza={pizza} biryani ={biryani} coke ={coke} t1 ={title1} t2 ={title2} t3={title3} p1 ={price1} p2 ={price2} p3 ={price3}
      />
    </div>
  )
}

export default App