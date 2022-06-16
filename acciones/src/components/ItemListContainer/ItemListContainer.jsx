import React from 'react'
import Greeting from '../Greeting/Greeting'
// import ItemCount from '../ItemCount/ItemCount'
// import ItemDetail from '../ItemDetail/ItemDetail'
import ItemList from '../ItemList/ItemList'


function ItemListContainer () {
  return (
    <div>
        <Greeting hola={"FinanSolution"}/>
        {/* <ItemCount stock= {5} init={1}/> */}
        <ItemList/>
    </div>
  )
}

export default ItemListContainer