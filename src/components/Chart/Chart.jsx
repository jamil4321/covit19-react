import React,{useState,useEffect} from 'react';
import {fetchWorldData} from '../../api';
import { Doughnut, Line} from 'react-chartjs-2';

import {  Grid  } from '@material-ui/core';

const Chart = ({ data, anotherData, worldData,country }) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const fetchApi = async () =>{
            setDailyData (await fetchWorldData())

        }
        fetchApi()
    },[]);
console.log(dailyData)
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
    const lineChart = (
        anotherData.length ? (
            <Line
                data={{
                    labels: anotherData.map(({ Date }) => Date),
                    datasets: [{
                        data: anotherData.map(({ Confirmed }) => Confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: anotherData.map(({ Deaths }) => Deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }]
                }}
            />) : null
    )

    const worldlineChart = (
        dailyData ? (
        <Line
            data = {{
                labels: dailyData.map(({date})=>date),
                datasets:[{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: dailyData.map(({deaths})=>deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill: true
                }]
            }}
        />):null
    )
    

    return (
        <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={10}>
                {data.testsPerOneMillion !== 0 ?
                    <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Grid item xs={12} md={6}>
                            {TotalCases}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {CasesPerMillion}
                        </Grid>
                    </Grid> : TotalCases
                }
            </Grid>
            <Grid item xs={10} >
                {country === "world"?
                    worldlineChart:
                    lineChart
                }

            </Grid>
        </Grid>
    )
}
export default Chart;