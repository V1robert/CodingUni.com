import './css/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {persistor, storeApp} from "./config/store/store.tsx";
import {IS_SVILUPPO, TEST} from "./util/Constants.ts";
import {RouterProvider} from "react-router/dom";
import {AppRoutes} from "./routes/AppRoutes.tsx";
import {PersistGate} from "redux-persist/integration/react";

console.log(IS_SVILUPPO)
console.log(TEST)
const rootElement = document.getElementById("root")!
const root = createRoot(rootElement)
root.render(
    <Provider store={storeApp}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={AppRoutes}/>
        </PersistGate>
    </Provider>
)
