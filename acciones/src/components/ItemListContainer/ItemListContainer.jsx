import React from 'react'
import Greeting from '../Greeting/Greeting'
import ItemCount from '../ItemCount/ItemCount'


function ItemListContainer () {
  return (
    <div>
        <Greeting hola={"HOLA"}/>
        <ItemCount stock= {5} init={1}/>
    </div>
  )
}

export default ItemListContainer