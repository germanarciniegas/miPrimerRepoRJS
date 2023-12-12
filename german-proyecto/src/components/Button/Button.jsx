
const Button = (props) => {

    return (
        <div className="main-title">
            <button onClick={()=> props.miCallback()}>Cambio Artista</button>
        </div>
    );
}

export default Button;
