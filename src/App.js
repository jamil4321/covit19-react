import React from 'react';
import{fetchData} from './api';
import {Header,CountryList,Cards,Chart} from './components';
import styles from './App.module.css'

class App extends React.Component{
  state = {
    data:{},
    country:"world"
  }
  componentDidMount = async()=>{
    const fetchedData = await fetchData(this.state.country).then(res => res.data)
    this.setState({data: fetchedData})
  }
  handleCountryName = async (country) =>{
    const fetchedData = await fetchData(country).then(res => res.data)
    this.setState({data: fetchedData,country:country})
  }

  render(){
    const {country,data} = this.state
    console.log(this.state)
    return(
      <div className={styles.container}>
      <Header/>
      <CountryList handleCountryName={this.handleCountryName}/>
      <Cards data={data} country={country}/>
      <Chart data={data} country={country}/>
    </div>
    )
  }
}

export default App;
