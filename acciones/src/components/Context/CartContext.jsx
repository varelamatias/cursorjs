import { useState } from "react";
import { createContext, useContext } from "react";


export const CartContext = createContext([])
export const useCartContext = ()=> useContext(CartContext)



export const CartContextProvider = ({children})=>{
    
    const [cart,setCart]=useState ([])

    const addToCart = (item)=>{
        setCart([...cart,item])
    }

    return(
        <CartContext.Provider value={{cart,addToCart}}>

            {children}

        </CartContext.Provider>
    )



}























// export const CartContextProvider = ({children}) =>{
//     const [cart, setCart] = useState([])
//     const addToCart = (acc,count) =>{
//         if (IsInCart(acc.id)){
//             alert('elproductoesta')
//         }else{
//             setCart([...cart, {acc, count}])
//             alert('seagregoprod')
//         }
//     }

//     const IsInCart = (id) =>{
//         return cart && cart.some((i)=>i.acc.id===id)

//     }


//     return(
//         <CartContext.Provider value={{addToCart}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

