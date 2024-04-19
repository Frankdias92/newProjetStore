import { Section } from "@/components/detailsAdmin/section"
import { Tags } from "@/components/detailsAdmin/tags"


export default function HomePainel() {

    return (
        <section className="flex w-3/4 m-auto py-10 min-h-screen justify-center relative">
            <aside className="flex flex-col w-1/4 rounded-tl-3xl rounded-bl-3xl bg-store-primary/90 z-0 px-6 py-10 gap-4">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <ul>
                    <li>Todos</li>
                    <li>Volantes</li>
                    <li>etc</li>
                </ul>
            </aside>

            <main className="flex flex-col w-3/4 rounded-3xl bg-black z-10 -translate-x-6 px-6 py-10">
                <h1>Section Painel</h1>

                <input type="search" placeholder="Procurar" className="w-2/6 py-2 pl-4 rounded-md"/>

                <div className="flex flex-col mt-5">
                    <span>Todos os produtos</span>

                    <Section title="Nome do Produto">
                        <Tags title="wheel"/>
                    </Section>
                </div>

            </main>
        </section>
    )
}