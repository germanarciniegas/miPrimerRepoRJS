import './App.css';
import React from 'react';

function Padre() {
  const[digimones, setDigimons] = React.useState([]);
  const[copyDigimones, setCopyDigimons] = React.useState([]);
  const[search, setSearch] = React.useState('');
  const inputSearch = React.useRef(null);
  
  React.useEffect(()=> {
      fetch('https://digimon-api.vercel.app/api/digimon')
      .then((response) => response.json())
      .then((dataDigimon)=> {
        setDigimons(dataDigimon)
        setCopyDigimons(dataDigimon)
      })
      ///
      if(inputSearch && inputSearch.current) {
        inputSearch.current.addEventListener('keyup',(e)=>{
          setSearch(inputSearch.current.value)
        });
      }
  },[])

  console.log(digimones, search)

  React.useEffect(()=> {
    //componentDidUpdate => infinitas
    // const newDigimones = digimones.map((digimon) => digimon.name.inludes(search))
    const newDigimones = digimones.filter((digimon) => digimon.name.toLowerCase().includes(search.toLowerCase()) || digimon.level.toLowerCase().includes(search.toLowerCase()));
    setCopyDigimons(newDigimones)
    console.log(newDigimones)
  },[search])


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
   
    <>
     <div className='search'>
        <input ref={inputSearch} type="text" placeholder='Busca tu Digimon'/>
      </div>
      <div className="App">
        {copyDigimones.map((digimon)=>{
            return <DigimonCard name={digimon.name} img={digimon.img} level={digimon.level}/>
          })
        }
      </div>
    </>
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
