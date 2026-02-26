import {rootApi} from "./rootApi.ts";
import type {Lesson} from "../types/types.ts";
import {LESSON_URL} from "../util/ApiConstants.ts";

const lessonApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getLesson: builder.query<Lesson[], { courseId: number; programmingLanguage: string; language: string }>({
            query: ({courseId, programmingLanguage, language}) => ({
                url: LESSON_URL,
                method: "GET",
                params: {courseId, programmingLanguage, language}
            }),
            providesTags: ["LESSON"]
        })

    })
})

export const {useGetLessonQuery} = lessonApi
