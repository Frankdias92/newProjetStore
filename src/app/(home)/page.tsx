'use client'

import { Main } from "@/components/home/main";
import { Explore } from "@/components/home/explore";
import { Feature } from "@/components/home/feature";
import { LatestVideos } from "@/components/home/latestVideos";
import { RecomendProducts } from "@/components/home/productsRecomends";




export default function Home() {
  return (
      <section className="flex min-w-[739px] xl:w-full min-h-full flex-col justify-between items-center bg-store-primary text-store-secondary gap-y-4">
        <Main />
        <Explore />
        <Feature />
        <LatestVideos />
        <RecomendProducts />
      </section>
  );
}
