import {rootApi} from "./rootApi.ts";
import {EXERCISE_CHECK_ANSWER_URL, EXERCISE_GET_EXERCISES} from "../util/ApiConstants.ts";
import type {Exercise} from "../types/types.ts";
import type {ExerciseAnswerDto, ExerciseApiDto} from "../types/apiTypes.ts";

const exerciseApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getExercise: builder.query<Exercise[], ExerciseApiDto>({
            query: ({programmingLanguage, courseId, lessonId, language}) => ({
                url: EXERCISE_GET_EXERCISES,
                method: "GET",
                params: {programmingLanguage, courseId, lessonId, language}
            }),
            providesTags: ["EXERCISE"]
        }),
        getCheckExerciseAnswer: builder.query<ExerciseAnswerDto, Omit<ExerciseAnswerDto, "correct">>({
            query: (exerciseAnswerDto) => ({
                url: EXERCISE_CHECK_ANSWER_URL,
                method: "POST",
                body: exerciseAnswerDto
            })
        })


    })
})

export const {useGetExerciseQuery, useLazyGetCheckExerciseAnswerQuery} = exerciseApi
