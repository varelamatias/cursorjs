// import './App.css';
// import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CartContextProvider } from './components/Context/CartContext';
// import { CartContext, CartContextProvider } from './context/cartContext';



function App() {
  // const onAdd = (cant) =>{
  //   console.log(cant);
  // }


  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route index path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/item/:id'element={<ItemDetailContainer/>}/>
            <Route path='/cart'element={<Cart/>}/>
            <Route path='*' element={<Navigate to={'/'}/>}/>
          </Routes>
          {/* <ItemCount stock= {5} init= {1} onAdd = {onAdd}/> */}
        </BrowserRouter>
        </CartContextProvider>
      </>
  );
}

export default App;
