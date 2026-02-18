import type {ReactNode} from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ButtonProdEnerProps {
    name?: string
    title?: string
    type: "submit" | "reset" | "button"
    className: string
    callback?: (value?: any) => void
    icon?: string
    paddingIcon?: string
    disabled?: boolean
    children?: ReactNode
}


const ButtonProdEner = ({
                            title,
                            type,
                            className,
                            callback,
                            icon,
                            name,
                            paddingIcon,
                            disabled,
                            children
                        }: ButtonProdEnerProps) => {
    return (
        <button title={title} type={`${type}`} disabled={disabled} className={className} onClick={callback}>
            {name}
            {children}
            {icon && <i className={icon + ` ${paddingIcon}`}></i>}
        </button>
    )
}

export default ButtonProdEner
