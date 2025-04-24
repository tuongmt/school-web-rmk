import { headerLinks } from "@/constant/header-links"
import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"

export default function TopNav() {
    return (
        <div
            style={{ background: "#A91B0D" }}
            className="relative h-auto w-full px-4 py-2"
        >
            <div className="mx-auto flex w-full max-w-7xl items-center space-x-4 text-xs font-semibold md:text-sm">
                <Link href={"/"} className="text-white hover:underline">
                    Sitemap
                </Link>
                <div className="flex w-full items-center justify-end space-x-2 space-y-1 md:space-x-4 md:space-y-0">
                    {/* Nav */}
                    <div className="mr-2 flex items-center space-x-3 space-y-1 text-white md:mr-0 md:space-y-0">
                        {headerLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href || "/"}
                                className="hover:underline"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    {/* Search */}
                    <div className="relative mx-auto hidden items-center justify-center md:block">
                        <Input
                            className="h-6 w-64 font-normal"
                            placeholder="Tìm kiếm..."
                        />
                        <Button className="absolute right-0 top-0 h-6 bg-transparent hover:bg-transparent">
                            <Search className="size-5 text-black" />
                        </Button>
                    </div>
                    {/* Language Selection */}
                    <div className="flex items-center justify-center">
                        <Select>
                            <SelectTrigger className="flag-icon h-6 w-[90px] border-2 border-[#FFEF60] text-xs font-semibold md:text-sm">
                                <SelectValue placeholder={"🇬🇧 Eng"} />
                            </SelectTrigger>
                            <SelectContent className="min-w-[5rem]">
                                <SelectGroup>
                                    <SelectItem
                                        value={"en"}
                                        className="flag-icon"
                                    >
                                        🇬🇧 Eng
                                    </SelectItem>
                                    <SelectItem
                                        value={"vi"}
                                        className="flag-icon"
                                    >
                                        🇻🇳 Vie
                                    </SelectItem>
                                    <SelectItem
                                        value={"ko"}
                                        className="flag-icon"
                                    >
                                        🇰🇷 Kor
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}
