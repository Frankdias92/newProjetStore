import { ReactNode } from "react"

interface SectionsProps {
    title: string
    children: ReactNode
}

export function Section({ title, children }: SectionsProps) {

    return (
        <div className="flex flex-col w-full gap-2">
            <h2>{title}</h2>
            {children}
        </div>
    )
}