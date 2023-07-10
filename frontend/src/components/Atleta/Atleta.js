import './Atleta.css'
import HeaderAtleta from '../HeaderAtleta/HeaderAtleta';
import { Fragment, useState, useEffect } from 'react';
import Chart from '../Janela/Janela';
import Questionario from '../ContainerQuestionario/ContainerQuestionario';
import Resultado from '../Resultado/Resultado';
import axios from "axios";
import AlteraDados from '../AlteraDados/AlteraDados';

function Atleta(){
    const [resultado, setResultado] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8080/resultado/ultimo-resultado/${localStorage.getItem("idSession")}`).then((response) => {  
        setResultado(response.data);
          console.log(response.data);
          console.log("Executou")
        });
      }, []);
        const dados = resultado;    

    const [data, setData] = useState(1);
    var childToParent = (childdata) => {
        setData(childdata);
     }

     const Menu = () => {
        if(data === 1){
            return <Questionario />
        }
        else if(data ===2){
            return <Resultado dados={dados}/>
        }
        else if(data ===3){
            return <AlteraDados/>
        }
        else{
            //return <CadastroLider/>
        }
     }

     var questionarioSelecionado = false;
     if(data === 1){
        questionarioSelecionado = true;
     }



    return (
        <Fragment>
             <HeaderAtleta childToParent={childToParent}/>
            {/* <h1>tela de atleta {localStorage.getItem("idSession")}</h1> */}
            <div className='caixa'>
                <div className='containerAtleta'>

                    {<Menu />}
                </div>
                {questionarioSelecionado ? <div className='info_questionario'>
                    <h3 style={{color: "white"}}>Instruções</h3>
                    <p>Para cada pergunta existem duas alternativas: A e B. Cada alternativa inclui 5 círculos, com valores de 1 a 5, da esquerda para direita. Você deverá selecionar o círculo com o valor que mais representa o quanto você concorda com a alternativa. Quando você selecionar um valor de um círculo de uma das duas alternativas (A ou B),  o próprio sistema irá definir o valor para a outra alternativa (A ou B) para que o total das duas seja sempre igual a 5. Se a escolha for por um círculo no valor de 5, o sistema irá imputar o valor de 0 para a outra alternativa.
                    </p>
                </div>
                : null
                }
            </div>
            
            
        </Fragment>
        
    );
}

export default Atleta;