"use client"

import Image from "next/image"
import trietlygd1 from "../../../assets/gioi-thieu/triet-ly-giao-duc/1.jpg"
import trietlygd2 from "../../../assets/gioi-thieu/triet-ly-giao-duc/2.jpg"
import vector from "../../../assets/gioi-thieu/triet-ly-giao-duc/vector.jpg"
import vector1 from "../../../assets/gioi-thieu/triet-ly-giao-duc/vector1.jpg"

export function EducationPhilosophy() {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl space-y-12 p-10 px-2 md:py-20">
                <div className="flex flex-col items-center justify-center space-y-4 font-bold uppercase md:space-y-8">
                    <h1 className="text-2xl md:text-5xl">Triết lý giáo dục</h1>
                    <h2 className="flex flex-col items-center justify-center text-center text-xl text-[#ED2427] md:text-[45px] md:leading-[72px]">
                        Mưu cầu hạnh phúc và tự do <br />
                        dựa trên nền tảng đạo đức và trí tuệ
                    </h2>
                </div>
                <div className="flex w-full justify-between space-x-2 md:space-x-24 md:px-12">
                    <div className="flex w-3/6 flex-col items-start justify-start space-y-4 px-2 md:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-2xl font-bold uppercase underline md:text-4xl">
                                Sứ Mệnh
                            </h1>
                            <p className="text-justify">
                                Sứ mạng của Quốc Bảo là đào tạo những con người
                                có khả năng học tập suốt đời để trở thành công
                                dân toàn cầu, thích nghi và đóng góp tích cực
                                cho xã hội luôn thay đổi, có ý thức phát triển
                                bản thân, đặc biệt là ngoại ngữ và tin học,
                                thông qua các trải nghiệm thực tế
                            </p>
                        </div>

                        <div className="relative h-[240px] w-full rounded-xl bg-[#ED2427] pt-4 shadow-md shadow-neutral-600 md:h-[520px]">
                            <Image
                                src={trietlygd2}
                                alt="image"
                                className="absolute left-2 top-2 h-full w-full rounded-xl object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="flex w-3/6 flex-col items-end justify-end space-y-4 pl-4 pt-6 md:space-y-8">
                        <div className="relative h-[240px] w-full items-end justify-end rounded-xl bg-[#ED2427] py-4 shadow-md shadow-neutral-600 md:h-[520px]">
                            <Image
                                src={trietlygd1}
                                alt="image"
                                className="absolute bottom-2 right-2 h-full w-full rounded-xl object-cover object-center"
                            />
                        </div>

                        <div className="items-end justify-end space-y-2 md:space-y-4">
                            <h2 className="w-full justify-end text-end text-2xl font-bold uppercase underline md:text-4xl">
                                Tầm nhìn
                            </h2>
                            <p className="flex items-end justify-end text-justify">
                                Quốc Bảo hướng đến phụng sự xã hội bằng những
                                con người năng động, sáng tạo, có tâm và có tầm;
                                biết yêu thương, trân trọng cuộc sống; có khả
                                năng làm mới chính mình; đạt được hạnh phúc & tự
                                do bằng trí tuệ và đạo đức
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-8">
                    <h2 className="text-center text-2xl font-bold uppercase underline md:mt-24 md:text-4xl">
                        Giá trị cốt lõi
                    </h2>
                    <div className="flex w-full justify-between space-x-4 rounded-2xl bg-black px-12 py-7 text-xl font-bold uppercase text-white md:flex-row md:px-20 md:py-14 md:text-4xl">
                        {["Đạo đức", "Ý chí", "Sáng tạo"].map((text, index) => (
                            <h2 key={index} className="hover:underline">
                                <span className="text-[#ED2427]">#</span> {text}
                            </h2>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decoration */}
            <Image
                src={vector}
                alt="image"
                className="absolute -left-1/4 top-20 z-0 h-[500px] w-[350px] bg-cover bg-center bg-no-repeat md:-left-20 md:h-[631px] md:w-[543px]"
            />
            <Image
                src={vector1}
                alt="image"
                className="absolute -right-1/2 bottom-80 z-0 bg-cover bg-center bg-no-repeat md:-right-10 md:h-[439px] md:w-[470px]"
            />
        </div>
    )
}
