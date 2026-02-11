import { combineReducers } from "redux"
import {rootApi} from "../../../api/rootApi.ts";
import userSlice from "./userSlice.ts";
import languageSlice from "./LanguageSlice.ts";

export type RootState = {
    [rootApi.reducerPath]: ReturnType<typeof rootApi.reducer>
}
const createRootReducer = () =>
    combineReducers({
        [rootApi.reducerPath]: rootApi.reducer,
        user: userSlice,
        languages: languageSlice,
    })

export default createRootReducer