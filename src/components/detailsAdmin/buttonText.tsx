

interface ButtonTextProps {
    title: string
    rest?: () => void
}

export function ButtonText({ title, ...rest}: ButtonTextProps) {

    return (
        <button
            {...rest}
            type="button"
        >
            {title}
        </button>
    )
}