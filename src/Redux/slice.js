import { createSlice } from "@reduxjs/toolkit";

const emailSlice= createSlice({
    name:"emails",
    initialState:{
        allEmails:[]
    },
    reducers:{
        addEmails:(state, action)=>{
            state.allEmails = [...state.allEmails, ...action.payload]
        },
        deleteEmail:(state, action)=>{
            state.allEmails = state.allEmails.filter(e =>( e.threadId != action.payload));
        }
    }
})

export const {addEmails,deleteEmail}= emailSlice.actions

export default emailSlice.reducer