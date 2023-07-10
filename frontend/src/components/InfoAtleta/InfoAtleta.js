import { useParams } from "react-router-dom";
import Janela2 from "../Janela2/Janela2";
import JanelaTeste from "../JanelaTeste/JanelaTeste";
import "./InfoAtleta.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import JanelaTeste2 from "../Janela2/Janela2";

function InfoAtleta(){

    const [data, setData] = useState({})

    const { id } = useParams();

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    

    useEffect(() => {
        
        axios.get(`http://localhost:8080/resultado/ultimo-resultado/${id}`).then(response => {
            setData(response.data);
            console.log("valor merda" + typeof(response.data.x));
            console.log("valor x: "+ data.x)
            console.log("valor y: "+ data.y);
            setX(response.data.x);
            setY(response.data.y);
            
            
        })
    }, [id])

    // async function pegaResultado(){
    //     await axios.get(`http://localhost:8080/resultado/atleta/${atleta}`).then(response => {
    //         setData(response.data);
    //         console.log("respose.data: " + response.data.x)
    //     })
    // }

    // useEffect(() => {
    //     pegaResultado();
    // }, [])
    
    const Resultado = () => {
        return <Janela2 data={data} />;
    }

    return(
        <div>
            <header className="header-info">
                <h1 className="titulo-info">Informações do atleta</h1>
            </header>
            <div>
                <div></div>
                <div>
                    {console.log("bosta de x: " + data.x)}
                    {console.log("bosta de y: " + data.y)}
                    {/* <Janela2 valuex={x} valuey={y}/> */}
                    
                    {/* <Janela2 datax={x} datay={y}/> */}
                    
                    {<Resultado />}
                </div>
            </div>
        </div>
        
    );
}

export default InfoAtleta;