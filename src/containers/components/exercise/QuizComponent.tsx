import {useEffect, useState} from "react";
import type {Exercise} from "../../../types/types.ts";
import ButtonProdEner from "../common/ButtonProdEner.tsx";
import {useLazyGetCheckExerciseAnswerQuery} from "../../../api/exerciseApi.ts";
import ButtonProdEnerSkeleton from "../common/ButtonProdEnerSkeleton.tsx";
import {useDispatch} from "react-redux";
import {setCorrectAnswer} from "../../../config/store/slices/exerciseSlice.ts";

interface QuizComponentProps {
    exercise: Exercise
}

const QuizComponent = ({exercise}: QuizComponentProps) => {
    const [trigger, {data, isFetching}] = useLazyGetCheckExerciseAnswerQuery()
    const [selectedAnswerId, setSelectedAnswerId] = useState<number>(-1)
    const dispatch = useDispatch()

    function handleAnswer(answerId: number) {
        const isSelected = selectedAnswerId === answerId;

        if (isSelected) {
            if (data?.correct) {
                dispatch(setCorrectAnswer(true))
            }
            return data?.correct ? 'btn btn-success' : 'btn btn-danger';

        } else {
            return 'btn btn-primary'
        }
    }

    useEffect(() => {
        return () => {
            dispatch(setCorrectAnswer(false))
        }
    });

    async function checkAnswer(answerId: number) {
        setSelectedAnswerId(answerId);

        await trigger({
            languageId: exercise.languageId ?? 0,
            courseId: exercise.courseId ?? 0,
            lessonId: exercise.lessonId ?? 0,
            exerciseId: exercise.exerciseId ?? 0,
            userAnswerId: answerId
        })

    }

    function renderSkeleton() {
        return (
            <>
                <ButtonProdEnerSkeleton/>
                <ButtonProdEnerSkeleton/>
                <ButtonProdEnerSkeleton/>
                <ButtonProdEnerSkeleton/>
            </>
        )

    }


    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-4"
             style={{minHeight: '60vh'}}>
            <h2 className="fw-bold mb-5 text-center">{exercise?.question}</h2>

            <div className="w-100 d-flex flex-column gap-3" style={{maxWidth: '30rem'}}>
                {isFetching ? renderSkeleton() :
                    exercise?.answers?.map((answer, index) => {

                        const buttonClass: string = handleAnswer(answer.id)

                        return (

                            <ButtonProdEner
                                key={answer.id}
                                className={`${buttonClass} py-3 px-4 text-start fw-semibold`}
                                onClick={async () => await checkAnswer(answer.id)}
                                disabled={data?.correct}

                            >
                                <span className="me-3">{index + 1}.</span>
                                {answer.text}
                            </ButtonProdEner>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default QuizComponent;