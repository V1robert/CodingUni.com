import {rootApi} from "./rootApi.ts";
import {EXERCISE_URL} from "../util/ApiConstants.ts";
import type {Exercise} from "../types/types.ts";
import type {ExerciseApiDto} from "../types/apiTypes.ts";

const exerciseApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getExercise: builder.query<Exercise[], ExerciseApiDto>({
            query: ({programmingLanguage, courseId, lessonId, language}) => ({
                url: EXERCISE_URL,
                method: "GET",
                params: {programmingLanguage, courseId, lessonId, language}
            }),
            providesTags: ["EXERCISE"]
        }),
        getCheckExerciseAnswer: builder.query<boolean, number>({
            query: (exerciseId) => ({
                url: EXERCISE_URL,
                method: "GET",
                params: {exerciseId}
            })
        })


    })
})

export const {useGetExerciseQuery, useLazyGetCheckExerciseAnswerQuery} = exerciseApi
