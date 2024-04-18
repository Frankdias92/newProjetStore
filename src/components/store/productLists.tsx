import {Button, Image, ScrollShadow} from "@nextui-org/react"


export function ProductList({variants}: any) {
    
    const dataFeature = [
        {
            id: 1,
            productName: 'Logitech G29',
            productDescriptions: 'Melhor volante de entrada pra quem procura algo novo e com garantia. O volante tem um Force Feedback que já dá uma boa noção de como o carro se comporta e os pedais tem embreagem',
            price: 'R$ 1817,05',
            image: 'https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_SL1500_.jpg'
        },
        {
            id: 2,
            productName: ' Thrustmaster T300 RS GT Edition',
            productDescriptions: 'O volante Force Feedback Thrustmaster T300RS GT permite aos jogadores mergulharem verdadeiramente no mundo das corridas de automóveis e aperfeiçoarem as suas técnicas para melhorarem o seu desempenho.',
            price: 'R$ 3.299,90',
            image: 'https://images.kabum.com.br/produtos/fotos/150106/volante-e-pedais-thrustmaster-t300-rs-gt-edition-para-pc-ps4-ps3-4160644_1616590119_gg.jpg'
        },
        {
            id: 3,
            productName: ' Thrustmaster T300 RS GT Edition',
            productDescriptions: 'O volante Force Feedback Thrustmaster T300RS GT permite aos jogadores mergulharem verdadeiramente no mundo das corridas de automóveis e aperfeiçoarem as suas técnicas para melhorarem o seu desempenho.',
            price: 'R$ 3.299,90',
            image: 'https://images.kabum.com.br/produtos/fotos/150106/volante-e-pedais-thrustmaster-t300-rs-gt-edition-para-pc-ps4-ps3-4160644_1616590119_gg.jpg'
        }
    ]
    

    return (


        <div className="flex w-full gap-5">

            {dataFeature.map((item) => {
                return (

                    <div key={item.id} className="flex flex-col items-center w-[393px] gap-4 h-[509px] px-6 py-5 rounded-3xl hover:bg-neutral-950/60 duration-75 relative">
                            <Image
                                isZoomed
                                width={345}
                                alt={item.productName}
                                src={item.image}
                                className="flex w-[345px] h-[171px]"
                            />


                        <div className="flex flex-col gap-3 items-start">
                            <span className="text-4xl font-galantic">
                                {item.productName}
                            </span>
                            <span className="text-lg font-roboto">
                                <ScrollShadow 
                                    hideScrollBar 
                                    offset={100}
                                    orientation="horizontal" 
                                    className="max-w-[393px] max-h-[135px]"
                                >
                                    {item.productDescriptions}
                                </ScrollShadow>
                            </span>
                            <span className="flex w-full  px-5 justify-between items-center font-galantic tracking-widest text-2xl absolute bottom-5 left-0">
                                {item.price}

                                <Button className="flex py-2 px-5 font-roboto text-sm font-bold bg-store-orange">
                                    COMPRAR
                                </Button>

                            </span>
                        </div>

                    </div>
                    
                )
            })}
            


            
        </div>
    )
}