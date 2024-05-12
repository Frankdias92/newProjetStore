
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarProvider, NavbarMenuItem} from "@nextui-org/react";
import Link from "next/link";
import { LinksPages } from "./header/linksPages";


export function Header() {

    return (
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                <Link href="/" className="font-draco flex flex-col relative">
                    <span className="text-lg sm:text-2xl duration-75">Adriel</span>
                    <span className="absolute -right-3 text-store-orange bottom-0 translate-y-3 -rotate-6">999</span>
                </Link>
                </NavbarBrand>

                <NavbarContent className="flex gap-4 font-raleway font-light tracking-wider opacity-80" justify="center">
                    <LinksPages href="/" pageName="Home"/>
                    <LinksPages href="/store" pageName="Loja"/>
                    <LinksPages href="#" pageName="Parceiros"/>
                </NavbarContent>

                <NavbarContent justify="end">
                    <Button color="primary" variant="shadow">
                        <LinksPages href="https://discord.com/invite/FHkXD9M8N8" pageName="Discord"/>
                    </Button>
                </NavbarContent>
            </Navbar>
    )
}