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
        },
        setPreferredLanguage: (state, action: PayloadAction<string>) => {
            state.preferredLanguage = action.payload
        },
        setIsStudying: (state, action: PayloadAction<boolean>) => {
            state.isStudying = action.payload
        }
    }
})

export const {setUser, clearUser, setPreferredLanguage, setIsStudying} = userSlice.actions
export default userSlice.reducer
