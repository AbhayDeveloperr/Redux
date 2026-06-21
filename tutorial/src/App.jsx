import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentByAmount } from './redux/features/counterSlice'


const App = () => {

  const dispatch = useDispatch()

  const count = useSelector((state)=>state.counter.value)

  const [num, setNum] = useState();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increament())
      }}>Increament</button>
      <button onClick={()=>{
        dispatch(decreament())
      }}>Decreament</button>
      <input value={num} type="number" onChange={(e)=>{
        setNum(e.target.value)  
      }}/>
      <button onClick={()=>{
        dispatch(increamentByAmount(Number(num)))
      }}>Increase by Amount</button>
    </div>
  )
}

export default App
