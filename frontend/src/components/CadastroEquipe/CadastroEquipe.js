import api from "../../services/api";
import {useState, useEffect, Fragment} from 'react'
import './CadastroEquipe.css'


function CadastroEquipe(){

      const [post, setPost] = useState("");

    const [nome_equipe , setNome_equipe] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleNomeEquipeChange =(e)=>{
        setNome_equipe(e.target.value);
      }
      const handleCategoriaChange =(e)=>{
        setCategoria(e.target.value);
      }  

    function salvar(){
        api.post(`http://localhost:8080/equipe/save`, {
        "nome": nome_equipe,
        "categoria": categoria,
        "id_lider": localStorage.getItem("idSession")
      }).then((response) => {
        console.log("Deu certo");
        console.log(response.data);
      })
    }   

    return(
      <Fragment>


       <div className="box_cadastro"> 
          <div className="orange">
           
              <h2 style={{color: 'white'}}>Cadastro de equipe</h2>
            
          </div>
          <div className="form">
            <form>
              <label style={{color: 'white'}}>Nome da equipe:</label>
              <input type="text" value={nome_equipe} required onChange={(e) => { handleNomeEquipeChange(e) }}></input>
              <br />
              <label style={{color: 'white'}}>Categoria:</label>
              <input type="text" value={categoria} required onChange={(e) => { handleCategoriaChange(e) }}></input>
              <br />
              <button onClick={salvar} className="btn btn-success mb-2">Salvar</button>
            </form>
          </div>
        </div>
        </Fragment>
    );
}

export default CadastroEquipe;