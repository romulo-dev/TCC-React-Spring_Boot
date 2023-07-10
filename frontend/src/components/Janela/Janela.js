import './Janela.css'
import { Fragment, useState } from 'react';
import { Line } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
//import Chart from 'chart.js/auto';
import { Chart, registerables, LinearScale} from 'chart.js';
Chart.register(...registerables);


const BosChart = (props) => {
  const [x, setX] = useState(props.data.x);
  const [y, setY] = useState(props.data.y);

  // const [x, setX] = useState(35);
  // const [y, setY] = useState(35);

  // primeiro quadrante
  let q1 = x * (50 - y);
  // quarto quadrante
  let q4 = x * y;
  // segundo quadrante
  let q2 = (50 - x) * (50 -y);
  // terceiro quadrante
  let q3 = (50 - x) * y;

  let maior = q1;
  if(q2 > q1){
    maior = q2;
    if(q3 > q2){
      maior = q3;
      if(q4 > q3){
        maior = q4
      }
    }
    else{
      if(q4 > q2){
        maior = q4;
      }
    }
  }
  else if(q3 > q1){
    maior = q3;
    if(q4 > q3){
      maior = q4;
    }
  }
  else{
    if(q4 > q1){
      maior = q4;
    }
  }


  const quadrants = {
    id: 'quadrants',
    beforeDraw(chart, args, options) {
        const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart;
        const midX = x.getPixelForValue(0);
        const midY = y.getPixelForValue(0);
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


    const lineChartData = {
      labels:  [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      datasets: [
        {
            backgroundColor: 'rgba(54, 162, 235, 0.0)',
            borderColor: 'rgba(54, 162, 235, 0.0)',
            data: [0, 5, , , , , , , ,null ,null],
           fill: true,
           lineTension: 0.5
        },
        {
            backgroundColor:'rgba(255, 255, 255, 0.0)',
            borderColor: 'rgba(0, 0, 153, 1.0)',
            data: [y,y,y,y,y,y,y,y,y,y,y],
        },
        {
            backgroundColor:'rgba(255, 255, 255, 0.0)',
            borderColor: 'rgba(0, 0, 153, 1.0)',
            data: [{x: x, y: 0}, {x: x, y: 5}, {x: x, y: 50}],
            options:{
              plugins: {
                quadrants: {
                    topLeft: 'aquamarine',
                    topRight: 'blue',
                    bottomRight: 'green',
                    bottomLeft: 'yellow',
                },
              },
              legend: {
                    display: false
              },
            },
            plugins: [quadrants]   
        }
      ]
    };
  
    return (
      <div className='janela'>
        
      <Line
        type="line"
        width={500}
        height={500}
        options={{
          title: {
            display: false,
            text: "Janela de Johari",
            fontSize: 20
          },
          plugins:{
            quadrants: {
              topLeft: 'aquamarine',
              topRight: 'blue',
              bottomRight: 'green',
              bottomLeft: 'yellow',
          },
            legend: {
                display: false, //Is the legend shown?
                position : 'none'//Position of the legend.
            }
          },
          
          scales: {
            x: {
                type: 'linear',
                display: true,
                position: 'left'
            },
            y: {
                type: 'linear',
                min: 0,
                max: 50
            }
        },
          // plugins: [quadrants]
        }
        
      }
      
        data={lineChartData}
      />
      </div>
    );
  };

  export default BosChart;















