import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    id: null, 
    lastName: null,
    firstName: null,
    age: null,
    date: null,
    sex: null,
    email:null,
    type: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers:{
        login(state, action){
            state.id = action.payload.uid;
            state.lastName = action.payload.lastName;
            state.firstName = action.payload.firstName;
            var dob = new Date(action.payload.dateOfBirth);
            var month_diff = Date.now() - dob.getTime();  
            var age_dt = new Date(month_diff); 
            var year = age_dt.getUTCFullYear();
            var age = Math.abs(year - 1970);  
            state.age = age;
            state.date = action.payload.date;
            state.sex = action.payload.sex;
            state.email = action.payload.email;
            state.type = action.payload.type;
        },

        logout(state){
            state.id = null;
            state.lastName = null
            state.firstName = null
            state.age = null
            state.date = null
            state.sex = null
            state.email = null
            state.type = null
        }
    }
})

export default userSlice.reducer;

export const userActions = userSlice.actions