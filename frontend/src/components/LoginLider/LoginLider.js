import { useNavigate } from "react-router-dom";
import "./LoginLider.css"
import { useEffect, useState } from "react";
import axios from "axios";

function LoginLider(){
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
        
        let response =  await axios.get(`http://localhost:8080/lider/email/${email}`);
        if(response.data.email !== null){
            return true;
        }
        return false;
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8080/lider/email/${email}`).then((response) => {
          setUser(response.data);
          console.log(response.data);
        });
      }, [email]);

    function entrar(){
        if(email !== null && user !== null){
            if(password === user.senha){
                alert("login efetuado com sucesso")
                localStorage.setItem("token", "true");
                localStorage.setItem("idSession", user.id);
                navigate("/Lider");
            }
            else{
                alert("Senha incorreta");
             }
        }
        else{
            alert("Email inválido!");
        }
    }


    return(
<div className="supercontainer">
            <div className="container">
            <div className="descricao">
                <h1>Login para líderes</h1>

                
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
                    <button className="entrar btn btn-sucesss" onClick={entrar}> Entrar </button>
                    

                </form>
            </div>
        </div>
        </div>
    );
}

export default LoginLider;