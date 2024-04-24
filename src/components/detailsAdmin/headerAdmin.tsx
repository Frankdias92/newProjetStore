'use client'

import { useAuth } from "@/hooks/auth";
import { api } from "@/services/api";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";


export function HeaderAdm() {
    const { singOut, user } = useAuth()
    
    const avatarUrl = user?.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : <FaUser />
    const userName = user?.name ? `${user?.name.split(' ')[0]}` : 'user'

    
    
    return (
        <header className="flex w-full py-10 mb-10 ml-auto">
            <section className="grid grid-cols-3 w-3/4 items-center justify-center m-auto">

                <Link href={'/detailsAdmin/profile'} className="flex w-fit gap-4 items-center relative">
                    <Avatar
                        src={`${avatarUrl}`}
                        className="flex absolute w-[80px] h-[80px] rounded-full text-large"
                    />
                    <div className="flex flex-col w-[120px] translate-x-24">
                        <span>Bem vindo,</span>
                        <h2 className="text-xl font-galantic tracking-widest">{userName}</h2>
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