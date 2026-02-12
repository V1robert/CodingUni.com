import {createBrowserRouter} from "react-router"
import HomePage from "../containers/pages/HomePage.tsx";
import Template from "../layout/Template.tsx";
import CoursePage from "../containers/pages/CoursePage.tsx";

export const AppRoutes = createBrowserRouter([
        {
            path: `/`,
            element: <Template/>,

            children: [
                {
                    index: true,
                    element: <HomePage/>,
                },
                {
                    path: "/courses/:language",
                    element: <CoursePage/>,
                }
            ]
        },
    ]
)


