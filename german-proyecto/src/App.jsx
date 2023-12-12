import './App.css';
import React from 'react';

function Padre() {
  const[frutas, setFrutas] = React.useState(['manzana','banana']);
  
  const agragarPera = (ref) => {
    console.log(ref.current.value);
    setFrutas((frutasAnteriores) => [...frutasAnteriores,ref.current.value])
  };

  return (
    <div className="App">
      <Hijo agragado={agragarPera} mercado={frutas}/>
    </div>
  );
}

export default Padre;

function Hijo(props) {
  const myRef = React.useRef(null);
  return (
    <div>
      <h1>Mi Primer Proyecto Publico</h1>
      <input ref={myRef}/>
      {props.mercado.map((fruta)=><h2>{fruta}</h2>)}
      {/* <Button miCallback={() => miCallback()}/> */}
      <button onClick={()=>props.agragado(myRef)}>Agregar Fruta</button>
    </div>
  );
}
