import './Titulo.css';

const Titulo = (props) => {
  return (
    <div className="main-title">
        <h1>{props.texto}</h1>
        <p>{props.autor ? "Estoy prendido" : "Estoy apagado"}</p>
        <Input valor={props.autor}/>
    </div>
  );
}

export default Titulo;

const Input = (props) => {
    return (
      <div className="main-title">
          <input value={props.valor}/>
      </div>
    );
  }
