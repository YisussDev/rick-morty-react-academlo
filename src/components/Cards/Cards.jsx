import React from 'react'
import useLoad from '../../functions/useLoad'
import Spinner from '../Spinner/Spinner'
import './Cards.css'

const Cards = ({ name, img, episodes, gender, specie, status }) => {
  const { loading } = useLoad()

  return (
    loading ? (<Spinner />) : (
      <div className='Cards'>
        <img src='./images/Cards/bg_card.png' alt="" />
        <div className='Profile'>
          <img src={img} alt="" />
          <div className={status}></div>
        </div>
        <div className='info'>
          <h2>{name?.substr(0,15)}</h2>
          <div>
            <h3>Specie: {specie}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Episodes: {episodes}</h3>
          </div>
        </div>
      </div>)
  )
}

export default Cards