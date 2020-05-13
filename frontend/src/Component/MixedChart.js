
// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React from 'react';
import { Bar } from 'react-chartjs-2';

let MixedChart = (props) => {


    const data = {
        datasets: [{
            label: props.label0,
            type: 'bar',
            data: props.data0,
            fill: false,
            borderColor: '#36A2EB',
            backgroundColor: '#36A2EB',
            pointBorderColor: '#36A2EB',
            pointBackgroundColor: '#36A2EB',
            pointHoverBackgroundColor: '#36A2EB',
            pointHoverBorderColor: '#36A2EB',
            yAxisID: 'y-axis-1'
        }, {
            type: 'line',
            label: props.label1,
            data: props.data1,
            fill: false,
            backgroundColor: '#71B37C',
            borderColor: '#71B37C',
            hoverBackgroundColor: '#71B37C',
            hoverBorderColor: '#71B37C',
            yAxisID: 'y-axis-2'
        }]
    };
    
    const options = {
        responsive: true,
        tooltips: {
            mode: 'label'
        },
        elements: {
            line: {
                fill: false
            }
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false
                    },
                    labels: props.label,
                    scaleLabel: {
                        display: true,
                        labelString: 'Quiz Number'
                    }
    
                }
            ],
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Score'
                    },
                    ticks: {
                        beginAtZero: true,
                        min: 0
                      }    
                }
                ,
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    },
                    ticks: {
                        beginAtZero: true,
                        min: 0
                      } 
                }
            ]
        }
    };
    return (
        <div>
            <h2>{props.title}</h2>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
}
export default MixedChart

