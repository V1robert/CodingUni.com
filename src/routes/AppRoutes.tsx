import {createBrowserRouter, Outlet} from "react-router"
import AppNavbar from "../layout/AppBar.tsx";
import HomePage from "../layout/HomePage.tsx";
import LanguageCourse from "../containers/components/LanguageCourse.tsx";

export const AppRoutes = createBrowserRouter([
        {
            path: `/`,
            element: (
                <>
                    <AppNavbar/>
                    <Outlet/>
                </>
            ),
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


