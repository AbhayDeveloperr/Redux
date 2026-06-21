import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'counter',
    initialState:{
        value:10
    },
    reducers:{
        increament:(state)=>{
            state.value += 1
        }, 
        decreament:(state)=>{
            state.value -= 1
        },
        increamentByAmount:(state,action)=>{
            state.value += action.payload
        }
    }
})

export const {increament, decreament, increamentByAmount} = counterSlice.actions
export default counterSlice.reducer