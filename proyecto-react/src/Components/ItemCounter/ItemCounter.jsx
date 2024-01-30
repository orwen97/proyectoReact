import React from 'react'
import { useState } from 'react'
import "./ItemCounter.css"

const ItemCounter = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div className='containerCounter'>
            <h1>Camisa Tiger</h1>
            <div className='counterItem'>
                <button onClick = {() => setCounter(counter - 1)}>-</button>
                <h1>{counter}</h1>
                <button onClick = {() => setCounter(counter + 1)}>+</button>
            </div>
                <button className='addCart'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter
