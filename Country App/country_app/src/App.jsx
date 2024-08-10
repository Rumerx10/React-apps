import { useEffect, useReducer, useState } from 'react'
import './App.css'
import Countries from './components/countries';
import Search from './components/Search';



const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState(countries);





  const fetchData = async (url)=>{
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setfilteredCountries(data);
      setIsLoading(false);
      setError(null);
    }catch(error){
      setIsLoading(false);
      setError(error);
    }   
  }

  useEffect(()=>{
    fetchData(url);
  },[])

  const onRemoveCountry=(name)=>{
    const filter = filteredCountries.filter((country)=> country.name.common !== name);
    setfilteredCountries(filter);
  }

  const onSearchText=(searchText)=>{
    let text = searchText.toLowerCase();
    const searchedCountries = countries.filter((country)=> {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(text);
    })
    setfilteredCountries(searchedCountries);
  }

  return (
    <div className='app'>
      <h1>Country App</h1>
      <Search onSearchText={onSearchText}  />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={onRemoveCountry} />}
    </div>   
  )
}

export default App;
