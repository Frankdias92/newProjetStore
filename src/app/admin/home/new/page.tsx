'use client'

import { ButtonText } from "@/components/detailsAdmin/buttonText";
import { NewItem } from "@/components/detailsAdmin/newItem";
import { Section } from "@/components/detailsAdmin/section";
import { api } from "@/services/api";
// import { TextArea } from "@/components/admin/textArea";
// import { InputForm } from "@/components/inputForm";
import Link from "next/link";
import {  FormEvent, useState } from "react";


interface ProductsProps {
    id: string
    title: string
    description: string
    tags: any
    price: string
    urlProduct: string
    productIMG: File | string
    user_id?: string
}


export default function NewProduct() {
    const [products, setProducts] = useState<ProductsProps[]>([])

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [urlProduct, setUrlProduct] = useState<string>('')

    const [tags, setTags] = useState<string[]>([])
    const [newTags, setNewTags] = useState('')


    const [productIMG, setProductIMG] = useState<File | string>('')

    
    function handleAddTags() {
        setTags(prevState => [...prevState, newTags])

        setNewTags('')
    }
    
    function handleRemoveTag(deleted: string) {
        setTags(prevState => prevState.filter(item => item !== deleted))

    }
    
    
    async function handleAddProduct() {
        if (!title) {
            return alert('Digite o nome do produto!')
        }

        if (newTags) {
            return alert('Adicione a tag do produto, ou descarte.')
        }
        
        await api.post('http://localhost:3333/products', {
            title,
            description,
            tags,
            price,
            urlProduct,
            productIMG
        })
        alert('Produto adicionado com sucesso!')
    }

    function handleAddPhotoProduct(e: FormEvent<HTMLInputElement>) {
        const file = e.currentTarget.files?.[0]
        if (file) {
            setProductIMG(file)
        }
    }
    
    


    return (
        <section className="flex flex-col items-center w-full justify-center pb-20">
            
            <main className="flex flex-col w-[40%] gap-6 rounded-xl bg-store-bgDasboard p-20">
                <span className="flex w-full items-center justify-between mb-6">
                    <h1 className="font-galantic tracking-widest text-2xl">Adicionar produto</h1>
                    <Link href={'/home'}>
                        voltar
                    </Link>
                </span>

                <form className="flex flex-col w-full m-auto gap-4">
                        <input 
                            type="file"
                            name='avatar'
                            className="absolute w-full h-full rounded-full opacity-0 top-0 z-0" 
                            accept="image/png, image/jpeg"
                            onChange={handleAddPhotoProduct}
                            
                        />
                    <input
                        type="text"
                        placeholder="Nome"
                        name='title'
                        className="flex w-full h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                            invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Adicione descrição"
                        className="w-full h-[150px] border-0 p-4 resize-none placeholder:opacity-30
                        order-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                        invalid:text-red-600 rounded-lg outline-none"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Section title="Adicionar Link">
                        <input 
                            type="text"
                            placeholder="Link do produto"
                            name='urlProduct'
                            className="flex w-full h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                                invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
                            onChange={(e) => setUrlProduct(e.target.value)}
                        />
                    </Section>

                    <Section title="Valor do produto" >
                        <input 
                            type="number"
                            placeholder="Valor do item"
                            name='price'
                            className="flex w-full h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                                invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    
                    </Section>

                    <Section title="Adionar Tags">
                        <div className="grid grid-cols-2 gap-4">
                            {tags.map((item, index) => {
                                return (
                                    <NewItem 
                                        key={String(index)}
                                        value={item}
                                        onClick={() => handleRemoveTag(item)}
                                        // placeholder='tag...'
                                    />
                                )
                            })}

                            <NewItem 
                                isNew
                                value={newTags}
                                placeholder='tag...'
                                onChange={(e) => setNewTags(e.target.value)}
                                onClick={handleAddTags}
                            />
                        </div>
                    </Section>

                    <ButtonText title="Salvar" onClick={handleAddProduct}/>
                    
                </form>


            </main>

        </section>
    )
}