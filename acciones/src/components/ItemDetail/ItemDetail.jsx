import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const ItemDetail = ({ inventarioAcciones }) => {
    return (
        <div className="secA">
            {
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
                                            <Link to = '/'>
                                                <Button className="btn btn-dark" variant="primary" id={acc.id}>Regresar</Button>
                                            </Link>
                                            <Button className="btn btn-dark" variant="primary" id={acc.id}>Comprar</Button>
                                        </Card.Body>
                                    </Card>}
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>

    )

}
export default ItemDetail
