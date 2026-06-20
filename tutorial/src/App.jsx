import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/features/counterSlice'


const App = () => {

  const dispatch = useDispatch()

  const count = useSelector((state)=>state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increament())
      }}>Increament</button>
      <button onClick={()=>{
        dispatch(decreament())
      }}>Decreament</button>
    </div>
  )
}

export default App
