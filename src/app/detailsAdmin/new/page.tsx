'use client'

import { ButtonText } from "@/components/detailsAdmin/buttonText";
import { NewItem } from "@/components/detailsAdmin/newItem";
import { Section } from "@/components/detailsAdmin/section";
import { TextArea } from "@/components/detailsAdmin/textArea";
import { InputForm } from "@/components/inputForm";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";


export default function NewProduct() {

    return (
        <section className="flex flex-col items-center w-full justify-center">
            
            <main className="flex flex-col w-1/3 gap-6">
                <span className="flex w-full items-center justify-between mb-6">
                    <h1 className="font-galantic tracking-widest text-2xl">Adicionar produto</h1>
                    <Link href={'/detailsAdmin/home'}>
                        voltar
                    </Link>
                </span>

                <form className="flex flex-col w-full m-auto gap-4">
                    <InputForm type="text" placeHolder="Nome" name=""/>

                    <TextArea  
                        placeholder='Descrição'
                    />

                    <Section title="Adicionar Link">
                        <InputForm type="text" placeHolder="Link do produto" name=""/>
                    </Section>

                    <Section title="Adionar Tags">
                        <div className="grid grid-cols-2 gap-4">
                            <NewItem 
                                value="Wheel"
                            />
                            <NewItem 
                                value=""
                                placeholder='Tag'
                                isNew
                            />
                        </div>
                    </Section>

                    <ButtonText title="Salvar"/>
                    
                </form>


            </main>

        </section>
    )
}