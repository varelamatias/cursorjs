import {  useCartContext } from "../Context/CartContext"


const Cart = () => {

  const {cart} = useCartContext()
  return(
    <div>
        {cart.map((item)=> (<p key={item.producto.id}>{item.producto.nombre}</p>))}
    </div>
  )}

export default Cart
