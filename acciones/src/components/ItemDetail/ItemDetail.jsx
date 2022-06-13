
const ItemDetail = (acc) =>{
    return (
        <div className="container">
            <div className="row">    
                <div className="col-md-6">  
                    <h3>{acc.id}</h3>
                    <h4>{acc.nombre}</h4>
                    <h5>{acc.precio}</h5>
                </div>            
            </div>
      </div>
    )

}

export default ItemDetail