import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{
        query:'',
        activeTab:'photos',
        results: [],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActiveTabs(state,actions){
            state.activeTab = action.payload
        },
        setResults(state,actions){
            state.results = action.payload
            state.loading = false
        },
        setLoading(state){
            state.loading = true
            state.error = null
        },
        setError(state,actions){
            state.error = action.payload
            state.loading = false
        },
        clearResults(state){
            state.results = []
        } 
    }
})

export const {setQuery,setActiveTabs,setResults,setLoading,setError} = searchSlice.actions

export default searchSlice.reducer;