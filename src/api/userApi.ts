import {rootApi} from "./rootApi.ts";
import {LOGIN_URL, REGISTER_URL} from "../util/ApiConstants.ts";
import type {UserDto} from "../types/types.ts";

export const userApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserDto, Partial<UserDto>>({
            query: (credentials) => ({
                url: LOGIN_URL,
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["USER"],
        }),
        register: builder.mutation<UserDto, Partial<UserDto>>({
            query: (userData) => ({
                url: REGISTER_URL,
                method: "POST",
                body: userData,
            }),
            invalidatesTags: ["USER"],
        }),
    }),
});

export const {useLoginMutation, useRegisterMutation} = userApi;
