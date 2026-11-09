import {createSlice} from "@reduxjs/toolkit"

const initialState = {

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{}
});

export const {} = userSlice.actions;

export default userSlice.reducer;