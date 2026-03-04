import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {COMPILER_URL} from "../util/Constants.ts";
import {JAVA_COMPILER_URL} from "../util/ApiConstants.ts";

export const compilerApi = createApi({
    reducerPath: "compilerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: COMPILER_URL,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        getJavaOutput: builder.query<string, string>({
            query: (code) => ({
                url: JAVA_COMPILER_URL,
                method: "POST",
                body: {code}

            }),

        })

    })
})

export const {useLazyGetJavaOutputQuery} = compilerApi