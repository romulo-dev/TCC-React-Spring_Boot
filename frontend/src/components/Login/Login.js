import './Login.css'
import {Fragment, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(){

    localStorage.setItem("token", "false")
    const navigate = useNavigate();

    const [password , setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
      }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

     async function isUser(email){
        
        let response =  await axios.get(`http://localhost:8080/atleta/email/${email}`);
        //await setUser(response.data);
        //await console.log("user: "+ response.data)
        
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/atleta/email/${email}`).then((response) => {
          setUser(response.data);
        });
      }, [email]);




    async function entrar(){
        
        

        if ( email !== null){
            //let response = axios.get(`http://localhost:8080/atleta/email/${email}`);
            //setUser(response.data);
            //console.log("user: "+ response.data.nome)
            console.log("Foi até aqui" + user.nome)
            if(password === user.senha){
                alert("login efetuado com sucesso")
                localStorage.setItem("token", "true");
                localStorage.setItem("idSession", user.id);
                navigate("/Atleta");
            }
           else{
               alert("Senha incorreta");
               console.log("senha incorreta")
            }
        }
        else{
            alert("Email ou senha incorretos");
        }
    }


    return(
        <div className="supercontainer">
            <div className="container">
            <div className="descricao">
                <h1>SINTERA TESTES</h1>

                <p>Para acessar o questionário faça o login</p>
                <br />
            </div>

            <div className="login">
                <form action="" >

                    <label>Email</label>
                    <br />
                    <input type="text" value={email} required onChange={(e) => { handleEmailChange(e) }}></input>
                    <br />
                    <label>Senha</label>
                    <br />
                    <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }}></input>
                    <br />
                    <br />
                    <button className="entrar" onClick={entrar}> Entrar </button>
                    <button className='cadastrar' onClick={() => {
                        navigate("/cadastro-atleta")
                    }}>Cadastrar</button>

                </form>
            </div>
        </div>
        </div>
        
        
        
    );
}

export default Login;