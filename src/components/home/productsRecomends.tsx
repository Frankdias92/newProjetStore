import { Image } from "@nextui-org/react";
import { CategorySection } from "./categoryHome";


import bgStore from '../../../assets/images/store999.png'
import Link from "next/link";


export function RecomendProducts() {

    return (
        <div className="flex flex-col w-3/4 h-full gap-10 py-10">
            <CategorySection categoryProps="Recomendados"/>

            <div className="flex flex-row w-full h-full gap-4 justify-between">

                <span className="flex w-[345px] h-full items-center">
                    {/* Link Base Cammus */}
                    <Link href={'https://cammusracing.com/product/cammus-wheelbase-gt1-ddwb-15nm/'}
                        target="_blank"
                        className="h-full justify-center  rounded-xl space-y-3"
                    >
                        <Image
                            isZoomed
                            width={345}
                            alt='CAMMUS Wheelbase Racing'
                            src='https://raw.githubusercontent.com/Frankdias92/newProjetStore/main/src/assets/images/baseCammus.png'
                            className="flex w-[345px] h-[340px] bg-store-secondary"
                        />
                    <span className="flex font-roboto text-xl font-extrabold hover:text-store-orange duration-75">
                        CAMMUS Wheelbase Racing
                    </span>    
                </Link>
                </span>

                {/* Link wheel */}
                <span className="flex w-[345px] h-full items-center">
                    <Link href={'https://pt.aliexpress.com/item/1005005492661085.html?aff_fcid=f13cdc85ec7d45ddb20d6c02ade1e11f-1714853341686-03597-_DmgNjot&tt=CPS_NORMAL&aff_fsk=_DmgNjot&aff_platform=shareComponent-detail&sk=_DmgNjot&aff_trace_key=f13cdc85ec7d45ddb20d6c02ade1e11f-1714853341686-03597-_DmgNjot&terminal_id=55f74e5187a14d8b8f61c6b24d01549a&afSmartRedirect=y'}
                        target="_blank"
                        className="h-full justify-center  rounded-xl space-y-3"
                    >
                        <Image
                            isZoomed
                            width={345}
                            alt='Volante Desportivo Automóvel, Tipo de Corrida'
                            src='https://raw.githubusercontent.com/Frankdias92/newProjetStore/main/src/assets/images/volante350mm.png'
                            className="flex w-[345px] h-[340px] bg-cover bg-store-secondary"
                        />

                        <span className="flex font-roboto text-xl font-extrabold hover:text-store-orange duration-75">
                            Volante Desportivo
                        </span>
                    </Link>
                </span>

                {/* Link HandBrak */}
                <span className="flex w-[345px] h-full items-center">
                    <Link href={'https://pt.aliexpress.com/item/1005005171187696.html?aff_fcid=4a0b77b6a721406d9e7afd074efcc97a-1714853151806-09172-_DBU7unF&tt=CPS_NORMAL&aff_fsk=_DBU7unF&aff_platform=shareComponent-detail&sk=_DBU7unF&aff_trace_key=4a0b77b6a721406d9e7afd074efcc97a-1714853151806-09172-_DBU7unF&terminal_id=55f74e5187a14d8b8f61c6b24d01549a&afSmartRedirect=y'}
                        target="_blank"
                        className="h-full justify-center  rounded-xl space-y-3"
                    >
                    <Image
                        isZoomed
                        width={345}
                        alt='Image do produto sistema de freio de mão para rally para logitech g29/g27/g25'
                        src='https://raw.githubusercontent.com/Frankdias92/newProjetStore/main/src/assets/images/freioDeMao.png'
                        className="flex w-[345px] h-[340px] bg-cover bg-store-secondary"
                    />
                    
                    <span className="flex font-roboto text-xl font-extrabold hover:text-store-orange duration-75">
                        Freio de mão
                    </span>
                    </Link>
                </span>
            </div>
        </div>
    )
}