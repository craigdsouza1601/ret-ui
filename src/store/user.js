import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    id: null, 
    lastName: null,
    firstName: null,
    age: null,
    date: null,
    prediction: null,
    probability: null,
    password: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers:{
        login(state, action){
            state.id = action.payload.id;
            state.lastName = action.payload.lastName;
            state.firstName = action.payload.firstName;
            state.age = action.payload.age;
            state.date = action.payload.date;
            state.prediction = action.payload.prediction;
            state.probability = action.payload.probability;
            state.password = action.payload.password;
        },

        logout(state){
            state.id = null;
            state.lastName = null
            state.firstName = null
            state.age = null
            state.date = null
            state.prediction = null
            state.probability = null
            state.password = null
        }
    }
})

export default userSlice.reducer;

export const userActions = userSlice.actions