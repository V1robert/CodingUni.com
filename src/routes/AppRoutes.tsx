import {createBrowserRouter, Outlet} from "react-router"

export const AppRoutes =createBrowserRouter([
    {
        path: `/`,
        element: (
            <>
                <h1>Welcome</h1>
                <Outlet/>
            </>
        ),
        children: [
            {
                index: true,
                element: <h1>children</h1>,
            },
            {
                element: <h1>404</h1>
            }
        ]
    },
]
)


