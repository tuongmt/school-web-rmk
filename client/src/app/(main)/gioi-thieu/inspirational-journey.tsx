"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import {
    DotButton,
    useDotButton,
} from "@/components/ui/embla-carousel-dot-button"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import truyench1 from "../../../assets/gioi-thieu/truyen-cam-hung/1.jpg"

export function InspirationalJourney() {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <div className="w-full bg-[#F5F6FC]">
            <div className="mx-auto max-w-7xl space-y-4 px-2 py-10 md:py-20">
                <div className="flex flex-col space-y-4 pb-4 text-2xl font-bold uppercase md:pb-12 md:text-5xl">
                    Hành trình truyền cảm hứng
                    <br />
                    của Cao Đẳng Quốc Bảo
                </div>

                <div className="flex flex-col space-y-12 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="relative ml-4 h-[450px] rounded-xl bg-[#F4D914] md:h-[470px] md:w-6/12">
                        <Image
                            src={truyench1}
                            alt="image"
                            className="absolute right-4 top-4 h-full w-full rounded-xl object-cover object-top shadow-md shadow-neutral-600"
                        />
                    </div>
                    <div className="relative w-full md:w-6/12">
                        <div className="absolute left-0 top-0 w-1 text-[#B11226]">
                            <svg
                                className="h-[425px] w-[28px] md:h-[500px]"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.0001 0.666667C6.63632 0.666667 0.666787 6.6362 0.666787 14C0.666787 21.3638 6.63632 27.3333 14.0001 27.3333C21.3639 27.3333 27.3335 21.3638 27.3335 14C27.3335 6.6362 21.3639 0.666667 14.0001 0.666667ZM11.5001 14L11.5002 488.5L16.5002 488.5L16.5001 14L11.5001 14Z"
                                    fill="#B11226"
                                />
                            </svg>
                        </div>
                        <div className="ml-10 md:ml-16">
                            <Carousel className="embla">
                                <CarouselContent
                                    className="embla__viewport"
                                    ref={emblaRef}
                                >
                                    <div className="embla__container">
                                        {data.map((item, index) => (
                                            <CarouselItem
                                                key={index}
                                                className="embla__slide text-justify"
                                            >
                                                <h1 className="text-2xl font-bold text-[#ED2427] md:text-5xl">
                                                    {item.title}
                                                </h1>
                                                <ul className="ml-5 list-disc space-y-6 py-6 md:py-12">
                                                    {item.desc.map(
                                                        (des, ind) => (
                                                            <li
                                                                key={ind}
                                                                className="text-sm md:text-base"
                                                            >
                                                                <b>
                                                                    {des.date}
                                                                </b>{" "}
                                                                {des.event}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </CarouselItem>
                                        ))}
                                    </div>
                                </CarouselContent>
                                <div className="embla__dots flex items-center justify-center space-x-3 pt-10">
                                    {scrollSnaps.map((_, index) => (
                                        <DotButton
                                            key={index}
                                            selected={index === selectedIndex}
                                            onClick={() =>
                                                onDotButtonClick(index)
                                            }
                                        />
                                    ))}
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        title: "2024",
        image: truyench1,
        desc: [
            {
                date: "Ngày 06/04/2024,",
                event: "Cao Đẳng Quốc Bảo và TS. Nguyễn Cao Trí – Chủ tịch Hội đồng Trường vinh dự đón nhận Huân chương Lao động Hạng Ba.",
            },
            {
                date: "Ngày 02/06/2024,",
                event: "Cao Đẳng Quốc Bảo được công nhận đạt chuẩn kiểm định chất lượng chương trình đào tạo 7 ngành: Quản trị Dịch vụ Du lịch và Lữ hành, Tài chính – Ngân hàng, Kỹ thuật Xây dựng, Quản trị kinh doanh, Kinh doanh Thương mại, Công nghệ Sinh học và Kiến trúc.",
            },
            {
                date: "Ngày 10/06/2024,",
                event: "Cao Đẳng Quốc Bảo tổ chức Lễ Công bố chứng nhận chương trình đào tạo đạt chuẩn chất lượng AUN-QA cho 04 ngành: Kế toán, Thiết kế Đồ họa, Quản trị Khách sạn và Công nghệ Kỹ thuật Môi trường.",
            },
        ],
    },
    {
        title: "2023",
        image: truyench1,
        desc: [
            {
                date: "Ngày 06/04/2023,",
                event: "Cao Đẳng Quốc Bảo và TS. Nguyễn Cao Trí – Chủ tịch Hội đồng Trường vinh dự đón nhận Huân chương Lao động Hạng Ba.",
            },
            {
                date: "Ngày 02/06/2023,",
                event: "Cao Đẳng Quốc Bảo được công nhận đạt chuẩn kiểm định chất lượng chương trình đào tạo 7 ngành: Quản trị Dịch vụ Du lịch và Lữ hành, Tài chính – Ngân hàng, Kỹ thuật Xây dựng, Quản trị kinh doanh, Kinh doanh Thương mại, Công nghệ Sinh học và Kiến trúc.",
            },
            {
                date: "Ngày 10/06/2023,",
                event: "Cao Đẳng Quốc Bảo tổ chức Lễ Công bố chứng nhận chương trình đào tạo đạt chuẩn chất lượng AUN-QA cho 04 ngành: Kế toán, Thiết kế Đồ họa, Quản trị Khách sạn và Công nghệ Kỹ thuật Môi trường.",
            },
        ],
    },
    {
        title: "2022",
        image: truyench1,
        desc: [
            {
                date: "Ngày 06/04/2022,",
                event: "Cao Đẳng Quốc Bảo và TS. Nguyễn Cao Trí – Chủ tịch Hội đồng Trường vinh dự đón nhận Huân chương Lao động Hạng Ba.",
            },
            {
                date: "Ngày 02/06/2022,",
                event: "Cao Đẳng Quốc Bảo được công nhận đạt chuẩn kiểm định chất lượng chương trình đào tạo 7 ngành: Quản trị Dịch vụ Du lịch và Lữ hành, Tài chính – Ngân hàng, Kỹ thuật Xây dựng, Quản trị kinh doanh, Kinh doanh Thương mại, Công nghệ Sinh học và Kiến trúc.",
            },
            {
                date: "Ngày 10/06/2022,",
                event: "Cao Đẳng Quốc Bảo tổ chức Lễ Công bố chứng nhận chương trình đào tạo đạt chuẩn chất lượng AUN-QA cho 04 ngành: Kế toán, Thiết kế Đồ họa, Quản trị Khách sạn và Công nghệ Kỹ thuật Môi trường.",
            },
        ],
    },
    {
        title: "2021",
        image: truyench1,
        desc: [
            {
                date: "Ngày 06/04/2021,",
                event: "Cao Đẳng Quốc Bảo và TS. Nguyễn Cao Trí – Chủ tịch Hội đồng Trường vinh dự đón nhận Huân chương Lao động Hạng Ba.",
            },
            {
                date: "Ngày 02/06/2021,",
                event: "Cao Đẳng Quốc Bảo được công nhận đạt chuẩn kiểm định chất lượng chương trình đào tạo 7 ngành: Quản trị Dịch vụ Du lịch và Lữ hành, Tài chính – Ngân hàng, Kỹ thuật Xây dựng, Quản trị kinh doanh, Kinh doanh Thương mại, Công nghệ Sinh học và Kiến trúc.",
            },
            {
                date: "Ngày 10/06/2021,",
                event: "Cao Đẳng Quốc Bảo tổ chức Lễ Công bố chứng nhận chương trình đào tạo đạt chuẩn chất lượng AUN-QA cho 04 ngành: Kế toán, Thiết kế Đồ họa, Quản trị Khách sạn và Công nghệ Kỹ thuật Môi trường.",
            },
        ],
    },
]
