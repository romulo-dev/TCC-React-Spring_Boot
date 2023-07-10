import api from "../../services/api";
import {Fragment, useEffect, useState} from 'react'
import axios from "axios";
import './Tabela.css'
import { useNavigate, useParams } from "react-router-dom";

function Tabela(){
   const [atletas, setAtletas] = useState([]);

  //  const navigate = useNavigate;

  // const execute  = () => {
  //   api.get("/atleta/list").then((response) => setAtletas(response.data)).catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }

  // useEffect(() => {
  //   execute()
  // }
  // , [atletas])

  // function janela(){
  //   var newWindow = window.open ('', 'pagina', "width=500px height=500px");
  //   newWindow.document.write ("<h1> Este é um novo popup <h1/>");
    
  // }

  const { id } = useParams();
  const navigate = useNavigate();
  var temAtleta = false;

  useEffect(() => {
      
      axios.get(`http://localhost:8080/atleta/lista-atletas/${id}`).then(response => {
        setAtletas(response.data);
        
      })
  },[id])

  if(atletas.length !== 0){
          temAtleta = true;
  }

  function excluir(id){
    axios.delete(`http://localhost:8080/atleta/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert(res.data);
        window.location.reload(false);
      })
  }
  
    return(
        <Fragment>
        {temAtleta ? 
        <table className="table" >

            <thead>
                <tr>
                    
                   <th>nome</th>
                    <th>função</th>
                    <th>idade</th>
                    <th>
                      opções
                    </th> 
                </tr>
                
            </thead>
            
            <tbody>

                {atletas.map(atleta => (
                    <tr key={atleta.id}>
                        <td>{atleta.nome}</td>
                        <td>{atleta.funcao}</td>
                        <td>{atleta.idade}</td>
                        {/* {url = "/info-atleta"} */}
                        <td>
                          <button className="excluir" onClick={() => excluir(atleta.id)}>excluir</button>
                          {/* <button className="visualiza" onClick="/info-atleta" >visualizar</button> */}
                          <button className="visualiza"  onClick={
                            () => {
                              navigate(`/info-atleta/${atleta.id}`)
                            }
                          }>visualizar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        :<h1 style={{color: "black"}}>Não há atletas cadastrados</h1>
        }
      </Fragment>  
    );
}

export default Tabela;