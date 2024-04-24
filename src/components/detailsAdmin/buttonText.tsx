

interface ButtonTextProps {
    title: string
    onClick?: () => void
    rest?: () => void
}

export function ButtonText({ title, onClick, ...rest}: ButtonTextProps) {

    return (
        <button
            onClick={onClick}
            {...rest}
            type="button"
        >
            {title}
        </button>
    )
}