"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import btn from "../../assets/trang-chu/news/btn.png"
import i1 from "../../assets/trang-chu/news/i1.png"
import i2 from "../../assets/trang-chu/news/i2.png"
import i3 from "../../assets/trang-chu/news/i3.png"
import i4 from "../../assets/trang-chu/news/i4.png"
import i5 from "../../assets/trang-chu/news/i5.png"

export function News() {
    const firstData = NewsData[0]

    const data = NewsData.slice(1)

    return (
        <div className="relative w-full bg-[#F5F6FC]">
            <div className="mx-auto flex max-w-7xl flex-col space-y-4 px-2 py-10 md:py-20">
                <div className="flex justify-between">
                    {/* Title */}
                    <div>
                        <h1 className="flex flex-col space-y-2 text-2xl font-bold md:text-4xl">
                            Tin tức
                        </h1>
                        <div className="w-[77px] border-4 border-[#F4D914]" />
                    </div>
                    <Link
                        href={"/tin-tuc"}
                        className="relative flex items-center justify-center"
                    >
                        <Image src={btn} alt="" className="h-full w-full" />
                        <p className="absolute text-sm font-semibold text-white hover:text-[#F4D914] md:text-base">
                            Xem tất cả Tin tức
                        </p>
                    </Link>
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-8">
                    {/* Main News */}
                    <div className="flex w-full md:w-6/12 md:flex-row md:pt-4">
                        <Card className="flex h-fit items-center justify-center md:hover:scale-105">
                            <CardContent>
                                <div className="flex flex-col space-y-2 p-2">
                                    <Link href={firstData.link}>
                                        <Image
                                            src={firstData.image}
                                            alt="Tin tức"
                                            className="w-full object-cover object-center"
                                        />
                                    </Link>
                                    <div className="flex flex-col space-y-2 md:space-y-4">
                                        <p className="text-sm font-medium text-[#ED2427]">
                                            {firstData.subtitle}
                                        </p>
                                        <Link
                                            href={firstData.link}
                                            className="text-lg font-semibold md:text-xl"
                                        >
                                            {firstData.title}
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* News List */}
                    <div className="w-full space-y-2 md:w-6/12">
                        {data.map((item, index) => (
                            <Card key={index} className="md:hover:scale-105">
                                <CardContent>
                                    <div className="flex flex-row space-x-2">
                                        <div className="h-full w-4/12">
                                            <Link href={item.link}>
                                                <Image
                                                    src={item.image}
                                                    alt="Tin tức"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex w-8/12 flex-col space-y-2">
                                            <p className="text-xs font-medium text-[#ED2427]">
                                                {item.subtitle}
                                            </p>
                                            <Link
                                                href={item.link}
                                                className="line-clamp-2 text-base font-semibold md:text-lg"
                                            >
                                                {item.title}
                                            </Link>
                                        </div>
                                        <hr />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface NewsDataProps {
    title: string
    subtitle: string
    link: string
    image: StaticImageData
}

const NewsData: NewsDataProps[] = [
    {
        title: "Hội thảo game (phiên 2) hội thạo chuyên sâu về phát triển game, thiết kế game và công nghệ mới nhất trong năm 2024",
        subtitle: "Hoạt động của trường",
        link: "/",
        image: i1,
    },
    {
        title: 'Chào đón Khoá 30: Thế hệ tân sinh viên tài năng, bản lĩnh, "bội thu" học bổng đầu khoá',
        subtitle: "Hoạt động của trường",
        link: "/",
        image: i2,
    },
    {
        title: "ĐÊM NHẠC “SEE YOUTH AGAIN – NHẮN TUỔI ĐÔI MƯƠI”: MIỀN ĐẤT HỨA CỦA THANH XUÂN",
        subtitle: "Hoạt động của trường",
        link: "/",
        image: i3,
    },
    {
        title: "Lắng nghe góc nhìn từ “hậu phương” của nghệ sĩ qua talkshow “Nghề Quản lý ngôi sao – Những góc nhìn đa chiều”",
        subtitle: "Hoạt động của trường",
        link: "/",
        image: i4,
    },
    {
        title: "Tham quan doanh nghiệp công nghệ cùng IT TOUR năm 2024",
        subtitle: "Hoạt động của trường",
        link: "/",
        image: i5,
    },
]
