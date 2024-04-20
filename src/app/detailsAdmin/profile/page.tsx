'use client'

import { ButtonText } from "@/components/detailsAdmin/buttonText";
import { InputForm } from "@/components/inputForm";
import { Avatar } from "@nextui-org/react";
import { MdAddAPhoto } from "react-icons/md";

export default function Profile() {

    return (
        <section className="flex w-full min-h-screen justify-center py-10">
            <div className="flex flex-col w-3/4 items-center">

                <span className="relative flex pt-4 -translate-y-1/4">
                    <Avatar 
                        src="https://i.pravatar.cc/150?u=a04258114e29026708c" 
                        className="w-35 h-35 text-large"
                    />
                    <button className="flex items-center justify-center w-12 h-12 rounded-full p-2 bg-store-orange hover:bg-store-orange/90 duration-75 absolute bottom-4 right-4">
                        <MdAddAPhoto className="flex z-10 text-2xl"/>
                    </button>
                </span>

                <form className="flex flex-col items-center gap-2">
                    <InputForm 
                        placeHolder="Nome"
                        type="text"
                    />
                    <InputForm 
                        placeHolder="E-mail"
                        type="email"
                    />

                    <span className="flex flex-col opacity-50 focus-within:opacity-100 mt-4">
                        <InputForm 
                            placeHolder="Senha"
                            type="password"
                            />

                        <InputForm 
                            placeHolder="Nova Senha"
                            type="password"
                        />
                    </span>

                    <ButtonText title="Salvar"/>
                </form>

            </div>

        </section>

    )
}