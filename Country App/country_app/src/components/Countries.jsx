import React from 'react';
import {v4 as uuidv4} from 'uuid';

import Country from './Country';

const Countries = ({countries, onRemoveCountry}) => {
  return (
    <section className='countries'>
      {countries.map((countryElement)=> {
        const country = {countryElement, id:uuidv4()};
        return <Country key={country.id} {...country} onRemoveCountry={onRemoveCountry} />
      })}
    </section>
  );
}

export default Countries;
