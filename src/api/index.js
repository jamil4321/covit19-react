import axios from 'axios';

const url = 'https://coronavirus-19-api.herokuapp.com/countries/';
const newUrl = 'https://api.covid19api.com/dayone/country/';
const worldData = 'https://covid19.mathdro.id/api'

export const fetchContryList = ()=>{

    try{
        const fetchData = axios.get(url)
        return fetchData
    }
    catch(error){
        console.log(error)
    }
}
export const fetchData = (country)=>{
    try{
        const Data = axios.get(`${url}${country}`)
        return Data
    }
    catch(error){
        console.log(error)
    }
}
export const fetchAnotherUrl = (country)=>{
    try{
        const Data = axios.get(`${newUrl}${country}`)
       return Data
    }
    catch(error){
        console.log(error)
    }
}



export const fetchWorldData = async () =>{

    try {
        const {data} = await axios.get(`${worldData}/daily`);

        const modifiedData = data.map((dailyData) =>({
            confirmed: dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        console.log(data)
        return modifiedData
    }
    catch (error){
        console.log(error)
    }

}