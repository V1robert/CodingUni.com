import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {IS_SVILUPPO, ROOT_API} from "../util/Constants.ts";
import type { RootState } from "../config/store/store"

export const rootApi = createApi({
    reducerPath: "root",
    baseQuery: fetchBaseQuery({
        baseUrl: ROOT_API,
        credentials: "include",
        prepareHeaders: (headers, api) => {
            const state: RootState = api.getState() as RootState

            const user = state.user
            console.log(user)
            console.log(IS_SVILUPPO)
            if (IS_SVILUPPO) { /* empty */ }
            return headers
        }
    }),
    tagTypes: ["USER", "CODICI_ACCISA", "TIPI_DOCUMENTO", "TIPI_DOCUMENTO_FILTRATI"],
    endpoints: () => ({})
})