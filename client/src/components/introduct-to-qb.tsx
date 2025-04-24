import { ChevronRight } from "lucide-react"
import Image, { ImageProps } from "next/image"
import doinetqb1 from "../assets/doi-net-qb/1.jpg"
import doinetqb2 from "../assets/doi-net-qb/2.jpg"
import doinetqb3 from "../assets/doi-net-qb/3.jpg"

export function IntroductionToQB() {
    return (
        <div style={{ background: "#800020" }} className="w-full text-white">
            <div className="mx-auto max-w-7xl space-y-0 px-2 py-10 md:space-y-4 md:py-20">
                <div className="mb-0 flex w-full flex-col items-center justify-center space-y-4 pb-8 text-center md:mb-8 md:flex-row md:justify-between md:space-x-8 md:text-start">
                    <h1 className="w-full text-3xl font-bold md:w-3/6 md:text-6xl">
                        Đôi nét về Quốc Bảo
                    </h1>
                    <p className="w-9/12 text-center text-base md:w-3/6 md:max-w-xl md:text-start md:text-2xl">
                        Những cột mốc đáng nhớ trên suốt hành trình 29 năm
                        truyền cảm hứng của Quốc Bảo.
                    </p>
                </div>
                <div className="flex w-full flex-col items-center space-x-0 space-y-8 md:flex-row md:space-x-4 md:space-y-0">
                    <ImageOfIntroductionToQB src={doinetqb1} alt="doinetqb1" />
                    <div className="flex w-9/12 flex-col items-center justify-center space-y-4 md:w-3/6 md:items-start md:px-8">
                        <h1 className="text-4xl font-bold text-[#F4D914] md:text-7xl">
                            400+
                        </h1>
                        <p className="text-center text-base md:text-start md:text-2xl">
                            Bài công bố khoa học cùng nhiều dự án nghiên cứu
                            hướng đến giải quyết các vấn đề của xã hội
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse items-center space-x-0 space-y-8 md:flex-row md:space-x-4 md:space-y-0">
                    <div className="flex w-9/12 flex-col items-center justify-center space-y-4 py-8 md:w-3/6 md:items-start md:px-8 md:py-0">
                        <h1 className="text-4xl font-bold text-[#F4D914] md:text-7xl">
                            40.000+
                        </h1>
                        <p className="text-center text-base md:text-start md:text-2xl">
                            Sinh viên theo học với hệ thống đa ngành
                        </p>
                    </div>

                    <ImageOfIntroductionToQB src={doinetqb2} alt="doinetqb1" />
                </div>
                <div className="flex flex-col items-center space-x-0 space-y-8 md:flex-row md:space-x-4 md:space-y-0">
                    <ImageOfIntroductionToQB src={doinetqb3} alt="doinetqb1" />
                    <div className="flex w-full flex-col items-center justify-center space-y-4 md:w-3/6 md:items-start md:px-8">
                        <h1 className="text-4xl font-bold text-[#F4D914] md:text-7xl">
                            60+
                        </h1>
                        <p className="text-center text-base md:text-start md:text-2xl">
                            Ngành đào tạo đại học cho phép sinh viên linh hoạt
                            lựa chọn
                        </p>
                    </div>
                </div>
                <button className="flex w-full justify-end space-x-2 pr-2 pt-4 hover:underline md:pr-0 md:pt-0">
                    <p className="text-sm font-bold tracking-wider md:text-base">
                        Khám phá các cột mốc
                    </p>
                    <div className="rounded-br-xl rounded-tr-xl bg-[#F4D914]">
                        <ChevronRight className="size-5 text-[#ED2427] md:size-6" />
                    </div>
                </button>
            </div>
        </div>
    )
}

function ImageOfIntroductionToQB({ src, alt }: ImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            className="w-9/12 rounded-3xl object-cover object-center shadow-lg shadow-neutral-800 md:max-h-[350px] md:w-3/6"
        />
    )
}
