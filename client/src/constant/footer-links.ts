import { ImageProps } from "next/image"
import facebook from "../assets/social-media/facebook.png"
import instagram from "../assets/social-media/instagram.png"
import tiktok from "../assets/social-media/tiktok.png"
import { Links } from "./nav-links"

export const facultyLinks: Links[] = [
    {
        label: "Khoa Ngôn ngữ",
        href: "/",
    },
    {
        label: "Khoa Truyền thông",
        href: "/",
    },
    {
        label: "Khoa Kinh tế - Quản trị",
        href: "/",
    },
    {
        label: "Khoa Du lịch - Khách sạn - Nhà hàng",
        href: "/",
    },
    {
        label: "Khoa Công nghệ - Thiết kế",
        href: "/",
    },
    {
        label: "Khoa Chăm sóc sắc đẹp",
        href: "/",
    },
]

interface SocialMediaLinksProps {
    label: string
    href: string
    icon: ImageProps
}

export const socialMediaLinks: SocialMediaLinksProps[] = [
    {
        label: "Facebook",
        href: "/",
        icon: {
            src: facebook,
            alt: "facebook",
            width: 24,
            height: 24,
        },
    },
    {
        label: "Instagram",
        href: "/",
        icon: {
            src: instagram,
            alt: "instagram",
            width: 24,
            height: 24,
        },
    },
    {
        label: "Tiktok",
        href: "/",
        icon: {
            src: tiktok,
            alt: "tiktok",
            width: 24,
            height: 24,
        },
    },
]

export const aboutUsLinks: Links[] = [
    {
        label: "Giới thiệu",
        href: "/",
    },
    {
        label: "Tuyển dụng",
        href: "/",
    },
    {
        label: "Tin tức",
        href: "/",
    },
    {
        label: "Hình ảnh",
        href: "/",
    },
]
