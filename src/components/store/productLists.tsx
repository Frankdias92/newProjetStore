'use client'

import {Button, Image, ScrollShadow} from "@nextui-org/react"
import { useEffect, useState } from "react"
import { Tags } from "../detailsAdmin/tags"
import { api } from "@/services/api"
import axios from "axios"
import Link from "next/link"


interface ProductsProps {
    id: number
    title: string
    description: string
    price: number
    urlProduct: string
    productIMG: string
    category: string
    tags?:{
        id: number
        name: string
    }[]
}

interface CategoryProps {
    filterCategory: string
}

export function ProductList({filterCategory}: CategoryProps) {
    const [data, setData] = useState<ProductsProps[]>([])
    console.log(data.map(item => item.urlProduct.split('/')[0]))
    

    const dataFeature = [
        {
            id: 1,
            productName: 'Logitech G29',
            productDescriptions: 'Melhor volante de entrada pra quem procura algo novo e com garantia. O volante tem um Force Feedback que já dá uma boa noção de como o carro se comporta e os pedais tem embreagem',
            price: 'R$ 1817,05',
            image: 'https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_SL1500_.jpg'
        },
        {
            id: 2,
            productName: ' Thrustmaster T300 RS GT Edition',
            productDescriptions: 'O volante Force Feedback Thrustmaster T300RS GT permite aos jogadores mergulharem verdadeiramente no mundo das corridas de automóveis e aperfeiçoarem as suas técnicas para melhorarem o seu desempenho.',
            price: 'R$ 3.299,90',
            image: 'https://images.kabum.com.br/produtos/fotos/150106/volante-e-pedais-thrustmaster-t300-rs-gt-edition-para-pc-ps4-ps3-4160644_1616590119_gg.jpg'
        },
        {
            id: 3,
            productName: ' Thrustmaster T300 RS GT Edition',
            productDescriptions: 'O volante Force Feedback Thrustmaster T300RS GT permite aos jogadores mergulharem verdadeiramente no mundo das corridas de automóveis e aperfeiçoarem as suas técnicas para melhorarem o seu desempenho.',
            price: 'R$ 3.299,90',
            image: 'https://images.kabum.com.br/produtos/fotos/150106/volante-e-pedais-thrustmaster-t300-rs-gt-edition-para-pc-ps4-ps3-4160644_1616590119_gg.jpg'
        }
    ]

    useEffect(() => {
        async function handleGetProducts() {
            const response = await axios.get(`http://localhost:3333/allproducts`)
            const products: ProductsProps[] = response.data

            if (filterCategory) {
                const filterProducts = products.filter(item => item.category === filterCategory)
                setData(filterProducts)
            } else {
                setData(products)
            }
    
        }
        handleGetProducts()

    }, [filterCategory])


    return (
        <div className="flex w-full gap-5">

            {data.map((item) => {
                return (

                    <div key={item.id} className="flex flex-col items-start w-[353px] gap-4 h-[509px] px-6 py-5 rounded-3xl hover:bg-neutral-950/60 duration-75 relative">
                            <Image
                                isZoomed
                                width={345}
                                alt={item.title}
                                src={`${api.defaults.baseURL}/files/${item.productIMG}`}
                                className="flex w-[345px] h-[171px]"
                            />


                        <div className="flex flex-col gap-3 items-start">
                            <span className="text-4xl font-galantic">
                                {item.title}
                            </span>
                            <span className="flex text-sm font-roboto gap-2">
                                {item.tags?.map(tag => {
                                    return (
                                        <Tags key={tag.id} title={tag.name}/>
                                        )
                                    }
                                )}       
                            </span>
                            <span className="text-lg font-roboto">
                                <ScrollShadow 
                                    hideScrollBar 
                                    offset={100}
                                    orientation="horizontal" 
                                    className="max-w-[393px] max-h-[135px]"
                                >
                                    {item.description}
                                </ScrollShadow>
                            </span>
                            <span className="flex w-full  px-5 justify-between items-center font-galantic tracking-widest text-2xl absolute bottom-5 left-0">
                                {item.price}

                                <Button className="flex py-2 px-5 font-roboto text-sm font-bold bg-store-orange">
                                    <Link href={`/store/${String(item.id)}`}>
                                        COMPRAR
                                    </Link>
                                </Button>

                            </span>
                        </div>

                    </div>
                    
                )
            })}
            
        </div>
    )
}