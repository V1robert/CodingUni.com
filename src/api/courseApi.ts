import {rootApi} from "./rootApi.ts";
import type {Course} from "../types/types.ts";
import {COURSE_URL} from "../util/ApiConstants.ts";

const courseApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getCourses: builder.query<Course[], { programmingLanguage: string; language: string }>({
            query: ({programmingLanguage, language}) => ({
                url: COURSE_URL,
                method: "GET",
                params: {programmingLanguage, language}
            }),
            providesTags: ["COURSE"]
        })

    })
})

export const {useGetCoursesQuery} = courseApi
