import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {

  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const submitHandler=(e)=>{
    e.preventDefault()
    
    dispatch(setQuery(text))

    setText('') 
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)  
      }} className='flex gap-5 p-10 bg-gray-900'>

        <input required className='border-2 w-full px-4 py-2 text-xl rounded outline-none' value={text} onChange={(e)=>{
            setText(e.target.value);   
        }} type="text" placeholder='Search anything....' />

        <button className='cursor-pointer active:scale-95 border-2 px-10 py-2 text-xl rounded outline-none'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
