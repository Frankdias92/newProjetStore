import { Button } from "@nextui-org/react";


export function Explore() {

    return (
        <div className="flex flex-col gap-16 items-start w-3/4 py-10">
            <div className="relative">
                <p className="font-galantic text-store-orange text-5xl absolute -left-4">l</p>
                <span className="font-galantic text-5xl">Explore</span>
            </div>

            <div className="flex w-full gap-6">
                <Button className="flex flex-col w-[383px] pt-10 pl-4 justify-start items-start h-[191px] gap-7 bg-transparent hover:bg-store-orange group">
                    <span className="font-galantic text-4xl">Equipamentos</span>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity text-2xl font-roboto italic font-thin">
                        Ver todos
                    </p>
                </Button>

                <Button className="flex flex-col w-[383px] pt-10 pl-4 justify-start items-start h-[191px] gap-7 bg-transparent hover:bg-store-orange group">
                    <span className="font-galantic text-4xl">Logitech</span>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity  text-2xl font-roboto italic font-thin">
                        Ver todos
                    </p>
                </Button>

                <Button className="flex flex-col w-[383px] pt-10 pl-4 justify-start items-start h-[191px] gap-7 bg-transparent hover:bg-store-orange group">
                    <span className="font-galantic text-4xl">Thrustmaster</span>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity  text-2xl font-roboto italic font-thin">
                        Ver todos
                    </p>
                </Button>
            </div>
        </div>
    )
}