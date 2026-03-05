import type {ButtonHTMLAttributes} from "react";

type ButtonProdEnerSkeletonProps = ButtonHTMLAttributes<HTMLButtonElement>

const ButtonProdEnerSkeleton = ({className, style, ...rest}: ButtonProdEnerSkeletonProps) => {
    return (
        <button
            type="button"
            className={`placeholder-glow disabled border-0 ${className || ""}`}
            disabled
            aria-disabled="true"
            style={{cursor: 'default', pointerEvents: 'none', ...style}}
            {...rest}
        >
            <span
                className="placeholder col-12 rounded"
                style={{
                    height: '1.5em',
                    display: 'block',
                    backgroundColor: 'currentColor',
                    opacity: 0.2
                }}
            ></span>
        </button>
    );
};

export default ButtonProdEnerSkeleton;
