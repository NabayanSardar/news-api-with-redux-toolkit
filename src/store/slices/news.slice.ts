import {createSlice} from "@reduxjs/toolkit"

const initialState = {

}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{}
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;