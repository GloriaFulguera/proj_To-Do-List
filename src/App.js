import './App.css';
import ListaTareas from './components/ListaTareas';
import logoConsultoria from './images/descarga.jpeg';


function App() {
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img src={logoConsultoria} />
      </div>
      <div className='contenedor-ppal'>
        <h1>TO DO LIST</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
