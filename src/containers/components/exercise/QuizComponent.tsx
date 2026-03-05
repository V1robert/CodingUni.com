import {useState} from "react";
import type {Exercise} from "../../../types/types.ts";
import ButtonProdEner from "../common/ButtonProdEner.tsx";

interface QuizComponentProps {
    exercise: Exercise
}

const QuizComponent = ({exercise}: QuizComponentProps) => {

    //const [trigger, {data}] = useLazyGetCheckExerciseAnswerQuery()
    const [selectedAnswerId, setSelectedAnswerId] = useState<number>(-1)
    const [isCorrect, setIsCorrect] = useState<boolean>(false)

    function checkAnswer(answerId: number) {
        setSelectedAnswerId(answerId);
        setIsCorrect(answerId === exercise.correctAnswerId)
        /*
        await trigger({
            languageId: exercise.languageId ?? 0,
            courseId: exercise.courseId ?? 0,
            lessonId: exercise.lessonId ?? 0,
            exerciseId: exercise.exerciseId ?? 0,
            userAnswerId: answerId
        })*/

    }


    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-4"
             style={{minHeight: '60vh'}}>
            <h2 className="fw-bold mb-5 text-center">{exercise?.question}</h2>

            <div className="w-100 d-flex flex-column gap-3" style={{maxWidth: '30rem'}}>
                {exercise?.answers?.map((answer, index) => {
                    const isSelected = selectedAnswerId === answer.id;

                    let buttonClass: string;
                    if (isSelected) {
                        buttonClass = isCorrect ? 'btn btn-success' : 'btn btn-danger';
                    } else {
                        buttonClass = 'btn btn-primary'
                    }

                    return (
                        <ButtonProdEner
                            key={answer.id}
                            className={`${buttonClass} py-3 px-4 text-start fw-semibold`}
                            onClick={() => checkAnswer(answer.id)}

                        >
                            <span className="me-3">{index + 1}.</span>
                            {answer.text}
                        </ButtonProdEner>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizComponent;