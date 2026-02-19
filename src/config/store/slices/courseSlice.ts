import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Course} from "../../../types/types.ts";

export const emptyCourses: Course[] = []
const courseSlice = createSlice({
    name: "course",
    initialState: emptyCourses,
    reducers: {
        setCourse: (_state, action: PayloadAction<Course[]>) => {
            return action.payload
        },
        clearCourse: () => {
            return emptyCourses
        }
    }
})

export const {setCourse, clearCourse} = courseSlice.actions
export default courseSlice.reducer
