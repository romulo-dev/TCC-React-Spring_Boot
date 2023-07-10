import axios from "axios";
import { useEffect, useState } from "react";
import './AlteraDados.css'

function AlteraDados(){
  //const [user, setUser] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8080/atleta/valor/${localStorage.getItem("idSession")}`).then(response => {
        //setUser(response.data);
        setNome(response.data.nome)
        setEmail(response.data.email)
        setSenha(response.data.senha)
        setIdade(response.data.idade)
        setFuncao(response.data.funcao)

        console.log("resultado" + localStorage.getItem("idSession"));
    })
  }, [])
    const [nome, setNome] = useState(
      // user.get.nome
      );
    const [email, setEmail] = useState(
      // user.email
      );
    const [senha, setSenha] = useState(
      // user.senha
      );
    const [idade, setIdade] = useState(
      // user.idade
      );
    const [funcao, setFuncao] = useState(
      // user.funcao
      );
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
        //let response =  await axios.get(`http://localhost:8080/lider/nome/${nomeLider}`)
        axios.post(`http://localhost:8080/atleta/save`, 
        { 
          "id": localStorage.getItem("idSession"),  
          "nome": nome,
             "email": email,
             "senha": senha,
             "idade": idade,
             "funcao": funcao,
             "lider": 1,   

        }).then((res) => console.log(res.data))
        //await console.log(response.data.id);
        //await console.log(res.data);
      }


    return(
        <div className="cardad">
            <div className="titulo" style={{textAlign: 'center'}}>
                <h1 style={{color: 'white'}}>Alteração de dados do atleta</h1>
            </div>
            <form>
                <label className="nomead mt-3">Nome:</label>
                <input className="inputNomead mt-3" type="text" value={nome} required onChange={(e) => { handleNomeChange(e) }}></input>
                {/* <br />
                <br></br> */}
                <label className="emailad">Email:</label>
                
                <input className="inputEmailad" type="text" value={email} required onChange={(e) => { handleEmailChange(e) }}></input>
                <br></br>
                <label className="senhaad">senha:</label>

                <input className="inputSenhaad" type="text" value={senha} required onChange={(e) => { handlePasswordChange(e) }}></input>
                {/* <br />
                <br /> */}
                <label className="idadead mx-1">idade:</label>

                <input className="inputIdadead" type="text" value={idade} required onChange={(e) => { handleIdadeChange(e) }}></input>
                <br></br>
                <label className="funcaoad">função:</label>
                <input className="inputFuncaoad" type="text" value={funcao} required onChange={(e) => { handleFuncaoChange(e) }}></input>
                {/* <label className="liderad">Nome do líder:</label>
                <input className="inputLiderad" type="text" value={nomeLider} required onChange={(e) => { handleNomeLiderChange(e) }}></input> */}
                <br />
                <br />
                <button className="btn btn-success mb-2" onClick={save}>Salvar</button>

            </form>
        </div>
    );
}

export default AlteraDados;