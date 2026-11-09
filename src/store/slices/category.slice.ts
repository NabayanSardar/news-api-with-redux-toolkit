import {createSlice} from "@reduxjs/toolkit"

const initialState = {

}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{}
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;