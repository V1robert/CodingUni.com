import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL, IS_SVILUPPO} from "../util/Constants.ts";
import type {AppState} from "../config/store/store"

export const rootApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: "include",
        prepareHeaders: (headers, api) => {
            const state: AppState = api.getState() as AppState

            const user = state.user
            console.log(user)
            console.log(IS_SVILUPPO)
            if (IS_SVILUPPO) { /* empty */
            }
            return headers
        }
    }),
    tagTypes: ["USER", "COURSE","LESSON"],
    endpoints: () => ({})
})
