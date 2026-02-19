import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ProgrammingLanguage} from "../../../types/types.ts";
export const emptyLanguage: ProgrammingLanguage = {
    name:"",
    src:"",
    id:0
}
const languageSlice = createSlice({
    name: "language",
    initialState: emptyLanguage,
    reducers: {
        setLanguage: (_state, action: PayloadAction<ProgrammingLanguage>) => {
            return action.payload
        },
        clearLanguage: () => {
            return emptyLanguage
        }
    }
})

export const { setLanguage, clearLanguage } = languageSlice.actions
export default languageSlice.reducer
