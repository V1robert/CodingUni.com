import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserDto} from "../../../types/types.ts";

export const emptyUser: UserDto = {
    email: '',
    password: '',
    preferredLanguage: "en"
}
const userSlice = createSlice({
    name: "user",
    initialState: emptyUser,
    reducers: {
        setUser: (_state, action: PayloadAction<UserDto>) => {
            return action.payload
        },
        clearUser: () => {
            return emptyUser
        }
    }
})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer
