import {ProgressBar} from "react-bootstrap";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import ButtonProdEner from "./common/ButtonProdEner.tsx";

interface ProgressBarComponentProps {
    now: number;
    onNext?: () => void;
    onPrev?: () => void;
    canNext?: boolean;
    canPrev?: boolean;
}

const ProgressBarComponent = ({now, onNext, onPrev, canNext, canPrev}: ProgressBarComponentProps) => {
    return (
        <div className="d-flex align-items-center gap-3 my-4 mx-auto w-100" style={{maxWidth: '600px'}}>
            <ButtonProdEner
                onClick={onPrev}
                disabled={!canPrev}
                className="btn-progress-arrow"
            >
                <SlArrowLeft size={18}/>
            </ButtonProdEner>

            <div className="flex-grow-1">
                <ProgressBar animated now={now} style={{height: "8px"}}/>
            </div>

            <ButtonProdEner
                onClick={onNext}
                disabled={!canNext}
                className="btn-progress-arrow"
            >
                <SlArrowRight size={18}/>
            </ButtonProdEner>
        </div>
    );
};

export default ProgressBarComponent;