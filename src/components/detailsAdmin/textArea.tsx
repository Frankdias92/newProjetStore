import { ReactNode } from "react"

interface TextAreaProps {
    value?: ReactNode
    placeholder?: string
    name?: string
    
}

export function TextArea({ value, ...rest}: TextAreaProps) {

    return (
        <textarea {...rest}
            className="w-full h-[150px] border-0 p-4 resize-none placeholder:opacity-30
            order-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
            invalid:text-red-600 rounded-lg outline-none"
        >
            {value}
        </textarea>
    )
}