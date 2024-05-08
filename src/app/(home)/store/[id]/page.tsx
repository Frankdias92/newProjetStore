'use client'


import { DataProps } from "@/app/admin/home/[id]/page"
import { Section } from "@/components/detailsAdmin/section"
import { Tags } from "@/components/detailsAdmin/tags"
import { api } from "@/services/api"
import { Button, Image } from "@nextui-org/react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"



export default function StoreProductId() {
    const [data, setData] = useState<DataProps>()
    const params = useParams()


    console.log('data', data)
    console.log('params', params)
    useEffect(() => {
        async function FetchProductId() {
            const response = await api.get(`/allproducts/${params.id}`)
            const productId = response.data[0]
            setData(productId)
        }

        FetchProductId()
    }, [params])
    
    return (
        <section className="flex flex-col w-full min-h-screen py-10 bg-store-orange">
            <div className="flex flex-col w-3/4 h-full justify-center items-center m-auto">
                <div className="flex w-full relative z-0">
                    <div className="flex w-fit bg-transparent shadow-large rounded-xl">
                        <Image
                            isZoomed
                            width={1080}
                            height={768}
                            alt={data?.title}
                            src={`${api.defaults.baseURL}/files/${data?.productIMG}`}
                            className="flex w-full h-[550px] justify-center items-center  shadow-medium"
                        />
                    </div>
                
                    <div className="flex flex-col w-[390px] h-[350px] absolute z-10 right-0 top-0 gap-6 translate-y-1/4">
                        <div className="flex flex-col w-full h-fit bg-store-primary rounded-xl shadow-large">
                            <section className="grid grid-cols-2 w-full h-full p-6 gap-4">
                                <div className="text-center">
                                    <Section title="Produto">
                                        <Image
                                            isZoomed
                                            width={1080}
                                            height={768}
                                            alt={data?.title}
                                            src={`${api.defaults.baseURL}/files/${data?.productIMG}`}
                                            className="flex w-full h-[80px] justify-center items-center"
                                        />
                                    </Section>
                                </div>

                                <div className="flex-1 w-full h-full text-center items-center relative">
                                    <Section title="Preço">
                                        <span className="flex flex-col self-end w-full h-full text-center font-galantic tracking-widest pt-6">
                                            <span className="flex text-sm justify-center">R$ <span className="text-4xl">{data?.price}</span></span>
                                        </span>
                                    </Section>
                                </div>
                            </section>

                            <div className="flex flex-col w-full px-6 gap-4 pb-4">
                                <span className="flex gap-2 ">{data?.tags.map(tag => <Tags key={tag.id} title={tag.name}/>)}</span>
                                <span className="">{data?.description}</span>
                            </div>
                        </div>


                        <Button className="flex w-full py-8 px-5 m-auto font-draco tracking-widest text-xl hover:text-store-primary bg-store-orange shadow-large"
                            
                        >
                            <Link href={`http://${data?.urlProduct}`} target="_blank">
                                COMPRAR
                            </Link>
                        </Button>
                    </div>


                </div>

            </div>
        </section>
    )
}