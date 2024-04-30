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
    const [userIsActive, setUserIsActive] = useState<boolean | string>(false)
    
    
    return (
        <section className="flex w-full py-10 mb-10 ml-auto bg-store-bgDasboard">

            <section className="grid grid-cols-3 w-3/4 items-center justify-center m-auto px-4">

                <Link href={'/detailsAdmin/profile'}
                    className="flex w-fit items-center relative gap-4"
                >
                    <Avatar
                        src={`${avatarUrl}`}
                        className="flex w-[80px] h-[80px] rounded-full text-large"
                    />
                    {userName &&  <div className="flex absolute bottom-0 left-16 size-4 bg-store-dashboard-btn rounded-full"/>}
                    <div className="flex flex-col">
                        <span>Bem vindo,</span>
                        <h2 className="font-thin italic">{userName}!</h2>
                    </div>
                </Link>

                <div className="flex gap-4 justify-self-center font-roboto font-thin tracking-widest text-lg">
                    <Link href={'/detailsAdmin/home'}
                        className="hover:underline underline-offset-8 hover:text-store-orange text-opacity-0 duration-300"
                        >
                            <span className="text-store-secondary">
                                Inicio
                            </span>
                    </Link>
                    <Link href={'/detailsAdmin/new'}
                        className="hover:underline underline-offset-8 hover:text-store-orange text-opacity-0 duration-300"
                        >
                            <span className="text-store-secondary">
                                Adicionar
                            </span>
                    </Link>
                    <Link href={'/'}
                        className="hover:underline underline-offset-8 hover:text-store-orange text-opacity-0 duration-300"
                        >
                            <span className="text-store-secondary">
                                Loja
                            </span>
                    </Link>
                </div>

                <button onClick={singOut} className="justify-self-end pr-10">
                    <FaSignOutAlt className="text-2xl  opacity-70 cursor-pointer hover:text-store-orange hover:scale-110 duration-75"
                    />
                </button>
                
            </section>
        </section>
    )
}