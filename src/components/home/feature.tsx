import { Button } from "@nextui-org/react";
import product01 from '../../assets/images/product-featured.png'
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useRouter } from "next/navigation";

import cammusC5 from '../../assets/images/featured-Products-02.png'


export function Feature() {
    
    const router = useRouter()

    const settings = {
        adaptiveHeight: true,
        variableWidth: true,
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        initialSlide: 1
    }


    const dataFeature = [
        {
            id: 1,
            productName: 'Logitech G29',
            productDescriptions: 'Melhor volante de entrada pra quem procura algo novo e com garantia. O volante tem um Force Feedback que já dá uma boa noção de como o carro se comporta e os pedais tem embreagem',
            price: 'R$ 1817,05',
            image: product01
        },
        {
            id: 2,
            productName: 'CAMMUS C5',
            productDescriptions: 'Material de couro com costura manual A melhor experiência de aderência. O acabamento é excelente, com uma textura de metal fosco. Você pode imaginar o poder de um piloto de corrida',
            price: 'R$ 1284.04',
            image: cammusC5
        }
    ]
 
    
    return (
        <div className="flex flex-col items-center w-full h-full py-5 overflow-hidden">

            <Slider {...settings}   className="flex w-full h-full">

                {dataFeature.map((item) => {
                    return (

                        <section key={item.id} className="flex px-20 xl:px-[15%] /* h-[639px] */ relative">
                            <div className="flex flex-wrap w-3/4">

                                <div className="flex flex-col w-3/5 z-30">
                                    <h3 className="font-galantic text-5xl mb-12">{item.productName}</h3>
                                    <p className="flex w-[60%] xl:w-full font-raleway font-light text-xl break-words">
                                        {item.productDescriptions}
                                    </p>

                                    <div className="flex w-full items-center mt-10 gap-4">
                                        <span className="text-2xl font-bold font-galantic tracking-widest">{item.price}</span>
                                        <Button className="flex py-7 px-8 font-raleway font-extrabold bg-store-orange text-2xl"
                                            onClick={() => router.push('/store')}
                                        >
                                            COMPRAR
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-[559px] h-[358px] xl:w-[759px] xl:h-[458px] relative xl:absolute bg-cover xl:top-20 xl:left-[650px] z-10">
                                <Image src={item.image} alt="" width={1080} height={916} quality={100}
                                    className="flex"
                                />
                            </div>

                            <span className="flex w-full break-words text-[245px] h-[450px] font-galantic absolute text-black/15 -top-20 -translate-x-16 z-0">
                                {item.productName}
                            </span>
                            
                        </section>
                        
                    )
                })}
            </Slider>
        </div>
    )
}