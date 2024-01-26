import React from 'react'

import { BsCart4 } from "react-icons/bs";


const CartWidget = () => {
  return (
    <div className='container'>
      <button> 
      <BsCart4 />
      </button>
    </div>
  )
}

export default CartWidget;


// chunk-MCEUSTYS.js?v=143203e3:519 Warning: <cartWidget /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
//     at cartWidget
//     at div
//     at App