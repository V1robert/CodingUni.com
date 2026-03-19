import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {COMPILER_URL} from "../util/Constants.ts";
import {JAVA_COMPILER_URL} from "../util/ApiConstants.ts";
import type {CompilerRequest, CompilerResponse} from "../types/types.ts";
import type {AppState} from "../config/store/store.tsx";


export const compilerApi = createApi({
    reducerPath: "compilerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: COMPILER_URL,
        credentials: "include",
        prepareHeaders: (headers, api) => {
            const state = api.getState() as AppState // or from Redux state
            const token = state.user.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getJavaOutput: builder.query<CompilerResponse, CompilerRequest>({
            query: (code) => ({
                url: JAVA_COMPILER_URL,
                method: "POST",
                body: {code}

            }),

        })

    })
})

export const {useLazyGetJavaOutputQuery} = compilerApi