import { Section } from "@/components/detailsAdmin/section"
import { Tags } from "@/components/detailsAdmin/tags"
import Link from "next/link"
import { FaEdit, FaTrash } from "react-icons/fa"


export default function HomePainel() {

    return (
        <section className="flex w-3/4 m-auto py-10 min-h-screen justify-center relative">
            <aside className="flex flex-col justify-between w-1/4 rounded-tl-3xl rounded-bl-3xl bg-store-primary/90 z-0 px-6 py-10 gap-4">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <ul>
                    <li>Todos</li>
                    <li>Volantes</li>
                    <li>etc</li>
                </ul>

                <Link href={'/detailsAdmin/new'}>
                    Criar
                </Link>
            </aside>

            <main className="flex flex-col w-3/4 rounded-3xl bg-black z-10 -translate-x-6 px-6 py-10">
                <input type="search" placeholder="Procurar" className="w-2/6 py-2 pl-4 rounded-md"/>

                <div className="flex flex-col mt-5 gap-4">
                    <span>Todos os produtos</span>

                    <Link href={`/detailsAdmin/home/${'id'}`} className="flex bg-store-primary/35 rounded-lg px-4 py-2 hover:bg-store-primary/80 duration-75">
                        <div className="flex flex-col w-full gap-4">
                            <h2 className="text-xl font-roboto font-bold tracking-wider">
                                Nome do Produto
                            </h2>
                            <Tags title="wheel"/>
                        </div >

                        <span className="flex items-center gap-4">
                            <FaTrash className="text-red-600 hover:text-red-700 hover:scale-110 duration-75"/>
                            <FaEdit className="hover:text-green-600 hover:scale-110 duration-75"/>
                        </span>

                    </Link>

                </div>

            </main>
        </section>
    )
}