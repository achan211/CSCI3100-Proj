
// PROGRAM – Program to render page content
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: render page content
// DATA STRUCTURES: Json Data Type storing course details
import React from 'react';
import { Bar } from 'react-chartjs-2';



let BarChart = (props) => {
    const data = {
        labels: props.label,
        datasets: [
            {
                label: 'Score',
                backgroundColor: '#FFCE56',
                borderColor: '#FFCE56',
                borderWidth: 1,
                hoverBackgroundColor: '#FFCE56',
                hoverBorderColor: '#FFCE56',
                data: props.data
            }
        ]
    };

    const options = {
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
                    gridLines: {
                        display: false
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
    )
}
export default BarChart