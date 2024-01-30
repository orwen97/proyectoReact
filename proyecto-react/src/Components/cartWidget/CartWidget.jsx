import React from 'react'

import { BsCart4 } from "react-icons/bs";
import './CartWidget.css';


const CartWidget = () => {
  return (
    <div className='container'>
      <button className='buttonCart'> 
      <BsCart4 />
      </button>
    </div>
  )
}

export default CartWidget;
