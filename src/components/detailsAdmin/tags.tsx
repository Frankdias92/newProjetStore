import { ReactNode } from "react"

interface TagsProps {
    title: string
}

export function Tags({ title, ...rest }:TagsProps) {

    return (
        <div className="flex w-fit px-3 py-1 text-store-secondary antialiased bg-store-orange rounded-xl" 
            {...rest}
        >
            {title}
        </div>
    )
}