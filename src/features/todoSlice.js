import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState={
    loading: false,
    todos: [],
    error: "",
};

export const fetchTodos=createAsyncThunk("fetchTodos",async()=>{
    const response=await Axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
});

const todoSlice=createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.loading= true
            state.todos=[]
            state.error=""
        })
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.loading=false
            state.todos=action.payload
            state.error=""
        })
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            state.loading=false
            state.todos=[]
            state.error=action.error.message
        })
    }
});

export default todoSlice.reducer;