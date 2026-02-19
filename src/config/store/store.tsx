import {configureStore} from "@reduxjs/toolkit"
import {rootApi} from "../../api/rootApi"
import createRootReducer from "./slices"
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import {reduxBatch} from "@manaflair/redux-batch"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['language']
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

export const storeApp = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }).concat(rootApi.middleware),
    devTools: true,
    enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers().concat(reduxBatch),
})

export const persistor = persistStore(storeApp);
export type AppState = ReturnType<typeof storeApp.getState>
export type AppDispatch = typeof storeApp.dispatch
