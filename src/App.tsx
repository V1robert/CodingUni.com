
import './App.css'
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {storeApp} from "./config/store/store.tsx";
import {IS_SVILUPPO, TEST} from "./util/Constants.ts";
import {RouterProvider} from "react-router/dom";
import {AppRoutes} from "./routes/AppRoutes.tsx";
console.log(IS_SVILUPPO)
console.log(TEST)
const rootElement = document.getElementById("root")!
const root = createRoot(rootElement)
root.render(
    <Provider store={storeApp}>
        <RouterProvider router={AppRoutes}>
        </RouterProvider>
    </Provider>
)
