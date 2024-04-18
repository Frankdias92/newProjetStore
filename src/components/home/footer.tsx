import Link from "next/link";
import { FaDiscord, FaInstagram, FaTelegram, FaTwitch, FaYoutube } from "react-icons/fa";


export function Footer() {
    
    return (
        <footer className="flex flex-col w-full h-full py-20 bg-neutral-950">
            <div className="grid grid-cols-2 w-3/4 m-auto justify-items-stretch">

                <div className="flex flex-col w-full h-full gap-10">
                    <div className="flex">
                        <div className="font-draco flex flex-col relative">
                            <span className="text-2xl">Adriel</span>
                            <span className="absolute -right-3 text-store-orange bottom-0 translate-y-3 -rotate-6">999</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <span className="font-roboto font-bold italic text-3xl">
                            Siga-me
                        </span>

                        <span className="flex gap-6 text-4xl">
                            <Link href={''} className="opacity-75 hover:opacity-100 duration-200"><FaTwitch /></Link>
                            <Link href={''} className="opacity-75 hover:opacity-100 duration-200"><FaDiscord /></Link>
                            <Link href={''} className="opacity-75 hover:opacity-100 duration-200"><FaYoutube /></Link>
                            <Link href={''} className="opacity-75 hover:opacity-100 duration-200"><FaInstagram /></Link>
                            <Link href={''} className="opacity-75 hover:opacity-100 duration-200"><FaTelegram /></Link>
                        </span>

                    </div>

                </div>
                 
                <div className="flex w-full h-full">
                    <div className="flex flex-col w-full h-full">
                        <span className="font-roboto font-bold italic text-3xl mb-4">
                            Parceiros
                        </span>
                        
                        <div className="grid grid-cols-2 w-full h-full mt-auto">
                            <span className="flex flex-col">
                                <Link href={'https://s.click.aliexpress.com/e/_DciRDMd'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    ThanksBuyer</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_Dm5lTwt'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    Done-way</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_Dexz82H'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    ZCMY Game</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_Dmb2d5f'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    Number 11</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_DDVrttn'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    Nicetoy</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_Dnr0e5x'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    simjack</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_DBBQ009'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    SimSonn</Link>
                            </span>

                            <span className="flex flex-col">
                                <Link href={'https://s.click.aliexpress.com/e/_Dd1SN4l'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    Rastp High Perfomace</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_DkV538z'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    ZCGM Creativity</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_DBfkvXj'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    kopikoak007</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_DdBqYw9'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    MI - SHINE STORE</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_DFf77jf'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    Ruito</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_DCbjl8V'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    YomiRacing</Link>
                                <Link href={'https://s.click.aliexpress.com/e/_DFnjzyd'} target="_blank" className="opacity-75 hover:opacity-100 duration-200">
                                    DSPIAE Number 7</Link>

                            </span>
                        </div>

                    </div>
                </div>
                
            </div>
        </footer>
    )
}