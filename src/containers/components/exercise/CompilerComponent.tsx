import type {Exercise} from "../../../types/types.ts";
import CodeEditor from "../CodeEditor.tsx";

interface CompilerComponentProps {
    exercise: Exercise
}

const CompilerComponent = ({exercise}: CompilerComponentProps) => {
    return (
        <div className="p-4">
            <h1 className="fw-bold mb-3">{exercise.title}</h1>
            <p className="fs-5 text-secondary mb-4">{exercise.description}</p>
            <CodeEditor/>
        </div>
    );
};

export default CompilerComponent;