import React from 'react';

const Country = ({countryElement, id, onRemoveCountry}) => {  
  const {name, flags, capital, population, area} = countryElement;
  
  const handleRemove=(name)=>{
    onRemoveCountry(name);
  }

  return (
    <section className='country'>
      <img src={flags.png} alt={name.common} />
      <h3>Name: {name.common}</h3>
      <h3>Capital: {capital}</h3>
      <h3>Area: {area}</h3>
      <h3>Population: {population}</h3>
      <button onClick={()=> {handleRemove(name.common)}}>Remove</button>
    </section>
  );
}

export default Country;
