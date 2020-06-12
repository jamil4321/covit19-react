import React from 'react';
import{fetchData,fetchAnotherUrl} from './api';
import {Header,CountryList,Cards,Chart} from './components';
import styles from './App.module.css'

class App extends React.Component{
  state = {
    data:{},
    anotherData:{},
    country:"world"
  }
  componentDidMount = async()=>{
    const fetchedData = await fetchData(this.state.country).then(res => res.data)
    const fetchedNewUrlData = await fetchAnotherUrl(this.state.country).then(res => res.data).catch(err=>err)
  
    this.setState({data: fetchedData,anotherData:fetchedNewUrlData})
  }
  handleCountryName = async (country) =>{
    const fetchedNewUrlData = await fetchAnotherUrl(country).then(res => res.data).catch(err=>err)
    const fetchedData = await fetchData(country).then(res => res.data)
    this.setState({data: fetchedData,anotherData:fetchedNewUrlData,country:country})
  }

  render(){
    const {country,data,anotherData,} = this.state


    return(
      <div className={styles.container}>
      <Header/>
      <CountryList handleCountryName={this.handleCountryName}/>
      <Cards data={data} country={country}/>
      <Chart data={data} country={country} anotherData={anotherData} />
    </div>
    )
  }
}

export default App;
