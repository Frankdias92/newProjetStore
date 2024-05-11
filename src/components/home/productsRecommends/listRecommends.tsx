import { Image } from "@nextui-org/react";
import Link from "next/link";

interface ListRecommendsProps {
    href: string
    image: string
    alt: string
    productName: string
}

export function ListRecommends({ href, image, alt, productName }: ListRecommendsProps) {

    return (
        <span className="flex w-[345px] h-full items-center">
                    <Link href={href}
                        target="_blank"
                        className="h-full justify-center  rounded-xl space-y-3"
                    >
                        <Image
                            isZoomed
                            width={345}
                            alt={alt}
                            src={image}
                            className="flex w-[345px] h-[340px] bg-cover bg-store-secondary"
                        />
                        
                        <span className="flex font-roboto text-xl font-extrabold hover:text-store-orange duration-75">
                            {productName}
                        </span>
                    </Link>
                </span>
    )
}