import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Tags } from "./tags";
import { ReactNode } from "react";

export interface dataProps {
    data: {
        title: string
        tagsData?: {
            id: number
            name: string
        }[]
    }
    children: ReactNode
}

export function Products({ data, children,  ...rest }: dataProps) {

    return (
        <div
            className="flex w-full"
            {...rest}
        >
            <div className="flex flex-col w-full gap-4 relative">
                <h2 className="text-xl font-roboto font-bold tracking-wider">
                    {data.title}
                </h2>

                <div 
                    className="flex flex-row w-full gap-2 pb-4"
                >
                    {
                        data && data.tagsData && data.tagsData.map(tag => {
                            return (
                                    <Tags 
                                        key={tag.id}
                                        title={tag.name}
                                    />

                                )
                            })
                    }
                </div>
            </div >

                {children}
        </div>
    )
}