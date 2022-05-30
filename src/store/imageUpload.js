import { createSlice } from "@reduxjs/toolkit";

const initialImageState = { image: null}

const imageUploadSlice = createSlice({
    name: 'imageUpload',
    initialState: initialImageState,
    reducers:{
        uploadImg(state){

        },
        clearImg(state){

        }
    }
})

export default imageUploadSlice.reducer;

export const imageUploadActions = imageUploadSlice.actions