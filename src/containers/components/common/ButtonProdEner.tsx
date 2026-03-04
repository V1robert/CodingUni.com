import type {ButtonHTMLAttributes, MouseEvent, ReactNode} from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ButtonProdEnerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name?: string
    title?: string
    callback?: (value?: any) => void
    icon?: string
    paddingIcon?: string
    children?: ReactNode
}


const ButtonProdEner = ({
                            title,
                            className,
                            callback,
                            onClick,
                            icon,
                            name,
                            paddingIcon,
                            children,
                            ...rest
                        }: ButtonProdEnerProps) => {

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (callback) callback(e);
        if (onClick) onClick(e);
    };

    return (
        <button
            type="button"
            {...rest}
            title={title}
            className={className}
            onClick={handleClick}
        >
            {name}
            {children}
            {icon && <i className={icon + ` ${paddingIcon}`}></i>}
        </button>
    )
}

export default ButtonProdEner
