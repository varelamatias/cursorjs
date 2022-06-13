import { useState, useEffect } from "react"
import { getFetchOne } from "../Item/Item"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [inventarioAccion, setInventarioAccion] = useState({})
    useEffect(() => {
        getFetchOne()
        .then((respuesta) => setInventarioAccion(respuesta))
        .catch(error => console.log(error))
     
    }, [])
        
    return<ItemDetail inventarioAccion = {inventarioAccion}/>
}


export default ItemDetailContainer