
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
            type="button"
            className={`${isActive ? 'text-store-orange' : '' }`}
            {...rest}
            >
            {title}
        </button>
    )
}