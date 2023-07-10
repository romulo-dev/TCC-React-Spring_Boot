import axios from "axios";
import { useEffect, useState } from "react";
import './CadastroAtleta.css'
import { Navigate, useNavigate } from "react-router-dom";

function CadastroAtleta(){
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [idade, setIdade] = useState();
    const [funcao, setFuncao] = useState();

    const [lista_lider, setLista_lider] = useState([]);
    const [selectedLider, setSelectedLider] = useState();

    const [lista_equipe, setLista_equipe] = useState([]);
    const [selectedEquipe, setSelectedEquipe] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/lider/busca-todos").then(response => {
            setLista_lider(response.data);
            console.log(response.data);
        })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/equipe/lista-equipes/${selectedLider}`).then(response => {
            setLista_equipe(response.data);
        })
    }, [selectedLider])


    const navigate = useNavigate();


    const handleNomeChange =(e)=>{
        setNome(e.target.value);
      }
      const handleEmailChange =(e)=>{
        setEmail(e.target.value);
      } 
    const handlePasswordChange =(e)=>{
        setSenha(e.target.value);
      }
      const handleIdadeChange =(e)=>{
        setIdade(e.target.value);
      }  
      const handleFuncaoChange =(e)=>{
        setFuncao(e.target.value);
      }

    const [nomeLider, setNomeLider] = useState();
    const handleNomeLiderChange =(e)=>{
        setNomeLider(e.target.value);
      }
     function save(){
        axios.post(`http://localhost:8080/atleta/save`, 
        { 
            "nome": nome,
             "email": email,
             "senha": senha,
             "idade": idade,
             "funcao": funcao,
             "id_equipe": selectedEquipe,   

        }).then(navigate("/"))
        
      }


    return(
        <div className="card">
            <div className="titulo">
                <h1>Cadastro do atleta</h1>
            </div>
            <form>
                <br />
                <label className="nome">Nome:</label>
                <input className="inputNome" type="text" value={nome} required onChange={(e) => { handleNomeChange(e) }}></input>
              
                <label className="email">Email:</label>
                <input className="inputEmail" type="text" value={email} required onChange={(e) => { handleEmailChange(e) }}></input>
                <br />
                
                <label className="senha">senha:</label>
                <input className="inputSenha" type="text" value={senha} required onChange={(e) => { handlePasswordChange(e) }}></input>
                <label className="funcao">função:</label>
                <input className="inputFuncao" type="text" value={funcao} required onChange={(e) => { handleFuncaoChange(e) }}></input>
                
                <label className="idade">idade:</label>
                <input className="inputIdade" type="text" value={idade} required onChange={(e) => { handleIdadeChange(e) }}></input>
                
               
                <br />
                <br />
                <label className="mr-1">Líder</label>
                <select name="líderes"
                  
                  value={selectedLider} 
                  onChange={e => setSelectedLider(e.target.value)}
                
                > 
                  <option>Escolha uma opção</option>
                  {lista_lider.map(lider => (
                    <option key={lider.id} value={lider.id}>{lider.nome}</option>
                  
                  ))}
                </select>
                <label className="ml-2 mr-1">equipes</label>
                <select 
                  value={selectedEquipe} 
                  onChange={e => setSelectedEquipe(e.target.value)}
                >
                  {lista_equipe.map(equipe => (
                    <option value={equipe.id}>{equipe.nome}</option>
                  ))}
                </select>
                <br />
                <br />
                <button className="btn btn-success" onClick={save}>Salvar</button>

            </form>
        </div>
    );
}

export default CadastroAtleta;