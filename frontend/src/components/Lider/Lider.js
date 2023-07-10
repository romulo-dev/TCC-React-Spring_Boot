import Header from "../Header";
import Aside from "../Aside/Aside"
import './Lider.css'
import { Fragment, useState, useEffect} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Tabela from "../Tabela/Tabela";
import GetAtletas from "../GetAtletas/GetAtletas";
import Equipe from "../Equipe/Equipe";
import CadastroEquipe from "../CadastroEquipe/CadastroEquipe";

function Lider(){
    const [data, setData] = useState(1);

    //const [ligado, setLigado] = (true)
    
    
    var childToParent = (childdata) => {
        setData(childdata);
     }

     const Menu = () => {
        if(data === 1){
            return <CadastroEquipe/>
        }
        else if(data ===2){
            return <Equipe />
        }
        else{
            return <CadastroEquipe/>
        }
     }

    
     

     

    return(

            <div>
                <Header childToParent={childToParent}/>
                                
                                {/* <aside className="aside">Tela do gráfico</aside> */}
                                    <div className="box">
                                       {/* <div className="box_left">
                                            
                                           
                                        </div>  */}
                                        <div className="box_right"> 
                                            {<Menu/>} 
                                        </div>     
                                         
                                    </div>
                                      
                                    
                                     
                                    
            </div>
             
               
           
           
           
                
           
           
       
        
    );
}

export default Lider;