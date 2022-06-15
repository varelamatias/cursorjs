import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

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
            <div  id="nS" className="">
                <h2>la cantidad es = {count}</h2>
                <Button onClick={sumar}  variant="outline-primary">+</Button>
                <Button onClick={restar} variant="outline-primary">-</Button>
                <Button onClick={fin} variant="outline-primary">Terminar</Button>
                <Button onClick={restart} variant="outline-primary">Restart</Button>
            </div>
        </section>
    )
  }
  

export default ItemCount


