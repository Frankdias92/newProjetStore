import { useState } from "react"


interface ButtonTextProps {
    title: string
    onClick?: () => void
    isActive?: boolean
    rest?: () => void
}

export function ButtonText({ title, onClick, isActive, ...rest}: ButtonTextProps) {


    return (
        <button
            onClick={onClick}
            {...rest}
            type="button"
            className={`${isActive ? 'text-store-orange' : '' }`}
        >
            {title}
        </button>
    )
}