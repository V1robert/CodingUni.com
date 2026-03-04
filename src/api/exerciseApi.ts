import {rootApi} from "./rootApi.ts";
import type {Lesson} from "../types/types.ts";
import {EXERCISE_URL} from "../util/ApiConstants.ts";

const exerciseApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getExercise: builder.query<Lesson[], {
            programmingLanguage: string;
            courseId: number;
            lessonId: number;
            language: string
        }>({
            query: ({programmingLanguage, courseId, lessonId, language}) => ({
                url: EXERCISE_URL,
                method: "GET",
                params: {programmingLanguage, courseId, lessonId, language}
            }),
            providesTags: ["EXERCISE"]
        })

    })
})

export const {useGetExerciseQuery} = exerciseApi
