import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import Chart from "chart.js/auto";
import { CategoryScale, Plugin, Plugins } from "chart.js";
import "./JanelaTeste.css"


var quadrantes = new Map()


Chart.register(CategoryScale);

function JanelaTeste(props) {

    const [valorx, setValorx] = useState(props.data.x);
  const [valory, setValory] = useState(props.data.y);
  var color1 = 'white';
 var color2 = 'white';
 var color3 = 'white';
 var color4 = 'white'; 

    var aberto = false;
    var cego = false;
    var desconhecido = false;
    var oculto = false;
  

 


  const quadrants = {
    id: 'quadrants',
    beforeDraw(chart, args, options) {
        const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart;
        const midX = x.getPixelForValue(valorx);
        const midY = y.getPixelForValue(valory);
        ctx.save();
        ctx.fillStyle = options.topLeft;
        ctx.fillRect(left, top, midX - left, midY - top);
        ctx.fillStyle = options.topRight;
        ctx.fillRect(midX, top, right - midX, midY - top);
        ctx.fillStyle = options.bottomRight;
        ctx.fillRect(midX, midY, right - midX, bottom - midY);
        ctx.fillStyle = options.bottomLeft;
        ctx.fillRect(left, midY, midX - left, bottom - midY);
        ctx.restore();
    }
}


  // primeiro quadrante
  let topLeftQuadrante = valorx * (50 - valory);
  // quarto quadrante
  let bottomLeftQuadrante = valorx * valory;
  // segundo quadrante
  let topRightQuadrante = (50 - valorx) * (50 -valory);
  // terceiro quadrante
  let bottomRightQuadrante = (50 - valorx) * valory;

  let maior = topLeftQuadrante;
  if(topRightQuadrante > topLeftQuadrante){
    maior = topRightQuadrante;
    if(bottomRightQuadrante > topRightQuadrante){
      maior = bottomRightQuadrante;
      if(bottomLeftQuadrante > bottomRightQuadrante){
        maior = bottomLeftQuadrante
      }
    }
    else{
      if(bottomLeftQuadrante > topRightQuadrante){
        maior = bottomLeftQuadrante;
      }
    }
  }
  else if(bottomRightQuadrante > topLeftQuadrante){
    maior = bottomRightQuadrante;
    if(bottomLeftQuadrante > bottomRightQuadrante){
      maior = bottomLeftQuadrante;
    }
  }
  else{
    if(bottomLeftQuadrante > topLeftQuadrante){
      maior = bottomLeftQuadrante;
    }
  }
  console.log(maior);
  if(maior === topLeftQuadrante){
    aberto = true;
    color1 = 'purple';
    console.log("executou aqui 4"+valorx)
  }
  else if(maior === topRightQuadrante){
    cego = true;
    color2 = 'purple';
    console.log("executou aqui 2")
  }
  else if(maior === bottomRightQuadrante){
    desconhecido = true;
    color3 = 'purple'
    console.log("executou aqui 3")
  }
  else{
    oculto = true;
    color4 = 'purple'
    console.log("executou aqui 4")
  }
    
         
        
useEffect(() => {

    quadrantes['topLeft'] = 'red'
    quadrantes['topRight'] = 'red'
    quadrantes['bottomRight'] = 'red'
    quadrantes['bottomLeft'] = 'red'
            var primeiroGrafico = document.getElementById('primeiroGrafico').getContext('2d');



            let chart = new Chart(primeiroGrafico, {
                    type: 'line',
            
                    data: {
                        labels: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            
                        datasets: [
                            {
                                //label: 'Crecimento Populacional',
                                //data: [173448346, 175885229, 178276128, 180619108, 182911487, 185150806]
                                backgroundColor: 'rgba(54, 162, 235, 0.0)',
                                borderColor: 'rgba(54, 162, 235, 0.0)',
                                data: [0, 5, , , , , , , ,null ,null],
                                
                            },
                            {
                                label: null,
                                backgroundColor:'rgba(255, 255, 255, 0.0)',
                                borderColor: 'rgba(0, 0, 153, 1.0)',
                                data: [valory,valory,valory,valory,valory,valory,valory,valory,valory,valory,valory],
                            },
                            {
                                backgroundColor:'rgba(255, 255, 255, 0.0)',
                                borderColor: 'rgba(0, 0, 153, 1.0)',
                                data: [{x: valorx, y: 0}, {x: valorx, y: 3},{x: valorx, y: 6},{valor: valorx, y: 5},{x: valorx, y: 7},{x: valorx, y: 8},{x: valorx, y: 10},{x: valorx, y: 15},{x: valorx, y: 25}, {x: valorx, y: 50}],
                                data: [{x: valorx, y:0}, {x: valorx, y: 50}]
                            },
                            {
                                label: 'Aberto',
                                data: [{x:20, y:20}]
                            }
                            
                        ]
                    },
                    
                    options: {
                        plugins: {
                            quadrants: {
                                topLeft: color1,
                                //topLeft: quadrantes.get('topLeft'),
                            
                                topRight: color2,
                                //topRight: 'orange',
                                bottomRight: color3,
                                bottomLeft: color4,
                            },
                            legend: {
                                display: false
                            },
                            tooltips: {
                                enabled: false
                             },
                           
                                
                             
                        },
                        layout: {
                            //padding: 20
                        },
                    
                        scales: {
                            x: {
                                type: 'linear',
                                min: 0,
                                max: 50
                            },
                            y: {
                                type: 'linear',
                                min: 0,
                                max: 50
                            }
                        },
                        aspectRatio: 1
                    },
                    plugins: [quadrants]
                   

                });
},[] )

                        
      
  return (
    <div className="chart-container">
      <div className="descricao_resultado">
        <canvas id="primeiroGrafico" >

        </canvas>
        {aberto && <h3 className="aberto">Eu aberto</h3>}
        {cego && <h3 className="cego">Eu cego</h3>}
        {desconhecido && <h3 className="desconhecido">Eu desconhecido</h3>}
        {oculto && <h3 className="oculto">Eu oculto</h3>}
        <div className="info_resultado">
            <div>
              <label className="">Resultado: </label>
              {aberto && <span className=""> Eu aberto</span>}
              {cego && <span className=""> Eu cego</span>}
              {desconhecido && <span className=""> Eu desconhecido</span>}
              {oculto && <span className=""> Eu oculto</span>}
            </div>
            <br></br>
            <div>
              <label className="">Data do teste: </label>
              {aberto && <span className=""> {props.data.data}</span>}
              {cego && <span className=""> {props.data.data}</span>}
              {desconhecido && <span className=""> {props.data.data}</span>}
              {oculto && <span className=""> {props.data.data}</span>}
            </div>
            <br></br>
            <div>
              <label className="">Descrição: </label>
              {aberto && <p className=""> Nessa área todas as informações são conhecidas pelo próprio indivíduo e por outras pessoas. Esse quadrante se caracteriza
pela troca livre e aberta de informações entre o eu e os outros</p>}
              {cego && <p className=""> Está localizado na parte superior.
As informações nessa área são conhecidas por outras pessoas e não pelo próprio indivíduo, diante
disso caracterizam esse quadrante como aquilo que os outros sabem de nós e não nos dizem.
Se essas impressões não nos forem por eles reveladas (verbalmente ou com atitudes e gestos),
criarão em nós a mancha escura que gera suspeita, cautela, falta de desenvoltura</p>}
              {desconhecido && <p className=""> Nesse quadrante as informações não são conhecidas nem pelo indivíduo e nem por outras pessoas. Nele
estão as informações em que o indivíduo não tem consciência, como lembranças da infância.
Podendo ser recuperada através do aumento da abertura e do feedback</p>}
              {oculto && <p className=""> Este quadrante evidencia as informações conhecidas pelo Eu, não sendo conhecidas pelos outros. Mantemos oculto das pessoas
as coisas que conhecemos de nós mesmos. Mascarar essas informações promoverá reações ne-
gativas do grupo, ocasionando repúdio do grupo ao indivíduo</p>}
            </div>
            
        </div>
      </div>
    
    </div>
  );
}
export default JanelaTeste;