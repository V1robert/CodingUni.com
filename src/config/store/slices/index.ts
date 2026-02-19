import {combineReducers} from "redux"
import {rootApi} from "../../../api/rootApi.ts";
import userSlice from "./userSlice.ts";
import languageSlice from "./languageSlice.ts";
import courseSlice from "./courseSlice.ts";

const createRootReducer = () =>
    combineReducers({
        [rootApi.reducerPath]: rootApi.reducer,
        user: userSlice,
        language: languageSlice,
        course: courseSlice,
    })

export default createRootReducer