'use client'

import { ButtonText } from "@/components/detailsAdmin/buttonText";
import { InputForm } from "@/components/inputForm";
import { useAuth } from "@/hooks/auth";
import { Avatar } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";

import { api } from "@/services/api";


interface userDataProps {
    data: {
        name: string
        email: string
        avatar: string
        avatarFile: File | string
        password_Old: string
        password_New: string
    }
}


export default function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState<string>(`${user?.name}`)
    const [email, setEmail] = useState<string>(`${user?.email}`)
    const [passwordOld, setPasswordOld] = useState('')
    const [passwordNew, setPasswordNew] = useState('')

    const avatarUrl = user?.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : <FaUser />
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState<File | string>('')

    async function handleUptade() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        
        console.log('click on update')
        updateProfile({ user, avatarFile })
    }

    function handleUptadeAvatar(e: FormEvent<HTMLInputElement>) {
        const file = e.currentTarget.files?.[0]
        if (file) {
            setAvatarFile(file)
    
            const imagePreview = URL.createObjectURL(file)
            setAvatar(imagePreview)
        }
    }
    

    return (
        <section className="flex w-full min-h-screen justify-center py-10">
            <div className="flex flex-col w-3/4 items-center">

                <span className="relative flex w-fit justify-center -translate-y-1/4">
                    <Avatar
                        src={`${avatar}`}
                        className="flex w-[180px] h-[180px] rounded-full text-large"
                    />
                    
                    <label className="flex items-center justify-center w-12 h-12 rounded-full p-2 bg-store-orange hover:bg-store-orange/90 duration-75 absolute bottom-0 right-0">
                        <MdAddAPhoto type="file" className="flex z-10 text-2xl">
                        
                        </MdAddAPhoto>
                        <input 
                            type="file"
                            id={`${avatar}`} 
                            name='avatar'
                            className="absolute w-full h-full rounded-full opacity-0 top-0 z-0" 
                            accept="image/png, image/jpeg"
                            onChange={handleUptadeAvatar}
                            
                        />
                    </label>
                </span>

                <form className="flex w-[45%] flex-col items-center gap-2">
                    <input 
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="flex w-full h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                             invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
                    />
                    <input 
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="flex w-full h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                             invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
                    />


                    <span className="flex w-full flex-col opacity-50 focus-within:opacity-100 mt-4">
                        
                        <input 
                            type="password"
                            placeholder="Senha"
                            onChange={e => setPasswordOld(e.target.value)}
                            className="flex w-full h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                                 invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
                        />

                        <input 
                            type="password"
                            placeholder="Confirme sua senha"
                            onChange={e => setPasswordNew(e.target.value)}
                            className="flex w-full h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
                                 invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
                        />
                        
                    </span>

                    <ButtonText onClick={handleUptade} title="Salvar"/>
                </form>

            </div>

        </section>

    )
}