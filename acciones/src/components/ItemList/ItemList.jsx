import { useEffect, useState } from "react"
import { getFetch } from "../Item/Item"



const ItemList = () => {
    const [inventarioAcciones, setInventarioAcciones] = useState([])
    useEffect(() => {
        getFetch()
            .then((resp) => {
                setInventarioAcciones(resp);
            })
            .catch(error => console.log(error))
            .finally(() => console.log())
    }, [])

    return (
        <div>
            {inventarioAcciones.map(acc => <li key={acc.id}>{acc.nombre} $ {acc.precio}</li>)}
        </div>
    )
}

export default ItemList