import {combineReducers} from "redux"
import {rootApi} from "../../../api/rootApi.ts";
import userSlice from "./userSlice.ts";
import languageSlice from "./LanguageSlice.ts";

const createRootReducer = () =>
    combineReducers({
        [rootApi.reducerPath]: rootApi.reducer,
        user: userSlice,
        language: languageSlice,
    })

export default createRootReducer