import { Button } from "@nextui-org/react";
import product01 from '../../assets/images/product-featured.png'
import Image from "next/image";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";


export function Feature() {

    return (
        <div className="flex flex-col items-center w-full h-[639px] py-10 relative ">

            <div className="flex w-3/4 flex-col justify-center">

                <div className="w-3/5 z-30">
                    <h3 className="font-galantic text-5xl mb-12">Logitech G29</h3>
                    <p className="font-roboto text-xl break-words">
                    Melhor volante de entrada pra quem procura algo novo e com garantia. O volante tem um Force Feedback que já dá uma boa noção de como o carro se comporta e os pedais tem embreagem
                    </p>

                    <div className="flex w-full items-center mt-10 gap-4">
                        <span className="text-2xl font-bold font-galantic tracking-widest">R$ 1817,05</span>
                        <Button className="flex py-7 px-8 font-roboto font-bold bg-store-orange text-2xl">COMPRAR</Button>
                    </div>
                </div>
            </div>

            <div className="flex w-[759px] h-[458px] absolute bg-cover top-20 right-28 z-10">
                <Image src={product01} alt="" width={1518} height={916} quality={100}
                    className="flex"
                />
            </div>

            <span className="text-[245px] font-galantic absolute text-black/15 -top-10 z-0">
                Logitech G29
            </span>
            
            
            <div className="flex absolute bottom-6 text-5xl gap-20 text-store-secondary/20">
                <RxDoubleArrowLeft className="hover:text-store-secondary duration-200"/>
                <RxDoubleArrowRight className="hover:text-store-secondary duration-200"/>
            </div>
        </div>
    )
}