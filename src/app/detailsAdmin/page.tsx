'use client'

import { ButtonText } from "@/components/detailsAdmin/buttonText";
import { Section } from "@/components/detailsAdmin/section";
import { Tags } from "@/components/detailsAdmin/tags";


export default function DefaultAdmin() {

    return (
        <div className="flex w-full flex-col items-center min-h-screen py-10">
            <div className="flex flex-col gap-4 w-3/4 justify-start">
                <h1>Admin page</h1>

                

                


                <div className="flex flex-col items-center w-[393px] gap-4 h-[509px] px-6 py-5 rounded-3xl hover:bg-neutral-950/60 duration-75 relative">
                            {/* <Image
                                isZoomed
                                width={345}
                                alt={item.productName}
                                src={item.image}
                                className="flex w-[345px] h-[171px]"
                            /> */}


                        <div className="flex flex-col gap-3 items-start">
                            <span className="text-4xl font-galantic">
                                Product Name
                            </span>
                            <span className="text-lg font-roboto">
                                product Descriptions
                            </span>

                            <Section title="Tags:">
                                <Tags title='Wheel'/>
                                <Tags title='Simulador'/>
                            </Section>

                            <Section title="urlProduct:">
                                <Tags title='link goes here'/>
                            </Section>

                            <Section title="Price">
                                <Tags title='R$'/>
                            </Section>
                        </div>

                        <button>
                            Voltar
                        </button>

                    </div>


                <ButtonText title="Excluir Produto" />
            </div>
        </div>
    )
}