// import { combineReducers, createStore } from "redux";
// import { authReducer } from "../reducer/auth.reducer";

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice"
import newsReducer from "./slices/news.slice"
import categoryReducer from "./slices/category.slice"
import userReducer from "./slices/user.slice"


// const rootReducer = combineReducers({
//  auth: authReducer,
// });

// const store = createStore(rootReducer);

// export default store;



const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer,
        category: categoryReducer,
        user: userReducer
    }
})

export default store;