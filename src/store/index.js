import { configureStore } from "@reduxjs/toolkit"; 
import userReducer from './user'
import imageUploadReducer from "./imageUpload";

const store = configureStore({
    reducer: {
        user: userReducer,
        imageUpload: imageUploadReducer
    }
})

export default store;