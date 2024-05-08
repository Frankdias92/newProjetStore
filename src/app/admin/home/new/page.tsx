'use client'

import { ButtonText } from "@/components/detailsAdmin/buttonText";
import { NewItem } from "@/components/detailsAdmin/newItem";
import { Section } from "@/components/detailsAdmin/section";
import { api } from "@/services/api";
import { Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
// import { TextArea } from "@/components/admin/textArea";
// import { InputForm } from "@/components/inputForm";
import Link from "next/link";
import {  FormEvent, useState } from "react";


export default function NewProduct() {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [urlProduct, setUrlProduct] = useState<string>('')
    const [tags, setTags] = useState<string[]>([])
    const [newTags, setNewTags] = useState('')
    const [category, setCategory] = useState('')
    

    const [imgProduct, setImgProduct] = useState<string>('')
    const [productIMG, setProductIMG] = useState<File |string>('')

    const categorys = 
    [
        'Brasil',
        'Logitech',
        'Volantes',
        'Reposição'
    ]


    function handleAddTags() {
        setTags(prevState => [...prevState, newTags])

        setNewTags('')
    }
    
    function handleRemoveTag(deleted: string) {
        setTags(prevState => prevState.filter(item => item !== deleted))

    }
    

    async function handleAddProduct() {
        try {
            if (!title) {
                alert('Digite o nome do produto!');
                return;
            }
    
            if (newTags) {
                alert('Adicione a tag do produto, ou descarte.');
                return;
            }
    
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('urlProduct', urlProduct);
            formData.append('price', price);
            formData.append('productIMG', productIMG);
            formData.append('category', category);
    
            tags.forEach(tag => formData.append('tags', tag));
    
            const response = await api.post('/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            return alert('Produto adicionado com sucesso!');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Erro ao adicionar o produto. Por favor, tente novamente.');
        }
    }
    
    async function handleUploadIMG(e: FormEvent<HTMLInputElement>) {
        const file = e.currentTarget.files?.[0]
        console.log(file)

        if (file) {
            setProductIMG(file)

            const imagePreview = URL.createObjectURL(file)
            setImgProduct(imagePreview)
        }
    }


    return (
        <section className="flex flex-col items-center w-full justify-center pb-20">
            
            <main className="flex flex-col w-[40%] gap-6 rounded-xl bg-store-bgDasboard p-20">
                <span className="flex w-full items-center justify-between mb-6">
                    <h1 className="font-galantic tracking-widest text-2xl">Adicionar produto</h1>
                    <Link href={'/admin/home'}>
                        voltar
                    </Link>
                </span>

                <form 
                    className="flex flex-col w-full m-auto gap-4"
                >
                    <input
                        name='title'
                        type="text"
                        placeholder="Nome"
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

                    {productIMG && 
                        <div className="flex w-[150px] h-[150px] justify-self-center  ">
                            <Image src={imgProduct} alt="" width={150} height={150} quality={80}
                                className="flex justify-self-center m-auto rounded-xl"
                            />
                        </div> }
                    <input 
                        type="file"
                        placeholder="Inserir link da imagem"
                        name='productIMG'
                        accept="image/png, image/jpeg"
                        onChange={handleUploadIMG}
                        className="flex w-full h-14 items-center justify-center mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                            invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
                    />

                    <Section title="Categoria do produto">
                        <Select 
                            name="category"
                            typeof="text"
                            label="Selecione uma categoria" 
                            className="w-full"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categorys.map((item) => (
                            <SelectItem key={item} value={item} >
                                {item}
                            </SelectItem>
                            ))}
                        </Select>
                    </Section>

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

                    <ButtonText title="Salvar" onClick={handleAddProduct} />                    
                </form>


            </main>

        </section>
    )
}