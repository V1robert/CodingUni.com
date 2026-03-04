import {ProgressBar} from "react-bootstrap";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import ButtonProdEner from "./ButtonProdEner.tsx";

interface ProgressBarComponentProps {
    now: number;
    onNext?: () => void;
    onPrev?: () => void;
    canNext?: boolean;
    canPrev?: boolean;
}

const ProgressBarComponent = ({now, onNext, onPrev, canNext, canPrev}: ProgressBarComponentProps) => {
    return (
        <div className="d-flex align-items-center gap-3 my-4">
            <ButtonProdEner
                onClick={onPrev}
                disabled={!canPrev}
                className="btn-progress-arrow"
            >
                <SlArrowLeft size={24}/>
            </ButtonProdEner>

            <div className="flex-grow-1">
                <ProgressBar animated now={now}/>
            </div>

            <ButtonProdEner
                onClick={onNext}
                disabled={!canNext}
                className="btn-progress-arrow"
            >
                <SlArrowRight size={24}/>
            </ButtonProdEner>
        </div>
    );
};

export default ProgressBarComponent;