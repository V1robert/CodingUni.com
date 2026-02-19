import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Course} from "../../../types/types.ts";

export const emptyCourse: Course = {
    language: "",
    languageId: 0,
    courseId: 0,
    order: 0,
    description: "",
    title: ""
}
const courseSlice = createSlice({
    name: "course",
    initialState: emptyCourse,
    reducers: {
        setCourse: (_state, action: PayloadAction<Course>) => {
            return action.payload
        },
        clearCourse: () => {
            return emptyCourse
        }
    }
})

export const {setCourse, clearCourse} = courseSlice.actions
export default courseSlice.reducer
