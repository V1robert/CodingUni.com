import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setIsStudying} from "../../config/store/slices/userSlice.ts";
import {useGetExerciseQuery} from "../../api/exerciseApi.ts";
import {useNavigate, useParams} from "react-router";
import type {AppState} from "../../config/store/store.tsx";
import TheoryComponent from "../components/exercise/TheoryComponent.tsx";
import type {Exercise} from "../../types/types.ts";
import CompilerComponent from "../components/exercise/CompilerComponent.tsx";
import QuizComponent from "../components/exercise/QuizComponent.tsx";
import ProgressBarComponent from "../components/ProgressBarComponent.tsx";
import {setExerciseProgress} from "../../config/store/slices/exerciseSlice.ts";
import {SlArrowLeft} from "react-icons/sl";
import ButtonProdEner from "../components/common/ButtonProdEner.tsx";

const ExercisePage = () => {

    const dispatch = useDispatch()
    const correctAnswer = useSelector((state: AppState) => state.exercise.isCorrectAnswer)
    const navigate = useNavigate();
    const {programmingLanguage, courseId, lessonId} = useParams();
    const userPreferredLanguage = useSelector((state: AppState) => state.user.preferredLanguage);
    const exerciseProgress = useSelector((state: AppState) => state.exercise.exerciseProgress);
    const {data: exercises} = useGetExerciseQuery({
        programmingLanguage: programmingLanguage as string,
        courseId: Number(courseId),
        lessonId: Number(lessonId),
        language: userPreferredLanguage
    })

    function disableButton(exerciseLength: number) {
        return !correctAnswer && exerciseProgress >= exerciseLength - 1
    }

    const handleNext = () => {
        if (exercises && exerciseProgress < exercises.length - 1) {
            dispatch(setExerciseProgress(exerciseProgress + 1));
        }
    };

    const handlePrev = () => {
        if (exerciseProgress > 0) {
            dispatch(setExerciseProgress(exerciseProgress - 1));
        }
    };

    function renderExercise() {
        if (!exercises) {
            return (
                <div className="text-center py-5">
                    <h1>Loading...</h1>
                </div>
            )
        }
        const currentExercise: Exercise = exercises[exerciseProgress];

        if (currentExercise) {
            switch (currentExercise.type) {
                case "theory":
                    return <TheoryComponent exercise={currentExercise}/>
                case "compiler":
                    return <CompilerComponent exercise={currentExercise}/>
                case "quiz":
                    return <QuizComponent exercise={currentExercise}/>
                default:
                    return (
                        <div className="text-center py-5">
                            <h1>Unknown exercise type: {currentExercise.type}</h1>
                        </div>
                    )
            }
        }
        return (
            <div className="text-center py-5">
                <h1>Exercise not found</h1>
            </div>
        )
    }

    useEffect(() => {
        // 1. When the component mounts, set isStudying to true
        dispatch(setIsStudying(true));
        // It runs automatically when the component unmounts (the user leaves the page).
        return () => {
            dispatch(setIsStudying(false));
        };
    }, [dispatch]);


    return (
        <div className="position-relative min-vh-100 d-flex flex-column py-3">
            <ButtonProdEner
                onClick={() => navigate(-1)}
                className="position-absolute top-0 start-0 m-3 btn-back-custom text-black "
            >
                <SlArrowLeft size={20} className="me-2"/>
                <span className="fw-bold">Go back</span>
            </ButtonProdEner>

            <div className="container d-flex flex-column flex-grow-1 pt-4">
                {exercises && exercises.length > 0 && exercises[exerciseProgress].type !== 'compiler' && (
                    <ProgressBarComponent
                        now={((exerciseProgress + 1) / exercises.length) * 100}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        canNext={exerciseProgress < exercises.length - 1}
                        canPrev={exerciseProgress > 0}
                    />
                )}
                <div className="flex-grow-1">
                    {renderExercise()}
                </div>
                {exercises && (
                    <div className="d-flex justify-content-center my-4">
                        <ButtonProdEner
                            className="btn btn-primary btn-lg px-5 py-2"
                            onClick={handleNext}
                            disabled={disableButton(exercises.length)}
                        >
                            Continue
                        </ButtonProdEner>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExercisePage;
