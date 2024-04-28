'use client'

import { ButtonText } from "@/components/detailsAdmin/buttonText";
import { Section } from "@/components/detailsAdmin/section";
import { Tags } from "@/components/detailsAdmin/tags";
import { api } from "@/services/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductsProps } from "../page";

interface DataProps {
    id: number
    title: string
    description?: string
    price: number
    urlProduct: string
    user_id: number
    tags: {
        id: number
        name: string
        product_id: number
        user_id: number
    }[]
}

export default function ProductId() {
    const [data, setData] = useState<DataProps>(); // Remove the array brackets

    const params = useParams()

    useEffect(() => {
        async function fetchProducts() {
            const response = await api.get(`http://localhost:3333/products?user_id=1&id=&title=${params.id}`)
            const responseData = response.data[0]
            setData(responseData)
        }
        
        fetchProducts()
    }, [params])
    

    return (
        <div className="flex w-full flex-col items-center min-h-screen py-10">
            <div className="flex flex-col gap-4 w-3/4 justify-start">
                <h1>Admin page</h1>

            {data && 
                <div className="flex flex-col items-center w-[393px] gap-4 h-[509px] px-6 py-5 rounded-3xl hover:bg-neutral-950/60 duration-75 relative">
                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-4xl font-galantic">
                            {data.title}
                        </span>
                        <span className="text-lg font-roboto">
                            {data.description}
                        </span>

                        <Section title="Tags:">
                            {data.tags && data.tags.map(tag => (
                                <Tags key={tag.id} title={tag.name} />
                            ))}
                        </Section>

                        <Section title="urlProduct:">
                            <Tags title={data.urlProduct}/>
                        </Section>

                        <Section title="Price">
                            <Tags title={String(data.price)}/>
                        </Section>
                    </div>

                    <Link href={'/detailsAdmin/home'}>
                        Voltar
                    </Link>
                </div>
            }

            <ButtonText title="Excluir Produto" />
            </div>
        </div>
    );
}
