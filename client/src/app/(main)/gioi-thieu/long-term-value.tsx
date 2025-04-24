"use client"

import Image from "next/image"
import giatridh1 from "../../../assets/gioi-thieu/gia-tri-dai-han/1.png"
import giatridh2 from "../../../assets/gioi-thieu/gia-tri-dai-han/2.jpg"
import giatridh3 from "../../../assets/gioi-thieu/gia-tri-dai-han/3.png"
import giatridh4 from "../../../assets/gioi-thieu/gia-tri-dai-han/4.jpg"
import vector1 from "../../../assets/gioi-thieu/gia-tri-dai-han/vector1.jpg"
import vector2 from "../../../assets/gioi-thieu/gia-tri-dai-han/vector2.jpg"
import vector3 from "../../../assets/gioi-thieu/gia-tri-dai-han/vector3.jpg"
import logo from "../../../assets/logo.png"

export function LongTermValue() {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl px-2 py-10 md:py-20">
                <div className="flex flex-col items-center justify-center font-bold uppercase md:space-y-8">
                    <h1 className="text-2xl md:text-5xl">Giá trị dài hạn</h1>
                    <h2 className="flex flex-col items-center justify-center text-center text-xl leading-[72px] text-[#ED2427] md:text-[45px]">
                        Bứt phá - Tự do - Bền vững
                    </h2>
                </div>
                <div className="relative z-10 grid h-[620px] w-full grid-cols-2 gap-4 px-2 md:my-12 md:h-[1440px]">
                    <Image
                        src={giatridh1}
                        alt="Giá trị dài hạn"
                        className="left-0 top-0 h-[300px] w-full rounded-2xl object-cover object-center shadow-neutral-400 md:absolute md:h-[599px] md:w-7/12 md:shadow-lg"
                    />
                    <Image
                        src={giatridh2}
                        alt="Giá trị dài hạn"
                        className="right-0 top-0 h-[300px] w-full rounded-2xl object-cover object-center shadow-neutral-400 md:absolute md:h-[758px] md:w-4/12 md:shadow-lg"
                    />
                    <Image
                        src={logo}
                        alt="Giá trị dài hạn"
                        className="absolute left-1/2 top-1/2 z-20 h-[105px] w-[250px] -translate-x-1/2 -translate-y-1/2 transform object-cover object-center p-2 md:block md:w-[272px]"
                    />
                    <Image
                        src={giatridh3}
                        alt="Giá trị dài hạn"
                        className="bottom-0 left-0 ml-0 h-[300px] w-full rounded-2xl object-cover object-center shadow-neutral-400 md:absolute md:h-[758px] md:w-4/12 md:shadow-lg"
                    />
                    <Image
                        src={giatridh4}
                        alt="Giá trị dài hạn"
                        className="bottom-0 right-0 mr-0 h-[300px] w-full rounded-2xl object-cover object-center shadow-neutral-400 md:absolute md:h-[599px] md:w-7/12 md:shadow-lg"
                    />
                </div>
            </div>
            <Image
                src={vector1}
                alt="Giá trị dài hạn"
                className="absolute -left-1/2 top-0 z-0 bg-cover bg-center bg-no-repeat md:-left-20 md:h-[603px] md:w-[577px]"
            />
            <Image
                src={vector2}
                alt="Giá trị dài hạn"
                className="absolute z-0 hidden bg-cover bg-center bg-no-repeat md:-right-80 md:bottom-80 md:block md:h-[628px] md:w-[581px]"
            />
            <Image
                src={vector3}
                alt="Giá trị dài hạn"
                className="absolute -right-20 bottom-0 z-0 bg-cover bg-center bg-no-repeat md:-left-20 md:h-[480px] md:w-[459px]"
            />
        </div>
    )
}
