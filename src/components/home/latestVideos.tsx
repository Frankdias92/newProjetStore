import Slider from "react-slick";
import { LazyYoutube } from "../store/lazyYoutube";
import { CategorySection } from "./categoryHome";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useRef } from "react";


function SampleNextArrow() {
    return (
      <div/>
    );
}


export function LatestVideos() {
    const sliderRef = useRef<Slider | null>(null)
    
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

    
    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        initialSlide: 1
    }


    const arrayVideos = [
        {
            id: 1,
            video: "tD-0SAGcgvE?si=FRGyUd78xQLQPSma"
        },
        {
            id: 2,
            video: "d8-hmM8kD7U?si=QAp7eleH1E1OB1Zn"
        },
        {
            id: 3,
            video: "2ypIGmVrCBI?si=bO7bf3ueUMbU1Mnf"
        },
    ]

    return (
        <section className="flex flex-col w-3/4 justify-between">
            <CategorySection categoryProps="Ultimos videos"/>
            <Slider 
                ref={sliderRef}    
                {...settings} className="slider-container flex flex-row gap-4 justify-center py-8"
            >
                {arrayVideos.map(item => {
                    return (
                        <div key={item.id} className="flex w-full">
                            <LazyYoutube videoId={item.video}/>
                        </div>
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
        </section>
    )
}