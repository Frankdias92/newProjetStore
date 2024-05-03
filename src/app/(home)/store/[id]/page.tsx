'use client'


import { DataProps } from "@/app/admin/home/[id]/page"
import { Section } from "@/components/detailsAdmin/section"
import { Tags } from "@/components/detailsAdmin/tags"
import { api } from "@/services/api"
import { Image } from "@nextui-org/react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"



export default function StoreProductId() {
    const [data, setData] = useState<DataProps>()
    const params = useParams()

    console.log(data)

    useEffect(() => {
        async function FetchProductId() {
            const response = await api.get(`http://localhost:3333/allproducts/${params.id}`)
            const productId = response.data[0]
            setData(productId)
        }

        FetchProductId()
    }, [params])
    
    return (
        <section className="flex flex-col w-full min-h-screen py-10">
            <div className="grid grid-cols-2 w-3/4 h-full justify-self-start items-start mt-0 m-auto">
                <Section title={String(data?.title)}>
                    <Image
                        isZoomed
                        width={650}
                        height={650}
                        alt={data?.title}
                        src={`${api.defaults.baseURL}/files/${data?.productIMG}`}
                        className="flex w-full h-[450px]"
                    />
                </Section>
                
                <div>
                    <span>{data?.description}</span>
                    <span className="flex gap-2">{data?.tags.map(tag => <Tags key={tag.id} title={tag.name}/>)}</span>
                    <span>{data?.price}</span>
                </div>
            </div>
        </section>
    )
}