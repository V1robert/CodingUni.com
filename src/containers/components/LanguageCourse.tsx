import {useParams} from "react-router-dom"
import {useNavigate} from "react-router";

const LanguageCoursePage = () => {
    const {language} = useParams<{ language: string }>()
    const navigate = useNavigate()
    return (
        <>
        <div>Welcome to the {language} course!</div>
            <button onClick={() => {navigate(-1)}}>Back</button>
        </>
    )
}
export default LanguageCoursePage