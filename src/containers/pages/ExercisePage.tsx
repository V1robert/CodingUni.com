import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setIsStudying} from "../../config/store/slices/userSlice.ts";
import {useGetExerciseQuery} from "../../api/exerciseApi.ts";
import {useParams} from "react-router";
import type {AppState} from "../../config/store/store.tsx";

const ExercisePage = () => {

    const dispatch = useDispatch()
    const {programmingLanguage, courseId, lessonId} = useParams();
    const userPreferredLanguage = useSelector((state: AppState) => state.user.preferredLanguage);

    const {data: exercise} = useGetExerciseQuery({
        programmingLanguage: programmingLanguage as string,
        courseId: Number(courseId),
        lessonId: Number(lessonId),
        language: userPreferredLanguage
    })
    console.log(exercise)
    useEffect(() => {
        // 1. When the component mounts, set isStudying to true
        dispatch(setIsStudying(true));
        // It runs automatically when the component unmounts (user leaves the page).
        return () => {
            dispatch(setIsStudying(false));
        };
    }, [dispatch]);


    return (
        <div>
            <h1>Exercise Page</h1>
        </div>
    );
};

export default ExercisePage;