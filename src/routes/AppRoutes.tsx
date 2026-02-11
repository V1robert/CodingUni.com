import {createBrowserRouter} from "react-router"
import HomePage from "../layout/HomePage.tsx";
import LanguageCourse from "../containers/components/LanguageCourse.tsx";
import Template from "../layout/Template.tsx";

export const AppRoutes = createBrowserRouter([
        {
            path: `/`,
            element:<Template/>,

            children: [
                {
                    index: true,
                    element: <HomePage/>,
                },
                {
                    path: "/courses/:language",
                    element: <LanguageCourse/>,
                }
            ]
        },
    ]
)


