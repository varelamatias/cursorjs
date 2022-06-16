import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getFetch } from "../Item/Item"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [inventarioAcciones, setInventarioAcciones] = useState([])  
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            getFetch()
            .then((resp) => {
                setInventarioAcciones(resp.filter(inventarioAcciones =>inventarioAcciones.id === id));
            })
            .catch(error => console.log(error))
            
            
        } else {
            getFetch()
            .then((resp) => {
                setInventarioAcciones(resp);
            })
            .catch(error => console.log(error))
        }
      
    }, [])
    return(
        <>
            <ItemDetail inventarioAcciones = {inventarioAcciones}/>
        </>
    )
}

export default ItemDetailContainer