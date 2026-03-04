import type {Exercise} from "../../../types/types.ts";


interface LessonComponentProps {
    exercise: Exercise;
}

const TheoryComponent = ({exercise}: LessonComponentProps) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center p-4"
             style={{minHeight: '60vh'}}>
            <h1 className="fw-bold mb-4">{exercise.title}</h1>
            <p className="fs-5 text-secondary mx-auto" style={{maxWidth: '42rem'}}>{exercise.description}</p>
        </div>
    );
};

export default TheoryComponent;