import React from 'react'
import './LocationInfo.css'

const LocationInfo = ({type, dimension, population, name}) => {
  return (
    <div className='LocationInfo'>
        <h2>{name}</h2>
        <div>
            <h3>Type: {type}</h3>
            <h3>Dimensión: {dimension}</h3>
            <h3>Population: {population}</h3>
        </div>
    </div>
  )
}

export default LocationInfo