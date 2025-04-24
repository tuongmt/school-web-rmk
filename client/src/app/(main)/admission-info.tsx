"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import btn from "../../assets/trang-chu/tuyen-sinh/btn.png"
import decor1 from "../../assets/trang-chu/tuyen-sinh/decor1.png"
import i1 from "../../assets/trang-chu/tuyen-sinh/i1.png"
import i2 from "../../assets/trang-chu/tuyen-sinh/i2.png"
import i3 from "../../assets/trang-chu/tuyen-sinh/i3.png"

export function AdmissionInformation() {
    return (
        <div className="relative w-full bg-[#800020]">
            <div className="relative z-10 mx-auto max-w-7xl space-y-4 px-2 py-10 md:space-y-8 md:py-20">
                {/* Title */}
                <h1 className="text-xl font-bold text-white md:text-4xl">
                    Thông tin tuyển sinh
                </h1>
                {/* Content */}
                <div className="flex w-full flex-row items-center justify-center space-x-4">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            className="w-full border-none md:hover:scale-105"
                        >
                            <CardContent className="relative flex flex-col space-y-2">
                                <Link href={item.link}>
                                    <Image
                                        src={item.image}
                                        alt="Thông tin tuyển sinh"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </Link>

                                <div className="pb-8">
                                    <p className="text-xs text-[#ED2427]">
                                        {item.subtitle}
                                    </p>
                                    <Link href={item.link}>
                                        <h2 className="my-4 line-clamp-2 w-full text-base font-semibold md:text-lg">
                                            {item.title}
                                        </h2>
                                    </Link>
                                </div>
                                <Link
                                    href={item.link}
                                    className="absolute bottom-0 right-0 rounded-br-lg rounded-tl-lg bg-[#ED2427] px-4 py-2 text-center text-[#F8F8F8] hover:text-[#F4D914]"
                                >
                                    <p className="text-sm md:text-base">
                                        Đọc tiếp
                                    </p>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* More Link */}
                <div className="flex w-full items-center justify-center pt-4 md:pt-8">
                    <Link
                        href={"/tuyen-sinh"}
                        className="relative flex items-center justify-center"
                    >
                        <Image
                            src={btn}
                            alt="Thông tin tuyển sinh"
                            className="h-full w-full"
                        />
                        <p className="absolute text-sm font-semibold text-black hover:text-[#ED2427] md:text-base">
                            Xem thêm
                        </p>
                    </Link>
                </div>
            </div>
            {/* Decoration */}
            <Image
                src={decor1}
                alt="Thông tin tuyển sinh"
                className="absolute right-0 top-0"
            />
            <Image
                src={decor1}
                alt="Thông tin tuyển sinh"
                className="absolute bottom-0 left-0 rotate-180"
            />
        </div>
    )
}

interface AdmissionInformationDataProps {
    title: string
    subtitle: string
    link: string
    image: StaticImageData
}

const data: AdmissionInformationDataProps[] = [
    {
        title: "QBSC CÔNG BỐ ĐIỂM TRÚNG TUYỂN THEO PHƯƠNG THỨC XÉT TUYỂN HỌC BẠ TUYỂN",
        subtitle: "Hoạt động của trường",
        link: "/",
        image: i1,
    },
    {
        title: "QBSC GIA HẠN THỜI GIAN NHẬN HỒ SƠ XÉT TUYỂN BỔ SUNG ĐẾN 10/9",
        subtitle: "Hoạt động của trường",
        link: "/",
        image: i2,
    },
    {
        title: "HUFLIT tặng 500 suất Học bổng và Quỹ hỗ trợ dành cho Tân sinh viên K30 trị giá hơn 20 tỷ đồng",
        subtitle: "Hoạt động của trường",
        link: "/",
        image: i3,
    },
]
