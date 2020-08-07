import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './conponent/header/Header' 
import ContainerRight from './conponent/container/ContainerRight/ContainerRight';
import ContainerLeft from './conponent/container/containerLeft/ContainerLeft';



function App() {
  const BASE_URL = 'https://disease.sh/v3/covid-19/countries'

  const [countries,setCountries] = useState([])
  const [countryInfo, setCountryInfo] = useState({})

  const [dataTable, setDataTable] = useState([])

  const [mapCenter,setMapCenter] = useState({lat:34.80647,lng: -20.4796})
  const [zoom,setZoom] = useState(1.5)

  const [casesType,setCasesType] = useState("cases");


  useEffect(() => {
       axios.get('https://disease.sh/v3/covid-19/all').then(res=>{
           setCountryInfo(res.data)
       })
       
       
  }, [])

  useEffect(() => {
        const getCountriesData = async ()=>{
            await axios.get(BASE_URL)
                    .then(res=>{
                        setCountries(res.data)
                        setDataTable(res.data) 
                    })
                    .catch(err=>{
                        console.log(err)
                    })
        }
        getCountriesData();
    }, [])

    const onChangeCountries = async (event)=>{
      const countryCode = event.target.value;
      console.log(countryCode);
      
      const url = countryCode === "worldwide" ? `https://disease.sh/v3/covid-19/all`: `https://disease.sh/v3/covid-19/countries/${countryCode}`;
      await axios.get(url).then(res=>{
        if(countryCode !== "worldwide"){

          setMapCenter([res.data.countryInfo.lat,res.data.countryInfo.long])
          setZoom(4);

          setCountryInfo(res.data);
   
        }
        else{
          setCountryInfo(res.data);

          setMapCenter({lat:34.80647,lng: -20.4796});
          setZoom(1.5);

        }
      })
      console.log(countryInfo)
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <ContainerLeft onChangeCountries={onChangeCountries} countryInfo={countryInfo}  countries={countries} mapCenter={mapCenter} zoom={zoom}></ContainerLeft>
        <ContainerRight countryInfo={countryInfo} countries={countries} dataTable={dataTable}></ContainerRight>
      </div>
      
    </div>
  );
}

export default App;
