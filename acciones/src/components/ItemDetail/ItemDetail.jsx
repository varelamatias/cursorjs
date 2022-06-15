
const ItemDetail = ({inventarioAccion}) =>{
    return (
        <div className="container">
            <div className="row">    
                <div className="col-md-6">  
                    <p>{inventarioAccion.id}</p>
                    <p>{inventarioAccion.nombre}</p>
                    <p>{inventarioAccion.precio}</p>
                </div>            
            </div>
      </div>
    )

}

export default ItemDetail