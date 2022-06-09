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
        <div className="container">
            <div className="row" id="acceionesC">
                {inventarioAcciones.map(acc =>
                    <div className="col-12 mb-2 col-md-4" key={acc.id}>
                        <div className="card">
                        {/* <img src={acc.img} alt="" className="card-img-top"> */}
                            <div className="card-body" >
                                <h5>{acc.nombre}</h5>
                                <p>${acc.precio}</p>
                                <button className="btn btn-dark" id={acc.id}>agregar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemList