import { Image } from "@nextui-org/react";
import { CategorySection } from "./categoryHome";


import Link from "next/link";
import { ListRecommends } from "./productsRecommends/listRecommends";


export function RecomendProducts() {

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
        <div className="flex flex-col w-3/4 h-full gap-10 py-10">
            <CategorySection categoryProps="Recomendados"/>

            <div className="flex flex-row w-full h-full gap-4 justify-between">

                {listRecomend.map(item => {
                    return (
                        <ListRecommends
                            key={item.id} 
                            href={item.href}
                            image={item.image}
                            alt={item.alt}
                            productName={item.productName}
                        />
                    )
                })}
            </div>
        </div>
    )
}