import { useEffect, useState } from "react";
import "./Equipe.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Equipe(){
const [lista_equipes, setLista_equipes] = useState([])

const navigate = useNavigate();
var temEquipes = false;

    useEffect(() =>{
        axios.get(`http://localhost:8080/equipe/lista-equipes/${localStorage.getItem("idSession")}`).then((response) => {
            setLista_equipes(response.data);
        })
    }, [])

    function excluir(id){
        axios.delete(`http://localhost:8080/equipe/delete/${id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            alert(res.data);
            window.location.reload(true);
          })
      }

    if(lista_equipes.length !== 0){
        temEquipes = true;
    }

    return(
        <div>
            
            {temEquipes ?  
            lista_equipes.map(equipe => (
                        <ul className="lista_equipes" key={equipe.id}>
                            <li><div className="container_equipe">
                                    <div className="info_equipe">
                                        <div>
                                            <label>Nome da equipe: </label>
                                            <span>{equipe.nome}</span>
                                            <br></br>
                                            <br></br>
                                            <label>Categoria da equipe: </label>
                                            <span>{equipe.categoria}</span>
                                        </div>
                                            
                                    </div>
                                    <div className="equipe_acoes">
                                        <button className="ver_equipe btn btn-success" onClick={
                                        () => {
                                            navigate(`/time/${equipe.id}`)
                                        }
                                        }>Ver equipe</button>
                                        <button className="btn btn-danger ml-2" onClick={() => excluir(equipe.id)}>Excluir</button>
                                    </div>
                            </div></li>
                        </ul>
                    ))
                : <h1 style={{color: 'black'}}>Não há equipes</h1>
                }
        </div>
        
        
    );
}

export default Equipe;