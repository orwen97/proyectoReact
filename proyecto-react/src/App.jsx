import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Logo from './Components/Logo/Logo';
import CartWidget from './Components/cartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCounter from './Components/ItemCounter/ItemCounter';

function App() {

  return (
      <div className='App'>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenido/a nuestra tienda online'}/>
        <ItemCounter/>
      </div>

  )
}

export default App
