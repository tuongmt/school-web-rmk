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
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useRef } from "react"
import img1 from "../../../assets/gioi-thieu/hoat-dong-noi-bat/1.jpg"
import img2 from "../../../assets/gioi-thieu/hoat-dong-noi-bat/2.jpg"
import img3 from "../../../assets/gioi-thieu/hoat-dong-noi-bat/3.jpg"
import img4 from "../../../assets/gioi-thieu/hoat-dong-noi-bat/4.jpg"
import img5 from "../../../assets/gioi-thieu/hoat-dong-noi-bat/5.jpg"

export function KeyActivities() {
    const autoplayPlugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true }),
    )

    const [emblaRef, emblaApi] = useEmblaCarousel({}, [autoplayPlugin.current])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const slide_count = images.length
    const slides = Array.from(Array(slide_count).keys())

    return (
        <div className="relative h-full w-full">
            <div className="absolute z-0 h-[490px] w-full overflow-hidden bg-[#800020]" />
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-12 px-2 py-10 md:py-20">
                <h1 className="relative text-center text-2xl font-bold uppercase text-white md:text-5xl">
                    Hoạt động nổi bật
                </h1>

                <div className="flex w-10/12 flex-col items-center justify-center">
                    <Carousel
                        plugins={[autoplayPlugin.current]}
                        onMouseEnter={autoplayPlugin.current.stop}
                        onMouseLeave={autoplayPlugin.current.play}
                        className="embla"
                    >
                        <CarouselContent
                            className="embla__viewport"
                            ref={emblaRef}
                        >
                            <div className="embla__container">
                                {slides.map((index) => (
                                    <CarouselItem
                                        key={index}
                                        className="embla__slide mx-auto flex items-center justify-center"
                                    >
                                        <Image
                                            src={images[index]}
                                            alt="Hoạt động nổi bật"
                                            className="h-[500px] w-full object-cover object-center"
                                        />
                                    </CarouselItem>
                                ))}
                            </div>
                        </CarouselContent>
                        <div className="embla__dots flex items-center justify-center space-x-3 pt-10">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    selected={index === selectedIndex}
                                    onClick={() => onDotButtonClick(index)}
                                />
                            ))}
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

const images = [img1, img2, img3, img4, img5]
