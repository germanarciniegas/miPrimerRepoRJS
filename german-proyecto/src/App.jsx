import './App.css';
import React from 'react';
import Button from './components/Button/Button';

//Componente Padre => App
function Padre() {
  const[frutas, setFrutas] = React.useState(['manzana','banana']);
  
  const agragarPera = (nuevaFruta) => {
    console.log("Agregado");
    setFrutas((frutasAnteriores) => [...frutasAnteriores,nuevaFruta])
  };

  return (
    <div className="App">
      {// Compoenente Hijo
      }
      <Hijo agragado={agragarPera} mercado={frutas}/>
      {/* <Button miCallback={() => miCallback()}/> */}

    </div>
  );
}

export default Padre;

function Hijo(props) {
  
  return (
    <div>
      <h1>Mi Primer Proyecto Publico</h1>
      Hijo 1
      __________
      {props.mercado}
      {/* <Button miCallback={() => miCallback()}/> */}
      <button onClick={()=>props.agragado('uva')}>Agregar Pera</button>
    </div>
  );
}
