'use client'

import { ProductList } from "@/components/store/productLists"
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react"


export default function Store() {
    const variants = [ "underlined"]


    return (
        <section className="flex min-w-[430px] h-screen justify-between py-10 overflow-hidden duration-75">
            <div className="flex flex-col w-full sm:w-3/4 h-full m-auto">

                {variants.map((variant) => (
                    <Tabs 
                        key={variant} 
                        variant={'underlined'} 
                        aria-label="Tabs variants"
                    >
                        <Tab key="Todos" title="Todos">
                            <Card>
                                <CardBody className="flex flex-wrap bg-store-bgDasboard">
                                    <ProductList filterCategory='Todos' />
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="Brasil" title="Brasil">
                            <Card>
                                <CardBody className="flex flex-wrap bg-store-bgDasboard">
                                    <ProductList filterCategory='Brasil' />
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="Logitech" title="Logitech">
                            <Card>
                                <CardBody className="flex flex-wrap bg-store-bgDasboard">
                                    <ProductList filterCategory='Logitech' />
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="Volantes" title="Volantes">
                            <Card>
                                <CardBody className="flex flex-wrap bg-store-bgDasboard">
                                    <ProductList filterCategory='Volantes' />
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="Reposição" title="Reposição">
                            <Card>
                                <CardBody className="flex flex-wrap bg-store-bgDasboard">
                                    <ProductList filterCategory='Reposição' />
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                ))}
                

                <div>

                </div>
            </div>
        </section>
    )
}