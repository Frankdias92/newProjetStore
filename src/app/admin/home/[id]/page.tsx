'use client'

import { Tags } from "@/components/detailsAdmin/tags";
import { Section } from "@/components/detailsAdmin/section";

import { api } from "@/services/api";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

interface DataProps {
    id: number
    title: string
    description?: string
    price: number
    urlProduct: string
    productIMG: string
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
    const router = useRouter()

    async function handleRemove() {
        const confirm = window.confirm('Deseja remover a producto?')

        if (confirm) {
            await api.delete(`/products/${data?.id}`)
            router.push('/admin/home')
        }
    }
    

    useEffect(() => {
        async function fetchProducts() {
            const response = await api.get(`http://localhost:3333/products?user_id=1&id=&title=${params.id}`)
            const responseData = response.data[0]
            setData(responseData)
            console.log(response)
        }
        
        fetchProducts()
    }, [params])
    

    return (
        <div className="flex w-full flex-col items-center min-h-screen py-10 bg-store-bgDasboard">
            <div className="flex flex-col items-center gap-4 w-3/4 justify-start">
                
                {data && 
                    <div className="flex flex-col items-center w-3/4 gap-4 h-full px-6 py-10 rounded-3xl bg-store-bgDasboard-Secondary/75 duration-75 relative">
                        <div className="flex flex-col w-full px-10 gap-7 items-start">
                            <span className="text-4xl font-roboto font-bold">
                                {data.title}
                            </span>
                            <Image
                                width={345}
                                height={171}
                                alt={data.title}
                                src={`${api.defaults.baseURL}/files/${data.productIMG}`}
                                className="flex w-[345px] h-[171px] rounded-lg overflow-hidden"
                            />
                            <span className="text-lg font-roboto">
                                {data.description}
                            </span>

                            <Section title="Tags:">
                                {data.tags && data.tags.map(tag => (
                                        <Tags key={tag.id} title={tag.name} />
                                ))}
                            </Section>

                            <Section title="urlProduct:">
                                <span className="text-store-secondary/80">
                                    {data.urlProduct}
                                </span>
                            </Section>

                            <Section title="Price">
                                <span className="text-2xl text-store-secondary/80 font-bold">
                                    <span className="text-base font-normal">R$:</span> {String(data.price)}
                                </span>
                            </Section>
                        </div>

                        <Link href={'/admin/home'}
                            className="flex w-fit mt-10 py-3 px-7 text-xl items-center rounded-xl hover:drop-shadow-2xl hover:text-store-orange"
                        >
                            Voltar
                        </Link>
                        
                        <button 
                            onClick={handleRemove}
                            className="absolute flex top-6 right-6 hover:text-red-300"
                        >
                            Excluir Produto
                        </button>
                    </div>
                }

            </div>
        </div>
    );
}
