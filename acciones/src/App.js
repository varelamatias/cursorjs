// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './style/style.css'
import ItemList from './components/ItemList/ItemList';



function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemList/>
    </>
  );
}

export default App;
