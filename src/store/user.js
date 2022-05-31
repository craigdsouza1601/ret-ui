import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    id: null, 
    lastName: null,
    firstName: null,
    age: null,
    date: null,
    sex: null,
    email:null,
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
            state.sex = action.payload.sex;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },

        logout(state){
            state.id = null;
            state.lastName = null
            state.firstName = null
            state.age = null
            state.date = null
            state.sex = null
            state.email = null
            state.password = null
        }
    }
})

export default userSlice.reducer;

export const userActions = userSlice.actions