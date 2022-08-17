import React from 'react';

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import gradient from 'chartjs-plugin-gradient';
import classes from './Chart.module.sass'

ChartJS.register(ArcElement, Tooltip, Legend, gradient);

const Chart = ({color, circumference}) => {


    const options = {
        circumference: circumference,
        cutout: 85,
        borderRadius: 100,
        events: [],
        animation: {
            duration: 6000,
        },
        responsive: true,
        plugins: {
            gradient,
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['Любовь к попугаям', 'Разработка', 'Учеба', 'Досуг', 'Кофеек'];


    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1],
                backgroundColor: color,
                borderWidth: 0,
            },
        ],
    };

    return <Doughnut className={classes.chart} options={options} data={data}/>;
};

export default Chart;