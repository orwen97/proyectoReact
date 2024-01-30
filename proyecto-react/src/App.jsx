import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Logo from './Components/Logo/Logo';
import CartWidget from './Components/cartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

  return (
      <div className='App'>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenido/a nuestra tienda online'}/>
      </div>

  )
}

export default App
