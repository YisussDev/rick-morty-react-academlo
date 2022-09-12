import React from 'react'
import { useState, useEffect } from 'react'
import useLoad from '../../functions/useLoad'
import Spinner from '../Spinner/Spinner'
import axios from 'axios'
import './Cards.css'

const CardLocation = ({url}) => {
  const { loading } = useLoad()
  const [data, setData] = useState({})
  useEffect(()=>{
    axios.get(url)
    .then(res=> setData(res.data))
  },[url])

  return (
    loading ? (<Spinner />) : (
      <div className='Cards'>
        <img src='./images/Cards/bg_card.png' alt="" />
        <div className='Profile'>
          <img src={data.image} alt="" />
          <div className={data.status}></div>
        </div>
        <div className='info'>
          <h2>{data.name?.substr(0, 15)}</h2>
          <div>
            <h3>Specie: {data.species}</h3>
            <h3>Origin: {data.origin?.name}</h3>
            <h3>Episodes: {data.episode?.length}</h3>
          </div>
        </div>
      </div>)
  )
}

export default CardLocation