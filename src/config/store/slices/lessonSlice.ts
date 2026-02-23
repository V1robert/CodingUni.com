import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Lesson} from "../../../types/types.ts";

export const emptyLessons: Lesson[] = []
const lessonSlice = createSlice({
    name: "lesson",
    initialState: emptyLessons,
    reducers: {
        setLessons: (_state, action: PayloadAction<Lesson[]>) => {
            return action.payload
        },
        clearLessons: () => {
            return emptyLessons
        }
    }
})

export const {setLessons, clearLessons} = lessonSlice.actions
export default lessonSlice.reducer
