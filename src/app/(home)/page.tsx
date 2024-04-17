'use client'

import { Header } from "@/components/home/header";
import { Main } from "@/components/home/main";



export default function Home() {
  return (
      <section className="flex w-full min-h-full flex-col justify-between items-center bg-store-primary text-store-secondary">
        <Header />
        <Main />
      </section>
  );
}
