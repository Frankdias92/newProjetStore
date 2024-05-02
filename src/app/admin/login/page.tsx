'use client'


import { LogginAccount } from '@/components/login/formLoggin'
import Image from "next/image"

import bgStore from '../../../assets/images/store999.png'
import { useState } from 'react'
import { Section } from '@/components/detailsAdmin/section'
import { CreateAccount } from '@/components/login/formCreateAccount'


export default function Login() { 
    const [newUser, setNewUser] = useState(true) 

    function handleNewUser() {
        setNewUser(!true)
    }

    return (

        <section className="flex flex-col w-full min-h-screen text-store-secondary  justify-between bg-store-bgDasboard-Secondary">
            <div className="grid grid-cols-2 w-3/4 h-full m-auto my-[120px]">
                <div className="flex flex-col w-full h-full items-start pr-10  gap-y-8">
                    { newUser ? ( 
                        <div className='flex flex-col w-full gap-y-8 items-center'>
                            <LogginAccount/> 
                            <span className='w-full text-center opacity-80'>
                                <Section title='ou'>
                                    <button onClick={handleNewUser}
                                        className='m-auto opacity-80 hover:opacity-100 duration-75'
                                        >
                                        Criar conta
                                    </button>
                                </Section>
                            </span>
                        </div>
                        
                    ) : (
                        <div className='flex flex-col w-full gap-y-8 items-center'>
                            <CreateAccount />
                            <span className='w-full text-center opacity-80'>
                                <Section title='ou'>
                                    <button onClick={() => setNewUser(true)} className='m-auto opacity-80 hover:opacity-100 duration-75'>
                                        Fazer login
                                    </button>
                                </Section>
                            </span>
                        </div>
                    )}
                </div>

                <div className="grid h-[345px] items-center relative bg-cover  rounded-xl overflow-hidden">
                    <div className="flex w-full h-full justify-self-center  ">
                        <Image src={bgStore} alt="" width={1980} height={1080} quality={100}
                            className="flex justify-self-center m-auto rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}