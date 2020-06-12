import axios from 'axios';

const url = 'https://coronavirus-19-api.herokuapp.com/countries/';

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