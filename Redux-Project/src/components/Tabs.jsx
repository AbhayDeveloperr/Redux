import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos','videos','GIFs']  

    const dispatch = useDispatch()

    const activeTab = useSelector((state)=> state.search.activeTab)

  return (
    <div className='flex gap-5 p-10'>
      {tabs.map(function(elem,idx){
        return <button onClick={()=>{
            dispatch(setActiveTabs(elem))
        }} className= {`${(activeTab==elem?'bg-blue-700':'transition bg-gray-500')} px-5 py-2 rounded cursor-pointer active:scale-95 uppercase'`} key={idx}>{elem}</button>
      })}
    </div>
  )
}

export default Tabs
