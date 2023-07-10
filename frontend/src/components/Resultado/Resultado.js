import { useState, useEffect } from 'react';
import Chart from '../Janela/Janela';
import axios from "axios";
import "./Resultado.css"

import Janela2 from "../Janela2/Janela2";

import JanelaTeste from "../JanelaTeste/JanelaTeste"

function Resultado({dados}){
    // axios.get(`http://localhost:8080/resultado/atleta/${localStorage.getItem("idSession")}`).then((response) => {
    //       setResultado(response.data);
    //       console.log(response.data);
    //       console.log("funcionou até aqui");
    //     });
    const [resultado, setResultado] = useState(dados);
    // const [ativo, setAtivo] = useState(false);
    console.log(localStorage.getItem("idSession"));
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/resultado/atleta/${localStorage.getItem("idSession")}`).then((response) => {  
    //     setResultado(response.data);
    //       console.log(response.data);
    //       console.log("Executou")
    //     });
    //   }, [ativo]);



    
        // axios.get(`http://localhost:8080/resultado/atleta/${localStorage.getItem("idSession")}`).then((response) => {
        //   setResultado(response.data);
        //   console.log(response.data);
        //   console.log("funcionou até aqui");
        // });
    
        
      var temResultado = false;
      const data = resultado;
      if(data !== null){
        temResultado = true;
      }

    return(
        <div className="container-resultado">
            {temResultado ?
            <div className='janela'>
                <JanelaTeste data={data}/>
            </div>
            : <h1 style={{color: "black",marginLeft: "auto", marginRight: "auto"}}>Não têm resultados</h1>
            }
        </div>
    );

}

export default Resultado;