import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Exercise, ExerciseSlice} from "../../../types/types.ts";

export const emptyExercise: ExerciseSlice = {
    exercises: [],
    exerciseProgress: 0
}
const exerciseSlice = createSlice({
    name: "exercise",
    initialState: emptyExercise,
    reducers: {
        setExercises: (_state, action: PayloadAction<Exercise[]>) => {
            _state.exercises = action.payload
        },
        clearExerciseSlice: () => {
            return emptyExercise
        },
        clearExercises: (state) => {
            state.exercises = []
        },
        setExerciseProgress: (state, action: PayloadAction<number>) => {
            state.exerciseProgress = action.payload
        },
        clearExerciseProgress: (state) => {
            state.exerciseProgress = 0
        }
    }
})

export const {
    setExercises,
    clearExerciseSlice,
    clearExercises,
    setExerciseProgress,
    clearExerciseProgress
} = exerciseSlice.actions
export default exerciseSlice.reducer
