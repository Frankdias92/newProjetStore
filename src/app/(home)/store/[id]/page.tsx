'use client'

import { DataProps } from "@/app/admin/home/[id]/page"
import { api } from "@/services/api"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function StoreProductId() {
    const [data, setData] = useState<DataProps>()
    const params = useParams()

    useEffect(() => {
        const response = api.get(`http://localhost:3333/products/${params.id}`)
        console.log(JSON.stringify(response))
    })
    
    return (
        <section className="flex flex-col w-full min-h-screen">
            {params.id}
            <h1>id</h1>
        </section>
    )
}