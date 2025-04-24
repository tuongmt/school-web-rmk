import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import banner from "../../assets/trang-chu/banner/banner.png"
import text1 from "../../assets/trang-chu/banner/text1.png"
import exchangeBanner from "../../assets/trang-chu/exchange/banner.png"
import sv1 from "../../assets/trang-chu/thong-diep-sv/i1.png"
import decor1 from "../../assets/trang-chu/video/decor1.png"
import { AccompanyingPartner } from "./accompanying-partner"
import { AdmissionInformation } from "./admission-info"
import { News } from "./news"
import { StudentLife } from "./student-life"
import { TrainingMajorFaculty } from "./training-major-faculty"

export default function Home() {
    return (
        <div className="min-h-screen overflow-hidden">
            <MainBanner />
            <Exchange />
            <Video />
            <TrainingMajorFaculty />
            <AdmissionInformation />
            <StudentLife />
            <News />
            <StudentMessage />
            <AccompanyingPartner />
        </div>
    )
}

function MainBanner() {
    return (
        <div
            style={{
                background: "#FF003F4D",
            }}
            className="relative h-screen w-full text-white md:h-[900px]"
        >
            <div
                style={{
                    backgroundImage: `url(${banner.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            {/* Content */}
            <div className="relative mx-auto h-full max-w-7xl">
                <div className="absolute left-10 top-32 flex w-10/12 space-x-4">
                    <div className="absolute h-36 w-2 bg-[#F4D914]" />
                    <Image src={text1} alt="" className="h-40 w-auto" />
                </div>
                <p className="absolute bottom-20 right-0 w-7/12 px-4 text-sm md:bottom-40 md:right-32 md:w-5/12 md:text-base">
                    Mang lại tác động truyền cảm hứng cho xã hội chính là sứ
                    mệnh của QBSG. Kết nối nhiều lĩnh vực khác nhau, hòa trộn
                    những bản sắc độc đáo, QBSG đã xây dựng nên một cộng đồng
                    học thuật phong phú, lớn mạnh, khát khao tìm kiếm tri thức
                    để tạo nên sự đổi mới, đột phá sáng tạo và một thế giới tốt
                    đẹp hơn.
                </p>
            </div>
        </div>
    )
}

function Exchange() {
    return <Image src={exchangeBanner} alt="" className="w-full p-5 md:p-10" />
}

function Video() {
    return (
        <div className="relative w-full">
            <div className="mx-auto flex max-w-7xl flex-col space-y-12 px-2 py-10 md:flex-row md:space-x-12 md:space-y-0 md:py-20">
                <div className="relative mx-auto h-[440px] w-11/12 p-2 md:w-7/12">
                    {/* Video */}
                    <iframe
                        src="https://www.youtube.com/embed/f0UeKenwWf8?autoplay=0"
                        title="YouTube Video"
                        className="h-full w-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {/* Decoration */}
                    <Image
                        src={decor1}
                        alt="Video"
                        className="absolute -right-8 -top-8 w-[125px] object-contain object-center"
                    />
                    <Image
                        src={decor1}
                        alt="Video"
                        className="absolute -left-8 -top-8 w-[125px] rotate-90 object-contain object-center"
                    />
                    <Image
                        src={decor1}
                        alt="Video"
                        className="absolute -bottom-8 -left-8 w-[125px] object-contain object-center"
                    />
                    <Image
                        src={decor1}
                        alt="Video"
                        className="absolute -bottom-8 -right-8 w-[125px] rotate-90 object-contain object-center"
                    />
                </div>
                {/* Content */}
                <div className="my-auto h-full w-full items-center justify-center space-y-4 md:w-5/12 md:space-y-8">
                    <div className="rounded bg-[#B11226] px-8 py-2">
                        <p className="text-center text-xl font-semibold text-[#FFF9C4] md:text-start md:text-3xl">
                            Nơi khai phóng cho những cải tiến đột phá
                        </p>
                    </div>
                    <div className="mx-auto w-8/12">
                        <span className="text-justify text-base md:text-lg">
                            Mang lại tác động truyền cảm hứng cho xã hội chính
                            là sứ mệnh của QBSG. Kết nối nhiều lĩnh vực khác
                            nhau, hòa trộn những bản sắc độc đáo.
                        </span>
                    </div>
                    <div className="flex w-full items-end justify-end">
                        <Link
                            href={"/"}
                            className="flex space-x-2 hover:underline"
                        >
                            <p className="text-sm md:text-base">
                                Tìm hiểu thêm về chúng tôi
                            </p>
                            <ChevronRight className="size-5 rounded-br-xl rounded-tr-xl bg-[#B11226] text-[#F4D914] md:size-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StudentMessage() {
    return (
        <div className="relative w-full bg-[#06060C] text-white">
            <div className="mx-auto flex max-w-7xl space-x-2 px-2 py-10 md:py-20">
                <div className="w-5/12">
                    <Image
                        src={sv1}
                        alt="Thông điệp sinh viên"
                        className="h-full rounded-xl object-cover object-center"
                    />
                </div>
                <div className="flex w-7/12 flex-col space-y-4">
                    <p className="mx-auto w-11/12 text-justify text-sm md:text-xl">
                        &quot;Sau khi trở về từ Mỹ, tôi đã quyết định theo học
                        ngành Quản trị sự kiện thuộc Viện Đào tạo Quốc tế tại
                        trường Đại học Văn Lang. Tôi đã có rất nhiều cơ hội để
                        thực hành, ứng dụng kiến thức vào thực tế trong môi
                        trường học tập rất chuyên nghiệp. Không những thế, các
                        thầy cô cũng vô cùng sẵn lòng khi chia sẻ không chỉ về
                        kiến thức chuyên môn, mà còn là những kinh nghiệm sống,
                        để giúp tôi trưởng thành mỗi ngày. Tôi đã có cơ hội tham
                        gia những hoạt động ngoại khóa, hội thảo và những hoạt
                        động thú vị khác cùng với những người bạn của mình. Tại
                        Văn Lang, tôi đã có những người bạn tuyệt vời, chúng tôi
                        cùng nhau học, cùng nhau trưởng thành và sẵn sàng đối
                        mặt với những thử thách cùng nhau. Tôi rất tự hào khi
                        nói Viện Đào tạo Quốc tế là lựa chọn đúng đắn để tôi học
                        tập và phát triển bản thân.&quot;
                    </p>
                    <div className="flex h-full w-11/12 flex-col justify-end text-right">
                        <p className="text-base font-semibold md:text-2xl">
                            Nguyễn Trần Quang Thái
                        </p>
                        <p className="mr-28 pr-3 text-sm font-normal text-[#D3D3D3] md:mr-40 md:pr-7 md:text-xl">
                            Sinh viên
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
