import {rootApi} from "./rootApi.ts";
import type {Course} from "../types/types.ts";
import {COURSE_URL} from "../util/ApiConstants.ts";

const courseApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getCourses: builder.query<Course[], { programmingLanguageId: number; language: string }>({
            query: ({programmingLanguageId, language}) => ({
                url: COURSE_URL,
                method: "GET",
                params: {programmingLanguageId, language}
            }),
            providesTags: ["COURSE"]
        })

    })
})

export const {useGetCoursesQuery} = courseApi
