
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarProvider, NavbarMenuItem} from "@nextui-org/react";


export function Header() {

    return (

        <Navbar shouldHideOnScroll>
            <NavbarBrand>
            <div className="font-draco flex flex-col relative">
                <span className="text-2xl">Adriel</span>
                <span className="absolute -right-3 text-store-orange bottom-0 translate-y-3 -rotate-6">999</span>
            </div>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Loja
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Parceiros
                    </Link>
                </NavbarItem>

            </NavbarContent>

            <NavbarContent justify="end">
                <Button color="primary" variant="shadow">
                    Discord
                </Button>
            </NavbarContent>
        </Navbar>
       
    )
}