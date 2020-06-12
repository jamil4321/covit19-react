import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data }) => {
    if (!data.cases) {
        return 'Loading.....'
    }

    const TotalCases = (
        <Doughnut
            data={{
                labels: ['Active', 'Recoverd', 'Deaths'],
                datasets: [{
                    data: [data.active, data.recovered, data.deaths],
                    backgroundColor: ['#FF8C00', 'green', 'red'],
                    hoverBackgroundColor: ['	#FFA500', 'lightgreen', '#FF7F7F']
                }]
            }}
            options={{
                title: {
                    display: true,
                    text: `Total Cases ${data.cases}`
                }

            }}
        />
    )

    const CasesPerMillion = (
        <Doughnut
            data={{
                labels: ['Tests Per One Million', 'Cases Per One Million'],
                datasets: [{
                    data: [data.testsPerOneMillion, data.casesPerOneMillion],
                    backgroundColor: ['blue', 'green'],
                    hoverBackgroundColor: ['lightblue', 'lightgreen'],
                }],
            }}
            options={{
                title: {
                    display: true,
                    text: 'Cases Per Million'
                }

            }}
        />
    )


    return (
        <div className={styles.container}>
            {data.testsPerOneMillion !== 0 ?
                <div className={styles.container}>
                    <div className={styles.container}>
                        {TotalCases}
                    </div>
                    <div className={styles.container}>
                        {data.testsPerOneMillion === 0 ? null : CasesPerMillion}
                    </div>
                </div> : TotalCases
            }
        </div>
    )
}
export default Chart;