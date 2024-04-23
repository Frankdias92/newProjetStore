'use client'

import { useAuth } from "@/hooks/auth";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";


export function HeaderAdm() {
    const { singOut } = useAuth()

    return (
        <header className="flex w-full py-10 mb-10 ml-auto">
            <section className="grid grid-cols-3 w-3/4 items-center justify-center m-auto">

                <Link href={'/detailsAdmin/profile'} className="flex gap-4 items-center">
                    <Avatar 
                        src="https://i.pravatar.cc/150?u=a04258114e29026708c" 
                        className="w-16 h-16 text-large"
                    />
                    <div className="flex flex-col">
                        <span>Bem vindo,</span>
                        <h2 className="text-xl font-galantic tracking-widest">Usuario Nome</h2>
                    </div>
                </Link>

                <div className="flex gap-4 justify-self-center">
                    <Link href={'/detailsAdmin/home'}>Inicio</Link>
                    <Link href={'/detailsAdmin/new'}>Adicionar</Link>
                    <Link href={'/'}>Loja</Link>
                </div>

                <button onClick={singOut} className="justify-self-end">
                    <FaSignOutAlt className="text-2xl  opacity-70 cursor-pointer hover:text-store-orange hover:scale-110 duration-75"
                    />
                </button>
                
            </section>
        </header>
    )
}