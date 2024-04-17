
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export function Header() {

    return (

        <Navbar shouldHideOnScroll>
            <NavbarBrand>
            <span>Adriel 999</span>
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

                <NavbarItem>
                    <Button color="primary" variant="shadow">
                        Discord
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
       
    )
}