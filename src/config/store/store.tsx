import {configureStore} from "@reduxjs/toolkit"
import {rootApi} from "../../api/rootApi"
import createRootReducer from "./slices"
import {reduxBatch} from "@manaflair/redux-batch"

export const storeApp = configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }).concat(rootApi.middleware),
    devTools: true,
    enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers().concat(reduxBatch),
})

export type AppState = ReturnType<typeof storeApp.getState>
export type AppDispatch = typeof storeApp.dispatch
