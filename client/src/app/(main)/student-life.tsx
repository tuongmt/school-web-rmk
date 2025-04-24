"use client"

import Image from "next/image"
import logo from "../../assets/logo.png"
import bg from "../../assets/trang-chu/cs-sv/bg.png"
import i1 from "../../assets/trang-chu/cs-sv/i1.png"
import i10 from "../../assets/trang-chu/cs-sv/i10.png"
import i11 from "../../assets/trang-chu/cs-sv/i11.png"
import i2 from "../../assets/trang-chu/cs-sv/i2.png"
import i3 from "../../assets/trang-chu/cs-sv/i3.png"
import i4 from "../../assets/trang-chu/cs-sv/i4.png"
import i5 from "../../assets/trang-chu/cs-sv/i5.png"
import i6 from "../../assets/trang-chu/cs-sv/i6.png"
import i7 from "../../assets/trang-chu/cs-sv/i7.png"
import i8 from "../../assets/trang-chu/cs-sv/i8.png"
import i9 from "../../assets/trang-chu/cs-sv/i9.png"

export function StudentLife() {
    return (
        <div className="relative w-full">
            <div
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 h-full w-full opacity-90"
            />
            <div className="relative z-10 mx-auto max-w-7xl space-y-4 px-2 py-10 md:space-y-8 md:py-20">
                {/* Title */}
                <div>
                    <h1 className="flex flex-col space-y-2 text-2xl font-bold md:text-4xl">
                        Cuộc sống sinh viên
                    </h1>
                    <div className="w-[77px] border-4 border-[#F4D914]" />
                </div>
                {/* Content */}
                <div className="relative flex h-full w-full flex-col space-y-2 bg-white p-4 shadow-md shadow-neutral-500">
                    <div className="flex h-full w-full flex-col space-y-2 md:flex-col md:space-y-2">
                        {/* Row 1 */}
                        <div className="flex h-full w-full flex-col space-y-2 md:flex-row md:space-y-0">
                            <div className="flex h-full w-full flex-col items-center space-y-2 md:w-3/12 md:items-start">
                                <Image
                                    src={logo}
                                    alt="Cuộc sống sinh viên"
                                    height={50}
                                />
                                <p className="text-justify text-base font-normal">
                                    Không chỉ xoay quanh học tập, đời sống tại
                                    QBSC cũng vô cùng đa dạng và sôi động. Tất
                                    cả tài năng, sở thích và mong muốn của bạn
                                    đều được lắng nghe. Tại QBSC, bạn sẽ luôn
                                    được đồng hành để trở thành phiên bản tốt
                                    nhất của chính mình.
                                </p>
                            </div>
                            <div className="flex w-full flex-col md:w-9/12 md:space-y-2 md:pl-4">
                                <div className="flex h-full w-full flex-row space-x-2">
                                    <Image
                                        src={i1}
                                        alt="Cuộc sống sinh viên"
                                        className="w-3/12 object-cover object-center"
                                    />
                                    <Image
                                        src={i2}
                                        alt="Cuộc sống sinh viên"
                                        className="w-5/12 object-cover object-center"
                                    />
                                    <Image
                                        src={i3}
                                        alt="Cuộc sống sinh viên"
                                        className="w-4/12 object-cover object-center pr-4"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6">
                            {/* Row 2 & 3 */}
                            <div className="flex w-10/12 flex-col space-y-2">
                                {/* Row 2 */}
                                <div className="flex h-[270px] w-full flex-row space-x-2">
                                    <Image
                                        src={i4}
                                        alt="Cuộc sống sinh viên"
                                        className="w-4/12 object-cover object-center"
                                    />
                                    <Image
                                        src={i5}
                                        alt="Cuộc sống sinh viên"
                                        className="w-4/12 object-cover object-center"
                                    />
                                    <Image
                                        src={i6}
                                        alt="Cuộc sống sinh viên"
                                        className="w-4/12 object-cover object-center"
                                    />
                                </div>
                                {/* Row 3*/}
                                <div className="flex h-full w-full flex-row space-x-2 pr-2">
                                    <Image
                                        src={i8}
                                        alt="Cuộc sống sinh viên"
                                        className="w-2/12 object-cover object-center"
                                    />
                                    <Image
                                        src={i9}
                                        alt="Cuộc sống sinh viên"
                                        className="w-4/12 object-cover object-center"
                                    />
                                    <Image
                                        src={i10}
                                        alt="Cuộc sống sinh viên"
                                        className="w-2/12 object-cover object-center"
                                    />
                                    <Image
                                        src={i11}
                                        alt="Cuộc sống sinh viên"
                                        className="w-4/12 object-cover object-center"
                                    />
                                </div>
                            </div>
                            {/* Image of row 2 & 3 */}
                            <div className="w-2/12">
                                <Image
                                    src={i7}
                                    alt="Cuộc sống sinh viên"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
