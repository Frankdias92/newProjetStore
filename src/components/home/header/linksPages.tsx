import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";

interface LinksPagesProps {
    href: string
    pageName: string
}


export function LinksPages({ href, pageName }: LinksPagesProps) {

    return (
        <NavbarItem>
            <Link 
                color="foreground" 
                href={href} 
                className="opacity-80 hover:opacity-100 duration-75"
            >
                {pageName}
            </Link>
        </NavbarItem>
    )
}