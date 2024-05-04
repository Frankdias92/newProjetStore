import { Button } from "@nextui-org/react";
import { CategorySection } from "./categoryHome";
import { useRouter } from "next/navigation";


export function Explore() {
    const router = useRouter()

    return (
        <div className="flex flex-col gap-16 items-start w-3/4 py-10">
            <CategorySection categoryProps="Explore"/>

            <div className="flex w-full gap-6">
                <Button className="flex flex-col w-[383px] pt-10 pl-4 justify-start items-start h-[191px] gap-7 bg-transparent hover:bg-store-orange group"
                    onClick={() => router.push('/store')}
                >
                    <span className="font-galantic text-4xl">Equipamentos</span>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity text-2xl font-roboto italic font-thin">
                        Ver todos
                    </p>
                </Button>

                <Button className="flex flex-col w-[383px] pt-10 pl-4 justify-start items-start h-[191px] gap-7 bg-transparent hover:bg-store-orange group"
                    onClick={() => router.push('/store')}
                >
                    <span className="font-galantic text-4xl">Logitech</span>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity  text-2xl font-roboto italic font-thin">
                        Ver todos
                    </p>
                </Button>

                <Button className="flex flex-col w-[383px] pt-10 pl-4 justify-start items-start h-[191px] gap-7 bg-transparent hover:bg-store-orange group"
                    onClick={() => router.push('/store')}
                >
                    <span className="font-galantic text-4xl">Thrustmaster</span>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity  text-2xl font-roboto italic font-thin">
                        Ver todos
                    </p>
                </Button>
            </div>
        </div>
    )
}