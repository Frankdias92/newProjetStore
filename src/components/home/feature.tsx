import { Button } from "@nextui-org/react";
import product01 from '../../assets/images/product-featured.png'
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"



export function Feature() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      variableWidth: false
    };

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
            productName: ' Thrustmaster T300 RS GT Edition',
            productDescriptions: 'O volante Force Feedback Thrustmaster T300RS GT permite aos jogadores mergulharem verdadeiramente no mundo das corridas de automóveis e aperfeiçoarem as suas técnicas para melhorarem o seu desempenho.',
            price: 'R$ 3.299,90',
            image: 'https://images.kabum.com.br/produtos/fotos/150106/volante-e-pedais-thrustmaster-t300-rs-gt-edition-para-pc-ps4-ps3-4160644_1616590119_gg.jpg'
        }
    ]
 
    
    return (
        <div className="flex flex-col items-center w-full h-full py-10 overflow-hidden">

            <Slider {...settings} className="flex w-full flex-col h-full ">

                {dataFeature.map((item) => {
                    return (

                        <section key={item.id} className="flex flex-row justify-start w-3/4 px-[15%] h-[639px] relative">
                            <div className="flex w-full justify-start ">

                                <div className="w-3/5 z-30 ">
                                    <h3 className="font-galantic text-5xl mb-12">{item.productName}</h3>
                                    <p className="font-roboto text-xl break-words">
                                        {item.productDescriptions}
                                    </p>

                                    <div className="flex w-full items-center mt-10 gap-4">
                                        <span className="text-2xl font-bold font-galantic tracking-widest">{item.price}</span>
                                        <Button className="flex py-7 px-8 font-roboto font-bold bg-store-orange text-2xl">COMPRAR</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-[759px] h-[458px] absolute bg-cover top-20 right-52 z-10">
                            <Image src={product01} alt="" width={1518} height={916} quality={100}
                                className="flex"
                            />
                            </div>

                            <span className="text-[245px] h-[450px] font-galantic absolute text-black/15 -top-20 -translate-x-16 z-0">
                                {item.productName}
                            </span>
                            
                        </section>
                        
                    )
                })}
            </Slider>
        </div>
    )
}