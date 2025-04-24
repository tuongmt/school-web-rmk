"use client"

import { ChevronRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import i1 from "../../assets/trang-chu/nganh-khoa/1.png"
import i2 from "../../assets/trang-chu/nganh-khoa/2.png"
import i3 from "../../assets/trang-chu/nganh-khoa/3.png"
import i4 from "../../assets/trang-chu/nganh-khoa/4.png"
import i5 from "../../assets/trang-chu/nganh-khoa/5.png"
import i6 from "../../assets/trang-chu/nganh-khoa/6.png"
import bg from "../../assets/trang-chu/nganh-khoa/bg.png"

export function TrainingMajorFaculty() {
    const data = TrainingMajorFacultyData
    return (
        <div
            style={{
                background: "#D2D3DC",
            }}
            className="relative w-full"
        >
            <div
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 h-full w-full opacity-5"
            />
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col space-y-8 px-2 py-10 md:flex-row md:space-x-4 md:space-y-0 md:py-20">
                {/* Title */}
                <div className="flex w-full flex-col justify-between md:w-3/12">
                    <div>
                        <h1 className="flex flex-col space-y-2 text-2xl font-bold md:text-4xl">
                            Các ngành & khoa đào tạo
                        </h1>
                        <div className="w-[77px] border-4 border-[#F4D914]" />
                    </div>
                    <div className="hidden w-full md:block">
                        <Link
                            href={"/"}
                            className="flex flex-row items-center hover:underline md:space-x-2"
                        >
                            <p className="text-base font-bold">
                                Khám phá ngành học
                            </p>
                            <ChevronRight className="size-5 rounded-br-xl rounded-tr-xl bg-[#B11226] text-[#F4D914] md:size-6" />
                        </Link>
                    </div>
                </div>
                {/* Content */}
                <div className="grid w-full grid-cols-2 gap-x-8 gap-y-8 md:w-9/12 md:grid-cols-3 md:pl-4">
                    {data.map((item, index) => (
                        <div className="space-y-2" key={index}>
                            <div className="flex space-x-2">
                                <Image
                                    src={item.icon}
                                    alt="Các ngành & khoa đào tạo"
                                    className="size-8 md:size-10"
                                />
                                <h2 className="text-lg font-semibold md:text-2xl">
                                    {item.title}
                                </h2>
                            </div>
                            <div className="ml-10 flex flex-col space-y-4 md:ml-12">
                                {item.children.map((item, index) => (
                                    <Link
                                        href={"/"}
                                        key={index}
                                        className="cursor-pointer text-sm font-normal hover:underline md:text-base"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Link Responsive */}
                <div className="flex w-full items-end justify-end md:hidden">
                    <Link
                        href={"/"}
                        className="flex flex-row justify-end space-x-2 hover:underline"
                    >
                        <p className="text-sm font-bold">Khám phá ngành học</p>

                        <ChevronRight className="size-5 rounded-br-xl rounded-tr-xl bg-[#B11226] text-[#F4D914] md:size-6" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

interface TrainingMajorFacultyDataProps {
    icon: StaticImageData
    title: string
    link?: string
    children: {
        title: string
        link?: string
    }[]
}

const TrainingMajorFacultyData: TrainingMajorFacultyDataProps[] = [
    {
        icon: i1,
        title: "Ngôn ngữ",
        children: [
            {
                title: "Khoa Ngôn ngữ Anh",
            },
            {
                title: "Khoa Ngôn ngữ Trung",
            },
            {
                title: "Khoa Ngôn ngữ Hàn",
            },
        ],
    },
    {
        icon: i2,
        title: "Truyền thông",
        children: [
            {
                title: "Khoa Truyền thông đa phương tiện",
            },
            {
                title: "Khoa Quan hệ Công chúng",
            },
        ],
    },
    {
        icon: i3,
        title: "Kinh tế - Quản trị",
        children: [
            {
                title: "Khoa Kiểm toán",
            },
            {
                title: "Khoa Kế toán",
            },
            {
                title: "Khoa Quản trị kinh doanh",
            },
            {
                title: "Khoa Tài chính - Ngân hàng",
            },
            {
                title: "Khoa Kinh doanh quốc tế",
            },
        ],
    },
    {
        icon: i4,
        title: "Du lịch – Khách sạn – Nhà hàng",
        children: [
            {
                title: "Khoa Quản trị dịch vụ du lịch và lữ hành",
            },
            {
                title: "Khoa Quản trị khách sạn",
            },
            {
                title: "Khoa Quản trị Nhà hàng và Dịch vụ Ăn uống",
            },
        ],
    },
    {
        icon: i5,
        title: "Công nghệ - Thiết kế",
        children: [
            {
                title: "Khoa Công nghệ thông tin",
            },
            {
                title: "Khoa Trí tuệ nhân tạo",
            },
            {
                title: "Khoa Thiết kế đồ họa",
            },
            {
                title: "Khoa Mỹ thuật và Thiết kế",
            },
        ],
    },
    {
        icon: i6,
        title: "Chăm sóc sắc đẹp",
        children: [
            {
                title: "Khoa Chăm sóc sắc đẹp",
            },
        ],
    },
]
