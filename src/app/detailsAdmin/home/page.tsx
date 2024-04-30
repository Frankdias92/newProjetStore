'use client'

import { ButtonText } from "@/components/detailsAdmin/buttonText"
import { Products } from "@/components/detailsAdmin/products"
import { Section } from "@/components/detailsAdmin/section"
import { api } from "@/services/api"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"

interface TagsProps {
    id: string
    name: string
    product_id: string
    user_id: string
}

interface TagSelectedProps {
    name: string
}

export interface ProductsProps {
    id: number
    title: string
    description?: string
    price: number
    urlProduct: string
    user_id: number
    tags?: {
        id: number
        name: string
        product_id?: number
        user_id?: number
    }[]
}

export default function HomePainel() {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState<ProductsProps[]>([])
    
    const [tags, setTags] = useState<TagsProps[]>([])
    const [tagsSelected, setTagsSelected] = useState<TagSelectedProps[]>([])


    
    function handleTagSelected(tagName: any) {
        if (tagName === 'all') {
            return setTagsSelected([])
        }
        
        const alreadySelected = tagsSelected.includes(tagName);

        console.log(alreadySelected)
        
        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tags => tags !== tagName);
            setTagsSelected(filteredTags);
        } else {
            setTagsSelected(prevState => [ ...prevState, tagName ]);
        }
    }
    
    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags')
            setTags(response.data)
        }
        
        fetchTags()
    },[])
    
    useEffect(() => {
        async function fetchProducts() {
            const response = await api.get(`/products?title=${search}&tags=${tagsSelected}`)
            setProducts(response.data)
        }
        
        fetchProducts()
    },[tagsSelected, search])



    



    return (
        <section className="flex w-3/4 m-auto py-10 min-h-screen justify-center relative">
            <aside className="flex flex-col justify-between w-1/4 rounded-tl-3xl rounded-bl-3xl bg-store-bgDasboard-Secondary z-0 px-6 py-10 gap-4">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <ul className="space-y-2 font-roboto font-thin">
                    <li 
                        className="w-full hover:scale-110 duration-75 hover:translate-x-5 hover:italic hover:drop-shadow-2xl"
                    >
                        <ButtonText 
                            title="Todos"
                            onClick={() => handleTagSelected('all')}
                            isActive={tagsSelected.length === 0}
                        />
                    </li>
                    
                    {tags && tags.map(item => {
                        return (
                            <li 
                            key={item.id}
                            className="w-full hover:scale-110 duration-75 hover:translate-x-5 hover:italic hover:drop-shadow-2xl"
                            >
                                <ButtonText 
                                    title={item.name}
                                    onClick={() => handleTagSelected(item.name)}
                                    isActive={tagsSelected.includes(item.name)}
                                />
                            </li>

                        )
                    })}
                </ul>

                <Link 
                    href={'/detailsAdmin/new'}
                    className="flex w-full py-5 px-4 items-center rounded-tl-xl rounded-bl-xl bg-store-dashboard-btn/50 hover:bg-store-dashboard-btn/80 hover:drop-shadow-2xl duration-75"
                >
                    <span className="font-roboto font-bold tracking-widest text-xl">
                        Criar
                    </span>
                </Link>
            </aside>

            <main className="flex flex-col w-3/4 rounded-3xl bg-store-bgDasboard z-10 -translate-x-6 px-6 py-10">
                <input 
                    type="search" 
                    placeholder="Procurar" 
                    className="w-2/6 py-2 pl-4 rounded-md"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex flex-col mt-5 gap-4">
                    <span></span>

                    <Section title="Todos os produtos">

                        {
                            products.map(product => {
                                
                                return (
                                    <Link key={product.id} href={`/detailsAdmin/home/${product.title}`} 
                                        className="flex flex-row justify-between w-full  rounded-lg px-4 py-2 bg-store-bgDasboard-Secondary/90 hover:bg-store-bgDasboard-Secondary duration-75"
                                    >
                                        <Products 
                                            key={String(product.id)}
                                            data={{
                                                title: product.title,
                                                tagsData: product.tags
                                            }} 
                                        >
                                            <span className="flex items-center gap-4 pr-6">
                                                <FaTrash className="text-red-600 hover:text-red-700 hover:scale-110 duration-75"/>
                                                <FaEdit className="hover:text-green-600 hover:scale-110 duration-75"/>
                                            </span>
                                        </Products>
                                    </Link>
                                    
                                )
                            })
                        }

                    </Section>



                </div>

            </main>
        </section>
    )
}