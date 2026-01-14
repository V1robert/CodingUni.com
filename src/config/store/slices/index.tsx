import { combineReducers } from "redux"
import {rootApi} from "../../../api/rootApi.ts";
import userSlice from "./userSlice.ts";

export type RootState = {
    [rootApi.reducerPath]: ReturnType<typeof rootApi.reducer>
}
const createRootReducer = () =>
    combineReducers({
        [rootApi.reducerPath]: rootApi.reducer,
        user: userSlice,

    })

export default createRootReducer