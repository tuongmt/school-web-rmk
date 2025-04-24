"use client"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Links, navLinks } from "@/constant/nav-links"
import { MenuSquare, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import LogoImage from "../../assets/logo.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import { Input } from "../ui/input"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../ui/navigation-menu"

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <div className="relative h-auto w-full bg-white px-4 py-2 md:h-16">
            <div className="m-auto flex h-full max-w-7xl items-center justify-between">
                {/* Menu Responsive*/}
                <div
                    className="block cursor-pointer bg-transparent hover:bg-transparent md:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MenuSquare className="size-6 text-black" />
                </div>
                {/* Logo */}
                <Link href={"/"}>
                    <Image
                        src={LogoImage}
                        alt={"logo"}
                        className="bg-transparent"
                        width={145}
                        height={56}
                    />
                </Link>
                <nav className="hidden flex-row md:flex">
                    {navLinks.map((link, index) => (
                        <DropdownMenuNavLinks key={index} {...link} />
                    ))}
                </nav>
                {/* Search Responsive*/}
                <div
                    className="block bg-transparent text-black hover:bg-transparent md:hidden"
                    onClick={() => setOpenSearch(!openSearch)}
                >
                    {openSearch ? (
                        <X className="size-6 cursor-pointer" />
                    ) : (
                        <Search className="size-6 cursor-pointer" />
                    )}
                </div>
            </div>
            {/* Open Nav Responsive */}
            {openNav && (
                <nav className="flex flex-col space-y-3 pb-3 pl-3 text-base font-bold">
                    {navLinks.map((link, index) => (
                        <AccordionMenuNavLinks key={index} {...link} />
                    ))}
                </nav>
            )}
            {/*  Open Search Responsive */}
            {openSearch && (
                <div className="relative mx-auto block w-full items-center justify-center p-4 md:hidden">
                    <Input
                        className="h-10 rounded-xl md:w-64"
                        placeholder="Tìm kiếm..."
                    />
                    <div
                        className="absolute right-7 top-7 h-10 cursor-pointer bg-transparent hover:bg-transparent"
                        onClick={() => {}}
                    >
                        <Search className="size-5 text-black" />
                    </div>
                </div>
            )}
        </div>
    )
}

function DropdownMenuNavLinks({ label, href, children }: Links) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <Link
                            className="text-sm font-bold hover:text-[#A91B0D] lg:text-base"
                            href={href || "/"}
                        >
                            {label}
                        </Link>
                    </NavigationMenuTrigger>
                    {children && children!.length > 0 && (
                        <NavigationMenuContent className="flex w-full flex-col">
                            {children!.map((item, index) => (
                                <Link
                                    href={item.href}
                                    key={index}
                                    className="w-full"
                                    legacyBehavior
                                    passHref
                                >
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()}, hover:bg-neutral-200`}
                                    >
                                        {item.label}
                                    </NavigationMenuLink>
                                </Link>
                            ))}
                        </NavigationMenuContent>
                    )}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function AccordionMenuNavLinks({ label, href, children }: Links) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger
                    className="flex w-full justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Link
                        className="text-sm font-bold lg:text-base"
                        href={href ? href : "/"}
                    >
                        {label}
                    </Link>
                </AccordionTrigger>

                {children!.length > 0 && (
                    <AccordionContent className="flex flex-col font-normal">
                        {children!.map((item, index) => (
                            <Link
                                href={item.href}
                                key={index}
                                className="w-full rounded px-4 py-2 hover:bg-neutral-100"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </AccordionContent>
                )}
            </AccordionItem>
        </Accordion>
    )
}
