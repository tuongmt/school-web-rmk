"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image, { StaticImageData } from "next/image"
import React from "react"
import i1 from "../../assets/trang-chu/doi-tac/i1.png"
import i2 from "../../assets/trang-chu/doi-tac/i2.png"
import i3 from "../../assets/trang-chu/doi-tac/i3.png"
import i4 from "../../assets/trang-chu/doi-tac/i4.png"
import i5 from "../../assets/trang-chu/doi-tac/i5.png"
import i6 from "../../assets/trang-chu/doi-tac/i6.png"

export function AccompanyingPartner() {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    return (
        <div className="relative w-full">
            <div className="mx-auto max-w-7xl space-y-8 px-2 py-10 md:py-20">
                {/* Title */}
                <h1 className="w-full text-center text-xl font-bold md:text-3xl">
                    Đối tác đồng hành
                </h1>
                {/* Content */}
                <Carousel
                    plugins={[plugin.current]}
                    opts={{ align: "start", loop: true }}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.play}
                >
                    <CarouselContent>
                        {data.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="h-[60px] w-[288px] basis-1/3 md:h-[80px] md:basis-1/5"
                            >
                                <Image
                                    src={item.image}
                                    alt={"Đối tác đồng hành"}
                                    className="h-full w-full object-contain object-center hover:scale-105"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

interface AccompanyingPartnerDataProps {
    image: StaticImageData
}

const data: AccompanyingPartnerDataProps[] = [i1, i2, i3, i4, i5, i6].map(
    (image) => ({ image }),
)
