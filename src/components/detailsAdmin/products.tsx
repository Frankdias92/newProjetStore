import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Tags } from "./tags";

export interface dataProps {
    data: {
        title: string
        tagsData?: {
            id: number
            name: string
        }[]
    }
    key: number
}

export function Products({ data, key,  ...rest }: dataProps) {

    return (
        <Link 
            href={`/detailsAdmin/home/${key}`} 
            className="flex bg-store-primary/35 rounded-lg px-4 py-2 hover:bg-store-primary/80 duration-75"
            {...rest}
        >
            <div className="flex flex-col w-full gap-4 relative">
                <h2 className="text-xl font-roboto font-bold tracking-wider">
                    {data.title}
                </h2>

                <div 
                    className="flex flex-row w-full gap-2"
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

                    <span className="flex absolute bottom-8 right-0 gap-4">
                        <FaTrash className="text-red-600 hover:text-red-700 hover:scale-110 duration-75"/>
                        <FaEdit className="hover:text-green-600 hover:scale-110 duration-75"/>
                    </span>
            </div >

        </Link>
    )
}