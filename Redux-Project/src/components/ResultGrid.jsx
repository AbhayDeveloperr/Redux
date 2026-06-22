import React from 'react'
import {fetchPhotos,fetchVideos,fetchGIF} from '../api/mediaApi'
import {setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const ResultGrid = () => {

  const {query,activeTab,results,loading,error} = useSelector((store)=>store.search)

  const getData =async()=>{
    let data
    if(activeTab=='photos'){
        data = await fetchPhotos(query) 
    }
    if(activeTab=='videos'){
        data = await fetchVideos(query) 
    }
    if(activeTab=='gif'){
        data = await fetchGIF(query) 
    }
    console.log(data);
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default ResultGrid
