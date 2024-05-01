'use client'

import { useAuth } from "@/hooks/auth"
import { Button } from "@nextui-org/react"
import { useFocusRing } from "@react-aria/focus"
import { useState } from "react"




export function LogginAccount() {
    let { isFocusVisible, focusProps } = useFocusRing()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { singIn } = useAuth()   

    const handleSignIn = async () => {
        singIn({ email, password });
    };
    

    return (
        <>
            <h1 className="text-2xl font-bold mr-auto">Bem vindo a sua loja!</h1>
            
            <form 
                // method="POST"
                // onSubmit={onSubmit}
                className="flex flex-col w-full font-poppins"
            >

                <label className="mb-2 text-sm">
                    E-mail
                </label>
                <input 
                    name="email"  
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/20 focus:ring-2 focus:ring-store-orange
                    invalid:text-red-600 rounded-lg outline-none"
                />

                <label className="mb-2 text-sm">
                    Senha
                </label>
                <input 
                    name="password"  
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/20 focus:ring-2 focus:ring-store-orange
                    invalid:text-red-600 rounded-lg outline-none"
                />

                <Button
                    type="button"
                    onClick={handleSignIn}
                    className="flex text-xl text-store-secondary w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                    outline-none border-0 focus:ring-2 bg-store-orange focus:ring-store-orange"
                        style={{
                            outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                        }}
                >
                    Acessar
                </Button>

            </form>
        </>
    )
}