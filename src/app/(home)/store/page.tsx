'use client'

import { ProductList } from "@/components/store/productLists"
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react"


export default function Store() {
    const variants = [ "underlined"]

    

    return (
        <section className="flex w-full min-h-full justify-between py-10">
            <div className="flex flex-col w-3/4 h-screen  m-auto">

                {variants.map((variant) => (
                    <Tabs 
                        key={variant} 
                        variant={'underlined'} 
                        aria-label="Tabs variants"
                    >
                        <Tab key="Todos" title="Todos">
                            <Card>
                                <CardBody>
                                    <ProductList />
                                </CardBody>
                            </Card>  
                        </Tab>
                        <Tab key="Brasil" title="Brasil"/>
                        <Tab key="Logitech" title="Logitech"/>
                        <Tab key="Thrustmaster" title="Thrustmaster"/>
                        <Tab key="Volantes" title="Volantes"/>
                        <Tab key="Diversos" title="Diversos"/>
                        <Tab key="Peças & Reposição" title="Peças & Reposição"/>
                    </Tabs>
                ))}
                

                <div>

                </div>
            </div>
        </section>
    )
}