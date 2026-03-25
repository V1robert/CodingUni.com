import {createBrowserRouter} from "react-router"
import Template from "../layout/Template.tsx";
import CoursePage from "../containers/pages/CoursePage.tsx";
import LessonPage from "../containers/pages/LessonPage.tsx";
import ExercisePage from "../containers/pages/ExercisePage.tsx";
import Login from "../containers/pages/Login.tsx";
import HomePage from "../containers/pages/HomePage.tsx";

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
                    path: ":programmingLanguage/courses/",
                    element: <CoursePage/>,

                },
                {
                    path: ":programmingLanguage/courses/:courseId/lessons",
                    element: <LessonPage/>,
                },
                {
                    path: ":programmingLanguage/courses/:courseId/lessons/:lessonId/exercise",
                    element: <ExercisePage/>
                },
                {
                    path: "Login",
                    element: <Login/>
                }

            ]
        },
    ]
)
