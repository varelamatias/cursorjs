import React, { useState } from 'react'

function ItemCount ({stock,init}) {

    const [ count, setCount] = useState(stock)

    function sumar() {
        if (count < stock) {
            setCount (count+1)
        }
    }

    function restar() {
        if (count > 0 ){
            setCount(count - 1)
        }
    }

    function restart (){
        setCount(init)
    }
    
    function fin() {
        console.log(count);
    }

    return (
        <section >
            <div  id="nS" className="secA1">
                <h2>la cantidad es = {count}</h2>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={fin}>comprar</button>
                <button onClick={restart}>restart</button>
            </div>
        </section>
    )
  }
  

export default ItemCount


