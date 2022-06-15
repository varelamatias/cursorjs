import { useEffect, useState } from "react"
import { getFetch } from "../Item/Item"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const ItemList = () => {
//     const [inventarioAcciones, setInventarioAcciones] = useState([])
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         getFetch()
//             .then((resp) => {
//                 setInventarioAcciones(resp);
//             })
//             .catch(error => console.log(error))
//             .finally(() => setLoading(false))
//     }, [])

//     return (
//         <div className="secA">
//             {
//                 loading ? <h1>Loading...</h1> :
//                     <div className="container" id="accionesC">
//                         <div className="row">
//                             {inventarioAcciones.map(acc =>

//                                 <div className="col-12 mb-2 col-md-4" key={acc.id}>
//                                     {/* <div className="card">

//                                         <div className="card-body" >
//                                             <h5>{acc.nombre}</h5>
//                                             <p>${acc.precio}</p>
//                                             <button className="btn btn-dark" id={acc.id}>agregar</button>
//                                         </div>
//                                     </div> */}
//                                 </div>

//                             )}
//                         </div>
//                     </div>}
//         </div>

//     )
// }


// export default ItemList

function ItemList() {
    const [inventarioAcciones, setInventarioAcciones] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch()
            .then((resp) => {
                setInventarioAcciones(resp);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className="secA">
            {
                loading ? <h1>Loading...</h1> :
                    <div className="container" id="accionesC">
                        <div className="row">
                        {inventarioAcciones.map(acc =>
                            <div className="col-12 mb-2 col-md-4" key={acc.id}>
                                 {   
                                <Card style={{ width: '18rem' }}>

                                    <Card.Img variant="top" src={acc.img} />
                                    <Card.Body>
                                        <Card.Title>{acc.nombre}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">${acc.precio}</Card.Subtitle>
                                        <Button className="btn btn-dark" variant="primary" id={acc.id}>Comprar</Button>
                                    </Card.Body>
                                </Card>}
                            </div>
                            )}
                        </div>
                    </div>
            }
        </div>


    );
}

export default ItemList







