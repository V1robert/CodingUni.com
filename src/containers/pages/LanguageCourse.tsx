import {useParams} from "react-router-dom"
import {useNavigate} from "react-router";
import Course from "../components/Course.tsx";

const LanguageCoursePage = () => {
    const {language} = useParams<{ language: string }>()

    const navigate = useNavigate()
    return (
        <>
            <div>Welcome to the {language} course!</div>
             <Course/>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}
export default LanguageCoursePage