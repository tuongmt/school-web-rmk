import { IntroductionToQB } from "@/components/introduct-to-qb"
import banner from "../../../assets/gioi-thieu/banner.jpg"
import { EducationPhilosophy } from "./education-philosophy"
import { InspirationalJourney } from "./inspirational-journey"
import { KeyActivities } from "./key-activities"
import { LongTermValue } from "./long-term-value"

export default function IntroductionPage() {
    return (
        <div className="min-h-screen overflow-hidden">
            <Banner />
            <IntroductionToQB />
            <EducationPhilosophy />
            <LongTermValue />
            <InspirationalJourney />
            <KeyActivities />
        </div>
    )
}

function Banner() {
    return (
        <div
            style={{
                background: "#000000",
            }}
            className="relative h-screen text-white md:h-[850px]"
        >
            <div
                style={{
                    backgroundImage: `url(${banner.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 h-full w-full opacity-30"
            />
            <div className="relative mx-auto h-full max-w-7xl">
                <h1 className="mx-auto flex w-11/12 flex-col items-center justify-center space-y-8 pt-32 text-center text-4xl font-semibold leading-[50px] md:w-[800px] md:text-6xl md:leading-[100px]">
                    Nơi hội tụ những người truyền cảm hứng
                </h1>
                <p className="absolute bottom-20 right-0 w-8/12 px-4 text-justify text-sm font-light md:bottom-44 md:right-36 md:w-6/12 md:text-base">
                    Bên cạnh trau dồi cho người học những kiến thức thực tiễn
                    cho sự nghiệp tương lai, sứ mệnh của Quốc Bảo còn là tạo ra
                    những tác động tích cực cho xã hội thông qua khởi xướng
                    nhiều hoạt động học thuật chuyên sâu, từ đó đào tạo ra những
                    thế hệ tài giỏi và truyền cảm hứng cho cộng đồng.
                </p>
            </div>
        </div>
    )
}
