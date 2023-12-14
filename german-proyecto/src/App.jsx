import './App.css';
import React from 'react';

function Padre() {
  const[digimones, setDigimons] = React.useState([]);
  
  React.useEffect(()=> {
      fetch('https://digimon-api.vercel.app/api/digimon')
      .then((response) => response.json())
      .then((dataDigimon)=> {
        setDigimons(dataDigimon)
      })
  },[])

  console.log(digimones)


  // React.useEffect(()=> {
  //   //en cada render
  // })

  // React.useEffect(()=> {
  //   //componentDidMount => 1
  //   const display = document.getElementById('');
  //   ///fetch API de google USUARIO
  // },[])

  // React.useEffect(()=> {
  //   //componentDidUpdate => infinitas

  // },[frutas, props.german])

  // React.useEffect(()=> {
  //   //componentWillUnmount() => 1
  //   const evenetListener = 
  //   document.getElementById('body').addEventListener('scroll',()=>{
  //     //mostrar algo importante
  //   });

  //   return () => document.getElementById('body').removeEventListener(evenetListener)
  // },[])
  

  return (
    <div className="App">
      {digimones.map((digimon)=>{
          return <DigimonCard name={digimon.name} img={digimon.img} level={digimon.level}/>
        })
      }
    </div>
  );
}

export default Padre;

const DigimonCard = (props) => {

  return (
    <div className='container-card'>
     <div className='title'>
      <h1>{props.name}</h1>
     </div>
     <div className='imagen'>
        <img src={props.img} alt=""/>
     </div>
     <div className='level'>
      <p>{props.level}</p>
     </div>
    </div>
  );
}

// class MyComponent extent React {
//   constructor(){

//   }
//   componentDidMount() {
//     //
//   }
//   componentDidUpdate() {
//     //
//   }
//   componentWillUnmount() {
//     //
//   }
//   render(
//     <div></div>
//   )
// } 
