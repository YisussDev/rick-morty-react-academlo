import React from 'react'
import './Search.css'
import { FaSearch } from 'react-icons/fa';


const Search = ({filterFetch}) => {
  return (
    <form className='Search' onSubmit={filterFetch} option='4' >
      <input type="text" name='search' placeholder='Search Character...' id='characterSearch' autoComplete='off'/>
      <button type='submit'><FaSearch /></button>

    </form>
  )
}

export default Search