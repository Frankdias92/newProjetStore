import { Image } from "@nextui-org/react";
import { CategorySection } from "./categoryHome";

import freioDeMao from '../../assets/images/freio-de-mao-recommended.png'


export function RecomendProducts() {

    return (
        <div className="flex flex-col w-3/4 h-full">
            <CategorySection categoryProps="Recomendados"/>

            <Image
                isZoomed
                width={345}
                alt=''
                src='https://cammusracing.com/wp-content/uploads/2022/12/15Nm.jpg'
                className="flex w-[345px] h-[171px]"
            />
            <Image
                isZoomed
                width={345}
                alt=''
                src='../../assets/images/freio-de-mao-recommended.png'
                className="flex w-[345px] h-[171px]"
            />
        </div>
    )
}