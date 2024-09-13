import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
    <body className='bg-dark'>
      <NavBar />
      <ItemListContainer greeting="Esto es un Brete"/>
    </body>
    </> 
)
}

export default App
