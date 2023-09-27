import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : "",
    age : ""
}

const dataSlice = createSlice({
    name : 'data',
    initialState,
    reducers : {
        setData : (state, {payload})=>{
            state.name = payload.name;
            state.age = payload.age;
        }
    }
});

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;