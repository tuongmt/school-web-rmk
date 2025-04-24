"use client"

import {
    aboutUsLinks,
    facultyLinks,
    socialMediaLinks,
} from "@/constant/footer-links"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import backgroundImage from "../../assets/bg-img-footer.png"
import logo from "../../assets/logo.png"

export default function Footer() {
    const router = useRouter()

    return (
        <footer
            style={{
                background: "#A91B0D",
            }}
            className="relative h-auto text-white"
        >
            <div
                style={{
                    backgroundImage: `url(${backgroundImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 h-full w-full opacity-30"
            ></div>
            <div className="relative mx-auto max-w-7xl space-y-4 p-6">
                {/* Contact */}
                <div className="flex flex-col items-start space-x-0 space-y-4 md:flex-row md:items-center md:justify-between md:space-x-8 md:space-y-0">
                    <Image
                        src={logo}
                        alt={"logo"}
                        className="h-[104px] w-[267px] cursor-pointer rounded-xl bg-[#EFEFEF99]"
                        onClick={() => router.push("/")}
                    />
                    <div className="flex flex-col items-start">
                        <b>Email</b>
                        <p>info@qbsc.edu.vn</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <b>Đào tạo</b>
                        <p>028.7109 9221</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <b>Địa chỉ</b>
                        <p>828 Sư Vạn Hạnh, phường 13, Quận 10, TP.HCM</p>
                    </div>
                </div>
                <hr className="h-0.5 w-full bg-white" />
                {/* Sub Nav */}
                <div className="flex w-full flex-col items-start justify-center space-y-4 text-base md:flex-row md:justify-between md:space-y-0">
                    <div className="mr-4 flex w-full flex-col items-start justify-between space-y-5 md:w-7/12 md:flex-row md:space-x-10 md:space-y-0">
                        <div className="flex flex-col items-start space-y-2 md:space-y-3">
                            <b className="mb-1 md:mb-4">Về chúng tôi</b>
                            {aboutUsLinks.map((link, index) => (
                                <Link
                                    href={link.href || "/"}
                                    key={index}
                                    className="hover:underline"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col items-start space-y-2 md:space-y-3">
                            <b className="mb-1 md:mb-4">Theo dõi</b>
                            {socialMediaLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="flex space-x-2 hover:underline"
                                >
                                    <Image
                                        src={item.icon.src}
                                        alt={item.icon.alt}
                                        width={item.icon.width}
                                        height={item.icon.height}
                                    />
                                    <p>{item.label}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col items-start space-y-2 md:space-y-3">
                            <b className="mb-1 md:mb-4">
                                Các khoa và ngành đào tạo
                            </b>
                            {facultyLinks.map((link, index) => (
                                <Link
                                    href={link.href || "/"}
                                    key={index}
                                    className="hover:underline"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Map */}
                    <div className="h-[314px] w-[416px] rounded-xl bg-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.460294954711!2d106.66478987536954!3d10.776014689372778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ae5901877%3A0x42c37972de865906!2zODI4IMSQLiBTxrAgVuG6oW4gSOG6oW5oLCBQaMaw4budbmcgMTIsIFF14bqtbiAxMCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1731393686518!5m2!1sen!2s"
                            className="flex h-full w-full items-center justify-center rounded-xl p-2"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <hr className="h-0.5 w-full bg-white" />
                {/* Copyright */}
                <div className="flex flex-col justify-between space-y-2 md:flex-row md:space-y-0">
                    <p>@2024 QuocBaoSaiGonCollege. All rights reserved</p>
                    <div className="flex justify-end space-x-6">
                        <Link href={"/"} className="hover:underline">
                            Điều khoản
                        </Link>
                        <Link href={"/"} className="hover:underline">
                            Chính sách bảo mật
                        </Link>
                        <Link href={"/"} className="hover:underline">
                            Copyright
                        </Link>
                    </div>
                </div>
            </div>
            {/* Decoration */}
            <svg
                className="absolute right-4 top-4 md:opacity-50 lg:opacity-100"
                width="137"
                height="158"
                viewBox="0 0 137 158"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.9">
                    <path
                        d="M15.2902 1.92316L18.0509 12.1766L18.1258 12.4546L18.4037 12.5294L28.6572 15.2902L18.4037 18.0509L18.1258 18.1258L18.0509 18.4037L15.2902 28.6572L12.5294 18.4037L12.4546 18.1258L12.1766 18.0509L1.92316 15.2902L12.1766 12.5294L12.4546 12.4546L12.5294 12.1766L15.2902 1.92316Z"
                        fill="#FFF9C4"
                        stroke="#FFF9C4"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M104.418 57.0457L96.6339 28.1338L88.8494 57.0457L59.9375 64.8302L88.8494 72.6147L96.6339 101.527L97.9747 96.5469L98.3574 97.9683L99.5386 97.6503L98.6081 94.1944L104.418 72.6147L125.998 66.8044L129.454 67.7349L129.772 66.5537L128.351 66.171L133.33 64.8302L104.418 57.0457ZM128.351 66.171L124.953 65.2563L124.635 66.4375L125.998 66.8044L128.351 66.171ZM98.6081 94.1944L98.2412 92.8316L97.06 93.1497L97.9747 96.5469L98.6081 94.1944ZM100.952 34.2128L100.919 34.2217L100.836 34.5308L100.304 34.3874L99.7711 34.5308L99.6879 34.2217L99.6549 34.2128L100.304 31.8034L100.952 34.2128ZM102.25 39.0314L103.547 43.8501L102.366 44.1681L101.069 39.3494L102.25 39.0314ZM104.845 48.6687L106.142 53.4874L104.961 53.8054L103.663 48.9868L104.845 48.6687ZM107.439 58.306L108.088 60.7154L110.497 61.3641L110.179 62.5452L107.09 61.7134L106.258 58.6241L107.439 58.306ZM115.316 62.6615L120.135 63.9589L119.817 65.1401L114.998 63.8426L115.316 62.6615ZM134.582 67.8842L134.591 67.8512L137 68.4999L134.591 69.1486L134.582 69.1155L134.273 69.0323L134.416 68.4999L134.273 67.9674L134.582 67.8842ZM129.772 70.446L124.953 71.7434L124.635 70.5622L129.454 69.2648L129.772 70.446ZM120.135 73.0408L115.316 74.3382L114.998 73.1571L119.817 71.8597L120.135 73.0408ZM110.497 75.6356L108.088 76.2843L107.439 78.6937L106.258 78.3756L107.09 75.2863L110.179 74.4545L110.497 75.6356ZM106.142 83.5123L104.845 88.331L103.663 88.013L104.961 83.1943L106.142 83.5123ZM103.547 93.1496L102.25 97.9683L101.069 97.6503L102.366 92.8316L103.547 93.1496ZM100.919 102.778L100.952 102.787L100.304 105.196L99.6549 102.787L99.6879 102.778L99.7711 102.469L100.304 102.612L100.836 102.469L100.919 102.778ZM95.7626 88.331L94.4652 83.5123L95.6464 83.1943L96.9438 88.013L95.7626 88.331ZM93.1678 78.6937L92.5191 76.2843L90.1098 75.6356L90.4278 74.4545L93.5171 75.2863L94.3489 78.3757L93.1678 78.6937ZM85.2911 74.3382L80.4724 73.0408L80.7905 71.8597L85.6091 73.1571L85.2911 74.3382ZM75.6538 71.7434L70.8351 70.446L71.1532 69.2648L75.9718 70.5622L75.6538 71.7434ZM66.0254 69.1155L66.0165 69.1486L63.6071 68.4999L66.0165 67.8512L66.0254 67.8842L66.3345 67.9674L66.1911 68.4999L66.3345 69.0323L66.0254 69.1155ZM70.8351 66.5537L75.6538 65.2563L75.9718 66.4375L71.1531 67.7349L70.8351 66.5537ZM80.4724 63.9589L85.2911 62.6615L85.6091 63.8426L80.7905 65.1401L80.4724 63.9589ZM90.1098 61.3641L92.5191 60.7154L93.1678 58.306L94.3489 58.6241L93.5171 61.7134L90.4278 62.5452L90.1098 61.3641ZM94.4652 53.4874L95.7626 48.6687L96.9438 48.9868L95.6464 53.8054L94.4652 53.4874ZM97.06 43.8501L98.3574 39.0314L99.5386 39.3494L98.2412 44.1681L97.06 43.8501Z"
                        fill="#FFF9C4"
                    />
                    <path
                        d="M38.3081 131.977L38.383 132.255L38.661 132.33L40.7691 132.898C41.0358 132.969 41.3101 132.811 41.3819 132.545L44.6326 133.42C44.5608 133.687 44.7188 133.961 44.9854 134.033L49.2018 135.168C49.4684 135.24 49.7428 135.082 49.8146 134.815L53.0653 135.691C52.9935 135.957 53.1514 136.232 53.4181 136.303L53.7331 136.388L53.4181 136.473C53.1514 136.545 52.9935 136.819 53.0653 137.086L49.8146 137.961C49.7428 137.694 49.4684 137.536 49.2018 137.608L44.9854 138.743C44.7188 138.815 44.5608 139.09 44.6326 139.356L41.3819 140.232C41.3101 139.965 41.0358 139.807 40.7691 139.879L38.661 140.446L38.383 140.521L38.3081 140.799L37.7405 142.907C37.6687 143.174 37.8267 143.448 38.0933 143.52L37.2181 146.771C36.9514 146.699 36.6771 146.857 36.6053 147.124L35.4701 151.34C35.3983 151.607 35.5562 151.881 35.8229 151.953L34.9476 155.203C34.681 155.132 34.4066 155.29 34.3348 155.556L34.25 155.871L34.1652 155.556C34.0934 155.29 33.819 155.132 33.5524 155.203L32.6771 151.953C32.9438 151.881 33.1017 151.607 33.0299 151.34L31.8947 147.124C31.8229 146.857 31.5486 146.699 31.2819 146.771L30.4067 143.52C30.6733 143.448 30.8313 143.174 30.7595 142.907L30.1919 140.799L30.117 140.521L29.839 140.446L27.7309 139.879C27.4642 139.807 27.1899 139.965 27.1181 140.232L23.8674 139.356C23.9392 139.09 23.7812 138.815 23.5146 138.743L19.2982 137.608C19.0316 137.536 18.7572 137.694 18.6854 137.961L15.4347 137.086C15.5065 136.819 15.3486 136.545 15.0819 136.473L14.7669 136.388L15.0819 136.303C15.3486 136.232 15.5065 135.957 15.4347 135.691L18.6854 134.815C18.7572 135.082 19.0316 135.24 19.2982 135.168L23.5146 134.033C23.7812 133.961 23.9392 133.687 23.8674 133.42L27.1181 132.545C27.1899 132.811 27.4642 132.969 27.7309 132.898L29.839 132.33L30.117 132.255L30.1919 131.977L30.7595 129.869C30.8313 129.602 30.6733 129.328 30.4067 129.256L31.2819 126.006C31.5486 126.077 31.8229 125.919 31.8947 125.653L33.0299 121.436C33.1017 121.17 32.9438 120.895 32.6771 120.824L33.5524 117.573C33.819 117.645 34.0934 117.487 34.1652 117.22L34.25 116.905L34.3348 117.22C34.4066 117.487 34.681 117.645 34.9476 117.573L35.8229 120.824C35.5562 120.895 35.3983 121.17 35.4701 121.436L36.6053 125.653C36.6771 125.919 36.9514 126.077 37.2181 126.006L38.0933 129.256C37.8267 129.328 37.6687 129.602 37.7405 129.869L38.3081 131.977Z"
                        fill="#FFF9C4"
                        stroke="#FFF9C4"
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                    />
                </g>
            </svg>

            <svg
                className="absolute bottom-6 left-6 opacity-50 lg:opacity-100"
                width="53"
                height="73"
                viewBox="0 0 53 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M30.6395 38.6975L29.2649 48.1577L20.6925 52.3884L19.784 52.8368L20.6925 53.2852L29.2649 57.5159L30.6395 66.976L30.7852 67.9786L31.4924 67.2531L38.165 60.4077L47.587 62.0237L48.5855 62.1949L48.1141 61.2982L43.6656 52.8368L48.1141 44.3754L48.5855 43.4786L47.587 43.6499L38.165 45.2659L31.4924 38.4204L30.7852 37.695L30.6395 38.6975ZM31.8121 40.8555L37.4681 46.6579L37.6516 46.8462L37.9106 46.8017L45.897 45.432L42.1263 52.6041L42.004 52.8368L42.1263 53.0695L45.897 60.2416L37.9106 58.8719L37.6516 58.8274L37.4681 59.0156L31.8121 64.818L30.647 56.7993L30.6092 56.5392L30.3734 56.4229L23.1072 52.8368L30.3734 49.2507L30.6092 49.1344L30.647 48.8742L31.8121 40.8555ZM27.7675 47.3574L28.0032 47.241L28.041 46.9809L29.8214 34.7285L38.4635 43.5944L38.647 43.7827L38.906 43.7382L51.1089 41.6453L45.3475 52.6041L45.2252 52.8368L45.3475 53.0695L51.1089 64.0283L38.906 61.9354L38.647 61.8909L38.4635 62.0792L29.8214 70.9451L28.041 58.6927L28.0032 58.4325L27.7675 58.3162L16.6649 52.8368L27.7675 47.3574Z"
                    fill="#FFF9C4"
                    stroke="#FFF9C4"
                />
                <path
                    d="M33.7368 12.0466L35.2155 9.83209L35.5075 9.39487L35.3128 8.9065L34.3268 6.43293L36.8899 7.15494L37.3959 7.29749L37.8003 6.96144L39.8481 5.25935L39.9534 7.9201L39.9742 8.44542L40.4188 8.7261L42.6704 10.1477L40.1724 11.0701L39.6792 11.2523L39.5497 11.7618L38.8934 14.3425L37.2442 12.2518L36.9186 11.839L36.394 11.8733L33.7368 12.0466Z"
                    fill="#FFF9C4"
                    stroke="#FFF9C4"
                    strokeWidth="2"
                />
                <path
                    d="M1.12978 27.5348L2.88435 26.6689L3.12007 26.5525L3.15787 26.2924L3.43923 24.3561L4.80498 25.7572L4.98846 25.9454L5.24754 25.901L7.17601 25.5702L6.26551 27.3021L6.14319 27.5348L6.26551 27.7675L7.17601 29.4993L5.24754 29.1686L4.98846 29.1241L4.80498 29.3124L3.43923 30.7135L3.15787 28.7772L3.12007 28.5171L2.88435 28.4007L1.12978 27.5348Z"
                    fill="#FFF9C4"
                    stroke="#FFF9C4"
                />
            </svg>
        </footer>
    )
}
