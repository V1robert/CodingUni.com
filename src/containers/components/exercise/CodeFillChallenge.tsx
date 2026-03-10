import {useState} from "react"
import type {Answer, Exercise} from "../../../types/types.ts";



export interface CodeFillChallengeProps {
    exercise: Exercise
}

export default function CodeFillChallenge({exercise}: CodeFillChallengeProps) {

    const [value, setValue] = useState<string>("")
    const [isCorrect, setIsCorrect] = useState<boolean>(false)

    const handleAnswerClick = ({id,text}:Answer) => {
        setValue(text)
        setIsCorrect(id === exercise.correctAnswerId)
    }

    const renderedCode = exercise.template?.replace("__", value ?? " ")

    return (
        <>

        {exercise.question}
        <div className="challenge-container">

            <div className="code-block">
        <pre>
          <code>{renderedCode}</code>
        </pre>
            </div>

            <div className="tokens">
                {exercise.answers?.map((answer:Answer) => (
                    <button
                        key={answer.id}
                        className="token"
                        onClick={() => handleAnswerClick(answer)}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>

            {isCorrect !== null && (
                <div>
                    {isCorrect ? "✅ Correct!" : "❌ Try again"}
                </div>
            )}

        </div>
            </>
    )
}
