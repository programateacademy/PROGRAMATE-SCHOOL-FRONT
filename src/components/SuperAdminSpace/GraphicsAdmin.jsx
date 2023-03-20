import React, { useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const scores = [6, 5, 4, 3, 2, 1, 2, 4, 5];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
    fill: true,
    scales: {
        y: {
            mini: 0,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
    },
};

 const GraphicsAdmin = () => {

    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: "Mis Datos",
                    tension: 0.3,
                    data: scores,
                    boderColor: "rgba(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 0.3)",
                    pointBackgroundColor: "yellow",
                },
            ],
            labels,
        };
    }, []);
    return (
        <div className=''>
            <h2>Categorias</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default GraphicsAdmin;