import { createSlice } from "@reduxjs/toolkit";
import { findAllUsers,findUserById, findlogin } from "./user.service";
import { IUser } from "../model/user.model";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface IAuth{
    message?: string,
    token?: string
}

interface UserState  {
    array? : Array<IUser>,
    json?:IUser,
    auth?: IAuth
}

export const initialState:UserState = {
    json: {} as IUser,
    array : [],
    auth: {} as IAuth
}

const handleFulfilled =  (state: any, {payload}: any) => {
    console.log('------------------ conclusion ---------------')
    state.array = payload
    console.log(state.array)
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder.addCase(findAllUsers.fulfilled, handleFulfilled)
        builder.addCase(findUserById.fulfilled, (state:any, {payload}:any)=>{state.json =payload})
        builder.addCase(findlogin.fulfilled,(state:any,{payload}:any)=>{state.auth =payload})
    }
})

export const  getAllUsers = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array;
}
export const  getfindUserById= (state: any) => (state.user.json)
export const  getauth  = (state: any) => (state.user.auth)
export const {} = userSlice.actions
export default userSlice.reducer;