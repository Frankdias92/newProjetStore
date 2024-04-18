'use client'

import { Header } from "@/components/home/header";
import { Main } from "@/components/home/main";
import { Explore } from "@/components/home/explore";
import { Feature } from "@/components/home/feature";
import { Footer } from "@/components/home/footer";



export default function Home() {
  return (
      <section className="flex w-full min-h-full flex-col justify-between items-center bg-store-primary text-store-secondary">
        <Header />
        <Main />
        <Explore />
        <Feature />
        <Footer />
      </section>
  );
}
