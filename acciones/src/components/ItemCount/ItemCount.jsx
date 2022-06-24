import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
// import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function ItemCount ({stock, init, onAdd}) {

    const [ count, setCount] = useState(init)

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

    // function restart (){
    //     setCount(init)
    // }
    
    // function fin() {
    //     console.log(count);
    // }

    // const onAdd = (cant) =>{
  //   console.log(cant);
  // }

    const agregarC = ()=>{
        onAdd(count)
        console.log(count);
    }

    return (
        <Container>
            <div  id="nS" className="">
                <h2>Acciones por comprar = {count}</h2>
                <Button onClick={sumar}  variant="success">+</Button>
                <Button onClick={restar} variant="danger">-</Button>
                {/* <Link to= '/cart'> */}
                <Button onClick={agregarC}  variant="primary" >Agregar</Button>
                {/* </Link> */}
                {/* <Button onClick={restart} variant="outline-primary">Restart</Button> */}
            </div>
        </Container>
    )
  }
  

export default ItemCount


