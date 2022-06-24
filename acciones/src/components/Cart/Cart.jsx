import {  useCartContext } from "../Context/CartContext"


const Cart = () => {

  const {cart} = useCartContext()
  return(
    <div>
        {cart.map(item=> <p key={item.id}></p>)}
    </div>
  )

}

export default Cart