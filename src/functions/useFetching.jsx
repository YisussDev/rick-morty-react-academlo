import axios from 'axios'
import { useState, useEffect } from 'react'



const useFetching = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [locationData, setLocationData] = useState([])
    const[openLocation, setOpenLocation] = useState(false)
    const fetching = (page) => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }
    const fetchingFilter = (filter, page) => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&${filter[0]?("species="+filter[0]):('')}${filter[1]?("&status="+filter[1]):('')}${filter[2]?("&gender="+filter[2]):('')}${filter[3]?("&name="+filter[3]):('')}`)
            .then(res => setData(res.data))
            .catch(err => alert('No se encontraron coincidencias'))
    }
    const fetchingLocation = async (id)=>{
        await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setLocationData(res.data))
    }
    useEffect(() => {
        if(filter[0]||filter[1]||filter[2]||filter[3]){
            fetchingFilter(filter,page)
            setTimeout(()=>{
                setLoading(false)
            },1000)
        }
        else if((filter[3] === undefined)&&(filter[0] === undefined)&&(filter[1] === undefined)&&(filter[2] === undefined)){
            fetching(page)
            setTimeout(()=>{
                setLoading(false)
            },1000)
        }
    },[filter,page, data])

    const filterFetch = (e) => {
        e.preventDefault()
        setPage(1)
        const type= parseInt(e.target.getAttribute('option'))-1;
        const temp= filter;
        setLoading(true);
        setOpenLocation(false)
        if(type===3){
            const value = e.target.search.value.trim()
            setOpenLocation(false)
            temp[type]=value;
            setFilter([...temp]);
        }
        else{
            const value= e.target.getAttribute('value');
            temp[type]=value;
            setFilter([...temp]);
        }
    }
    const goHome = ()=>{
        setPage(1)
        setOpenLocation(false)
        setFilter([])
    }
    const changePage = (e) => {
        
        const mode = parseInt(e.target.getAttribute('mode'))
        if((mode === 1) && page > 1 ){
            setPage(page - 1)
        }
        else if((mode === 3)&& page < data.info?.pages){
            setPage(page + 1)
        }
        else if(mode === 2){
            const pageDirection = parseInt(e.target.getAttribute('option'))
            setPage(pageDirection)
        }
        else if((mode === 33) && page < Math.round(locationData.residents?.length / 20)){
            setPage(page+1)
        }
        else if((mode === 11) && page > 1){
            setPage(page-1)
        }

    }
    const sendFilter = (e) => {
        e.preventDefault()
        setOpenLocation(true)
        setFilter([])
        setPage(1)
        const id = e.target.filterId.value
        fetchingLocation(id)
    }
    const reset = ()=>{
        setOpenLocation(false)
        setPage(1)
        setFilter([])
        document.getElementById('characterSearch').value=''
        document.getElementById('idSearch').value=''
    }


    return {data, filter, filterFetch, goHome, loading, changePage, page, sendFilter, locationData, openLocation, reset}
}

export default useFetching