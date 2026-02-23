import {rootApi} from "./rootApi.ts";
import type {Lesson} from "../types/types.ts";
import {LESSON_URL} from "../util/ApiConstants.ts";

const lessonApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getLesson: builder.query<Lesson[], { courseId: number; programmingLanguageId: number; language: string }>({
            query: ({courseId, programmingLanguageId, language}) => ({
                url: LESSON_URL,
                method: "GET",
                params: {courseId, programmingLanguageId, language}
            }),
            providesTags: ["LESSON"]
        })

    })
})

export const {useLazyGetLessonQuery} = lessonApi
