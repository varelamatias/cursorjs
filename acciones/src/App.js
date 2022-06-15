// import './App.css';
// import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index path='/' element={<ItemListContainer/>}/>
        <Route path='/detalle'element={<ItemDetailContainer/>}/>
        <Route path='/cart'element={<Cart/>}/>
      </Routes>
      <ItemCount stock= {5} init= {1}/>
    </BrowserRouter>
    </>
  );
}

export default App;
