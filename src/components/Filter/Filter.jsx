import React from 'react'
import {  FaTrash } from 'react-icons/fa'
import './Filter.css'



const Filter = ({specie, gender, status, filterCharacter, sendFilter, reset}) => {
    
  return (
    <>
    <div className="Filter">
      <div className='Filter_locations'>
        <form onSubmit={sendFilter}>
          <input type="number" name='filterId' placeholder='Type a Location ID...' id='idSearch' autoComplete='off'/>
          <button type='submit'>Go!</button>
        </form>
      </div>
      <div className='Filter_options'>
        <div className='option'>
            <h3>{specie?specie:'Specie'}</h3>
            <h3 onClick={filterCharacter} option='1' value='Human'>Human</h3>
            <h3 onClick={filterCharacter} option='1' value='Humanoid'>Humanoid</h3>
            <h3 onClick={filterCharacter} option='1' value='Alien'>Alien</h3>
        </div>
        <div className='option'>
            <h3>{status?status:'Status'}</h3>
            <h3 onClick={filterCharacter} option='2' value='Alive'>Alive</h3>
            <h3 onClick={filterCharacter} option='2' value='Dead'>Dead</h3>
            <h3 onClick={filterCharacter} option='2' value='Unknown'>Unknown</h3>
        </div>
        <div className='option'>
            <h3>{gender?gender:'Gender'}</h3>
            <h3 onClick={filterCharacter} option='3' value='Male'>Male</h3>
            <h3 onClick={filterCharacter} option='3' value='Female'>Female</h3>
            <h3 onClick={filterCharacter} option='3' value='Genderless'>Genderless</h3>
            <h3 onClick={filterCharacter} option='3' value='Unknown'>Unknown</h3>
        </div>
        <div className='option_clear' onClick={reset}>
          <FaTrash/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Filter