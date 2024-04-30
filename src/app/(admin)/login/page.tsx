'use client'


import { LogginAccount } from '@/components/login/formLoggin'
import Image from "next/image"

import bgStore from '../../../assets/images/store999.png'


export default function Login() {  


    return (

        <section className="flex flex-col w-full min-h-screen text-store-secondary  justify-between bg-store-bgDasboard-Secondary">
            <div className="grid grid-cols-2 w-3/4 justify-center items-center m-auto my-[120px]">
                <div className="flex flex-col w-full px-10 gap-y-8 items-start">
                    <LogginAccount/>
                </div>

                <div className="flex flex-col min-w-[545px] h-full p-10 items-center justify-between relative bg-cover bg-center overflow-hidden rounded-xl">
                    <div className="min-w-[754px] min-h-[754px] absolute">
                        <Image src={bgStore} alt="" width={1980} height={1080} quality={100}
                            className="flex z-0 m-auto bg-center -translate-y-20"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}