import React, { useEffect, useState } from 'react';

const Search = ({onSearchText}) => {
  const [searchText, setSearchText] = useState('');
  const handleChange=(e)=>{
    setSearchText(e.target.value);
  }

  useEffect(()=>{
    onSearchText(searchText)
  },[searchText])


  return (
    <section className='search' style={{textAlign:'center'}}>
      <input 
        className='searchInput'
        type="text"  
        placeholder='Search Country' 
        value={searchText} 
        onChange={handleChange}
      />
    </section>
  );
}

export default Search;
