import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useRef } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Slider from "react-slick";


function SampleNextArrow() {
    return (
      <div/>
    );
}

export function ListRecommends() {
    const sliderRef = useRef<Slider | null>(null)


    const settings = {
        dots: true,
        adaptiveHeight: true,
        variableWidth: true,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        initialSlide: 1,        
    }

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }
    

    const listRecomend = [
        {
            id: 1,
            href: 'https://cammusracing.com/product/cammus-wheelbase-gt1-ddwb-15nm/',
            image: 'https://raw.githubusercontent.com/Frankdias92/newProjetStore/main/src/assets/images/baseCammus.png',
            productName: 'CAMMUS Wheelbase Racing',
            alt: 'CAMMUS Wheelbase Racing'
        },
        {
            id: 2,
            href: 'https://pt.aliexpress.com/item/1005005492661085.html?aff_fcid=f13cdc85ec7d45ddb20d6c02ade1e11f-1714853341686-03597-_DmgNjot&tt=CPS_NORMAL&aff_fsk=_DmgNjot&aff_platform=shareComponent-detail&sk=_DmgNjot&aff_trace_key=f13cdc85ec7d45ddb20d6c02ade1e11f-1714853341686-03597-_DmgNjot&terminal_id=55f74e5187a14d8b8f61c6b24d01549a&afSmartRedirect=y',
            image: 'https://raw.githubusercontent.com/Frankdias92/newProjetStore/main/src/assets/images/volante350mm.png',
            productName: 'olante Desportivo',
            alt: 'Volante Desportivo Automóvel, Tipo de Corrida'
        },
        {
            id: 3,
            href: 'https://pt.aliexpress.com/item/1005005171187696.html?aff_fcid=4a0b77b6a721406d9e7afd074efcc97a-1714853151806-09172-_DBU7unF&tt=CPS_NORMAL&aff_fsk=_DBU7unF&aff_platform=shareComponent-detail&sk=_DBU7unF&aff_trace_key=4a0b77b6a721406d9e7afd074efcc97a-1714853151806-09172-_DBU7unF&terminal_id=55f74e5187a14d8b8f61c6b24d01549a&afSmartRedirect=y',
            image: 'https://raw.githubusercontent.com/Frankdias92/newProjetStore/main/src/assets/images/freioDeMao.png',
            productName: 'Freio de mão',
            alt: 'Image do produto sistema de freio de mão para rally para logitech g29/g27/g25'
        },
    ]

    return (
        <div className="flex w-full h-full flex-col">
       
            <Slider 
                ref={sliderRef}
                {...settings}
                className="flex w-full pb-8"
            >
                
                {listRecomend.map(item => {
                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            className="flex flex-col justify-between  rounded-xl space-y-3 px-4 "
                        >
                            <Image
                                isZoomed
                                width={345}
                                alt={item.alt}
                                src={item.image}
                                className="flex w-[345px] h-[340px] bg-cover bg-store-secondary"
                            />
                            
                            <span className="flex font-roboto text-xl font-extrabold hover:text-store-orange duration-75">
                                {item.productName}
                            </span>
                        </Link>
                    )
                })}
    

            </Slider>

            <div className="flex w-full items-center justify-center gap-20 -translate-y-1">
                <MdOutlineDoubleArrow 
                    className="flex rotate-180 size-10 text-store-orange/90 hover:text-store-orange hover:scale-105 duration-75"
                    onClick={previous}
                />
                <MdOutlineDoubleArrow 
                    className="flex size-10 text-store-orange/90 hover:text-store-orange hover:scale-105 duration-75"
                    onClick={next}
                />
            </div>

        </div>
    )
}