import { Image } from "@nextui-org/react"




export function Main() {

    return (
        <section className="flex w-full h-[585px] justify-start relative bg-cover bg-center overflow-hidden">
            <span className="flex drop-shadow-md z-30">
                <h2 className="font-galantic flex w-fit xl:w-[80%] text-8xl px-[15%] pt-9 z-30 content-start text-start text-store-secondary">
                    Sinta a emoção, viva a ação e acelere de verdade!
                </h2>
            </span>

            <div className="flex w-full h-[485px] absolute m-auto bg-center justify-self-center z-0">
                    <Image src={'https://raw.githubusercontent.com/Frankdias92/newProjetStore/main/src/assets/images/9.jpeg'} alt="" width={1920} height={1080}
                        className="flex min-w-[1920px] h-[1080px] -translate-y-52 opacity-60"
                    />
            </div>
            <div className=" absolute top-0 right-0 translate-x-10 rotate-20 justify-self-center z-20">
                <Image src={'https://raw.githubusercontent.com/Frankdias92/newProjetStore/main/src/assets/images/wheel.png'} alt="" width={746} height={783}
                    className="flex"
                />
            </div>

        
            <div className="flex absolute w-full h-full bg-gradient-to-tl from-black to-black/5 z-10"/>
        </section>
    )
}