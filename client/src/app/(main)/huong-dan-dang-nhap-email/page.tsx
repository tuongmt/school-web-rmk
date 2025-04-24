"use client";

import Image from "next/image";
import banner from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/banner.png";
import bg from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/bg.png";
import img1 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img1.png";
import img2 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img2.png";
import img3 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img3.png";
import img4 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img4.png";
import img5 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img5.png";
import img6 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img6.png";
import img7 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img7.png";
import img8 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img8.png";
import img9 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img9.png";
import img10 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img10.png";
import img11 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img11.png";
import img12 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img12.png";
import img13 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img13.png";
import img14 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img14.png";
import img15 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img15.png";
import img15r from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img15r.png";
import img16 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img16.png";
import img17 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img17.png";
import img17r from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img17r.png";
import img18 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img18.png";
import img18r from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img18r.png";
import img19 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img19.png";
import img20 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img20.png";
import img21 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img21.png";
import img22 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img22.png";
import img23 from "../../../assets/gioi-thieu/huong-dan-su-dung-mail/img23.png";
import PaperRoll from "@/app/(main)/huong-dan-dang-nhap-email/paper-roll";

export default function GuideLoginEmailPage() {
    return (
        <div className="w-full h-full flex flex-col mb-[120px]">
            {/* Banner Section */}
            <div className="w-full h-[576px] flex-none relative">
                <Image
                    src={banner}
                    alt="Landscape picture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute left-0 right-0 bottom-0 top-0 bg-[#323232CC] flex items-center justify-center text-[48px] leading-[72px] text-white font-[700] uppercase">
                    Hướng dẫn đăng nhập email bằng sinh viên
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full h-full">
                {/* Title Divider */}
                <div className="max-w-[1270px] h-[48px] flex items-center justify-center rounded-[20px] bg-[#B11226] my-[48px] mx-auto px-[17px]">
                    <div className="w-full h-[2px] bg-white rounded-full"></div>
                    <span className="flex-none text-[30px] leading-[45px] text-white font-[700] uppercase mx-[53px]">
                        Email
                    </span>
                    <div className="w-full h-[2px] bg-white rounded-full"></div>
                </div>

                {/* Background with Curved Edges */}
                <div className="max-w-[1382px] h-full mx-auto mt-[24px]">
                    <PaperRoll />
                    <div
                        className="relative w-[1300px] mx-auto min-h-screen bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${bg.src})`,
                        }}
                    >
                        <div className="w-full h-full px-[28px] z-20 absolute bg-white top-0 left-0" style={{ clipPath: `ellipse(5% 50% at 0 50%)` }}></div>
                        <div className="w-full h-full z-20 absolute bg-white top-0 right-0" style={{ clipPath: `ellipse(5% 50% at 100% 50%)` }}></div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#FFFDEA] bg-opacity-90"></div>

                        {/* Content */}
                        <div className="flex flex-col gap-[48px] relative z-10 max-w-[1050px] mx-auto py-8 px-4 text-[20px] leading-[32px] text-[#323232]">
                            <div className="">
                                <span className="text-[24px] font-[700] leading-[38px] text-[#ED2427]">
                                    I. Hướng dẫn đăng nhập và sử dụng Email QBSC
                                </span>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            1.1. Giới thiệu
                                        </span>
                                        <span>
                                            Email là phương tiện liên lạc thuận tiện nhất được sử dụng
                                            phổ biến trong quá trình học tập và làm việc tại Trường Cao
                                            đẳng Quốc Bảo Sài Gòn.
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            1.2. Chức năng
                                        </span>
                                        <span>
                                            Email là công cụ nhanh nhất và dễ dàng nhất mà sinh viên có thể nhận được các
                                            thông tin liên hệ để phục vụ cho các hoạt động của mình và liên hệ với Trường - Khoa - Lớp.
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            1.3. Hướng dẫn sử dụng
                                        </span>
                                        <span>Truy cập: http://mail.quocbaocollege.vn</span>
                                        <span>Điền tên người dùng và mật khẩu của bạn</span>
                                        <ul className="list-disc mx-[32px]">
                                            <li>Tên đăng nhập: [tên bạn].[mã số sinh viên]@vanlanguni.vn</li>
                                        </ul>
                                        <div className="w-full">VD: Bạn tên là Hảo, MSSV là 2182102340001 ={">"} Tên đăng nhập sẽ là: hao.2182102340001@quocbaocollege.vn</div>
                                        <ul className="list-disc mx-[32px]">
                                            <li>Mật khẩu: QBSC[ngày tháng năm sinh dạng ddmmyyyy]</li>
                                        </ul>
                                        <div className="">VD: Bạn có ngày sinh là 03/08/2006 ={">"} Mật khẩu sẽ là: QBSC08032006 (chú ý QBSC viết hoa, ngày sinh 08 ký tự)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <span className="text-[24px] font-[700] leading-[38px] text-[#ED2427]">
                                    II. Hướng dẫn thay đổi mật khẩu Email dành cho sinh viên
                                </span>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            2.1. Giới thiệu
                                        </span>
                                        <span>
                                            Email là phương tiện liên lạc thuận tiện nhất được sử dụng phổ
                                            biến trong quá trình học tập và làm việc tại Trường Cao đẳng Quốc Bảo Sài Gòn.
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            2.2. Chức năng
                                        </span>
                                        <span>
                                            Để bảo vệ thông tin cá nhân của mỗi sinh viên. Để đảm bảo tính bảo mật
                                            cho tài khoản của bạn, chúng tôi khuyến khích thay đổi mật khẩu định kỳ.
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            2.3. Hướng dẫn sử dụng
                                        </span>
                                        <div className="flex flex-col gap-1">
                                            <div className="">Bước 1: Truy cập vào đường link đổi mật khẩu: https://accounts.quocbaocollege.vn</div>
                                            <div className="">Bước 2: Nhập “Tên đăng nhập” và “Mật khẩu” hiện tại của tài khoản Email.</div>
                                            <div className="">Bước 3: Tiếp đó, sinh viên nhập “Mật khẩu mới” theo yêu cầu của hệ thống để đạt độ bảo mật cao.</div>
                                            <div className="">Bước 4: Sau đó xác nhận mật khẩu mới</div>
                                            <div className="">Bước 5: Để hoàn tất bạn xác nhận bảo mật và nhấp vào “Đổi mật khẩu”</div>
                                            <div className="w-full flex justify-center">
                                                <div className="w-[620px] h-[600px]">
                                                    <Image
                                                        src={img1}
                                                        alt="Landscape picture"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            1.4. Lưu ý</span>
                                        <span>
                                            Để bảo mật mọi thông tin email cá nhân, nên thay đổi mật khẩu mặc định và giữ bí mật mật khẩu của mình.
                                            Để đổi mật khẩu, sinh viên truy cập: https://accounts.quobaocollege.vn/
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <span className="text-[24px] font-[700] leading-[38px] text-[#ED2427]">
                                    III. Hướng dẫn cài đặt app Outlook
                                </span>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            3.1. Giới thiệu
                                        </span>
                                        <span>
                                            Outlook là phần mềm quản lí thông tin cá nhân và cho phép người dùng gửi và nhận email,
                                            quản lý lịch trình, đồng thời theo dõi các tác vụ của người sử dụng.
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            3.2. Chức năng
                                        </span>
                                        <ul className="list-disc mx-[32px]">
                                            <li>Không lo lắng về việc bỏ lỡ thư và các sự kiện quan trọng </li>
                                            <li>Ứng dụng hỗ trợ người dùng email quản lý thời gian và dung lượng của Email</li>
                                            <li>Chủ động trong việc gởi thư mọi lúc, mọi nơi</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            3.3. Hướng dẫn sử dụng
                                        </span>
                                        <ul className="list-disc mx-[32px]">
                                            <li>Tải ứng dụng Outlook</li>
                                            <li>Điền thông tin bao gồm địa chỉ email và mật khẩu của VLU để đăng nhập</li>
                                            <li>Hoàn tất quá trình đăng nhập </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaperRoll />
                </div>
            </div>

            {/* Content 2 */}
            <div className="w-full h-full mt-[50px]">
                {/* Title Divider */}
                <div className="max-w-[1270px] h-[48px] flex items-center justify-center rounded-[20px] bg-[#B11226] my-[48px] mx-auto px-[17px]">
                    <div className="w-full h-[2px] bg-white rounded-full"></div>
                    <span className="flex-none text-[30px] leading-[45px] text-white font-[700] mx-[53px]">
                        Microsoft 365
                    </span>
                    <div className="w-full h-[2px] bg-white rounded-full"></div>
                </div>

                {/* Background with Curved Edges */}
                <div className="max-w-[1382px] h-full mx-auto mt-[24px]">
                    <PaperRoll />
                    <div
                        className="relative w-[1300px] mx-auto min-h-screen bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${bg.src})`,
                        }}
                    >
                        <div className="w-full h-full z-20 absolute bg-white top-0 left-0" style={{ clipPath: `ellipse(5% 50% at 0% 50%)` }}></div>
                        <div className="w-full h-full z-20 absolute bg-white top-0 right-0" style={{ clipPath: `ellipse(5% 50% at 100% 50%)` }}></div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#FFFDEA] bg-opacity-90"></div>

                        {/* Content */}
                        <div className="flex flex-col gap-[48px] relative z-10 max-w-[1050px] mx-auto py-8 px-4 text-[20px] leading-[32px] text-[#323232]">
                            <div className="">
                                <span className="text-[24px] font-[700] leading-[38px] text-[#ED2427]">
                                    Dưới đây là các bước hướng dẫn để truy cập kết nối MICROSOFT 365 trên máy tính
                                </span>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            1. Giới thiệu
                                        </span>
                                        <span>
                                            VLU triển khai hệ thống Office 365 vào công việc hành chính – văn phòng; trao đổi thông tin
                                            ; hỗ trợ hoạt động giảng dạy – học tập của cán bộ, giảng viên, nhân viên và sinh viên..
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            2. Chức năng
                                        </span>
                                        <span>
                                            Hệ thống Office 365 tạo ra môi trường làm việc hiện đại, tăng khả năng
                                            kết nối và mở rộng không gian làm việc bên ngoài giảng đường với kho tiệ
                                            n ích hệ thống Office 365.
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-[5px] mt-2.5">
                                        <span className="text-[22px] leading-[35px] font-[600]">
                                            3. Hướng dẫn sử dụng
                                        </span>
                                        <div className="flex flex-col gap-1">
                                            <div className="">Bước 1: Truy cập và đăng nhập vào email sinh viên VLU: http://mail.qbsc.edu.vn</div>
                                            <div className="">
                                                <div className="">Bước 2: Truy cập trang thông tin tài khoản theo hình dưới:</div>
                                                <div className="w-full h-full mt-3">
                                                    <Image
                                                        src={img2}
                                                        alt="Landscape picture"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="">Bước 3: Truy cập Office apps </div>
                                                <div className="w-full h-full mt-3">
                                                    <Image
                                                        src={img3}
                                                        alt="Landscape picture"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="">Bước 4: Click Install Office </div>
                                                <div className="w-full h-full mt-3">
                                                    <Image
                                                        src={img4}
                                                        alt="Landscape picture"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="">Bước 5: Hệ thống cho phép tải về file cài đặt. Lưu vào nơi phù hợp. </div>
                                                <div className="w-full h-full mt-3">
                                                    <Image
                                                        src={img5}
                                                        alt="Landscape picture"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="">Bước 6: Mở file cài đặt vừa tải về, quá trình cài đặt sẽ tiếp tục. </div>
                                                <div className="w-full h-[340px] flex items-center mt-3 gap-1">
                                                    <div className="w-full h-full  relative">
                                                        <Image
                                                            src={img6}
                                                            alt="Landscape picture"
                                                            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                        />
                                                    </div>
                                                    <div className="w-full h-full  relative">
                                                        <Image
                                                            src={img7}
                                                            alt="Landscape picture"
                                                            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="">Bước 7: Sau khi cài đặt thành công, mở một ứng dụng Office bất kỳ, bạn sẽ thấy cửa sổ đăng nhập, click chọn Sign in. </div>
                                                <div className="w-full h-[340px] flex items-center mt-3 gap-1">
                                                    <div className="w-full h-full  relative">
                                                        <Image
                                                            src={img8}
                                                            alt="Landscape picture"
                                                            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                        />
                                                    </div>
                                                    <div className="w-full h-full  relative">
                                                        <Image
                                                            src={img9}
                                                            alt="Landscape picture"
                                                            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="">Bước 8: Đăng nhập với tài khoản email QBSC. </div>
                                                <div className="w-full h-[340px] flex items-center mt-3 gap-1">
                                                    <div className="w-full h-full  relative">
                                                        <Image
                                                            src={img10}
                                                            alt="Landscape picture"
                                                            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                        />
                                                    </div>
                                                    <div className="w-full h-full  relative">
                                                        <Image
                                                            src={img11}
                                                            alt="Landscape picture"
                                                            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="">Bước 9: Xác nhận đăng nhập </div>
                                                <div className="flex justify-center">
                                                    <div className="w-[724px] h-full mt-3">
                                                        <Image
                                                            src={img12}
                                                            alt="Landscape picture"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="">Bước 10: Truy cập menu File -{">"} Account để kiểm tra tài khoản. Khi xuất hiện tên của bạn ở góc trên, bên phải và Product inform
                                                    ation hiển thị Microsoft 365 Apps for enterprisse là bạn đã đăng nhập thành công. </div>
                                                <div className="w-full h-full mt-3">
                                                    <Image
                                                        src={img13}
                                                        alt="Landscape picture"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[24px] font-[700] leading-[38px] text-[#ED2427]">
                                    Dưới đây là các bước hướng dẫn để truy cập kết nối MICROSOFT 365 trên điện thoại
                                </span>
                                <div className="flex flex-col gap-1">
                                    <div className="">Bước 1: Tải app Outlook </div>
                                    <div className="flex flex-col gap-3">
                                        <span>Bước 2: Nhập thông tin địa chỉ email và mật khẩu</span>
                                        <div className="w-full h-[610px]">
                                            <div className="w-full h-full  relative">
                                                <Image
                                                    src={img14}
                                                    alt="Landscape picture"
                                                    className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">Bước 3: Hoàn tất thiết lập. Nếu bạn cần thiết lập thêm email
                                        khác vào Outlook, click Add. Click May be later để thiết lập sau và quay l
                                        ại giao diện chính.  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaperRoll />
                </div>
            </div>
            {/* Content 3 */}
            <div className="w-full h-full mt-[50px]">
                {/* Title Divider */}
                <div className="max-w-[1270px] h-[48px] flex items-center justify-center rounded-[20px] bg-[#B11226] my-[48px] mx-auto px-[17px]">
                    <div className="w-full h-[2px] bg-white rounded-full"></div>
                    <span className="flex-none text-[30px] leading-[45px] text-white font-[700] mx-[53px]">
                        ONE DRIVE
                    </span>
                    <div className="w-full h-[2px] bg-white rounded-full"></div>
                </div>

                {/* Background with Curved Edges */}
                <div className="max-w-[1382px] h-full mx-auto mt-[24px]">
                    <PaperRoll />
                    <div
                        className="relative w-[1300px] mx-auto min-h-screen bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${bg.src})`,
                        }}
                    >
                        <div className="w-full h-full z-20 absolute bg-white top-0 left-0" style={{ clipPath: `ellipse(5% 50% at 0% 50%)` }}></div>
                        <div className="w-full h-full z-20 absolute bg-white top-0 right-0" style={{ clipPath: `ellipse(5% 50% at 100% 50%)` }}></div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#FFFDEA] bg-opacity-90"></div>

                        {/* Content */}
                        <div className="flex flex-col gap-[48px] relative z-10 max-w-[1050px] mx-auto py-8 px-4 text-[20px] leading-[32px] text-[#323232]">
                            <div className="flex flex-col gap-1 mb-[60px]">
                                <div className="flex flex-col gap-[5px] mt-6">
                                    <span className="text-[22px] leading-[35px] font-[600]">
                                        1. Giới thiệu
                                    </span>
                                    <span>
                                        OneDrive là một dịch vụ lưu trữ đám mây cho phép người dùng lưu trữ dữ liệu trong tài khoản cá nhân
                                        , cho phép truy cập ở mọi lúc, mọi nơi và giữ cho các tệp được bảo vệ và sao lưu.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-[5px] mt-6">
                                    <span className="text-[22px] leading-[35px] font-[600]">
                                        2. Mục đính sử dụng
                                    </span>
                                    <ul className="list-disc mx-[32px]">
                                        <li>Truy nhập và chỉnh sửa tệp và dữ liệu từ tất cả các thiết bị.</li>
                                        <li>Chia sẻ bên trong hoặc bên ngoài tổ chức.</li>
                                        <li>Làm việc cùng nhau trong thời gian thực trên các tài liệu Office</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-[5px] mt-6">
                                    <span className="text-[22px] leading-[35px] font-[600]">
                                        3. Cách sử dụng
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <div className="mt-6">
                                            <div className="">Bước 1: Đăng nhập OneDrive </div>
                                            <div className="w-full h-[340px] flex items-center mt-3 gap-1">
                                                <div className="w-full h-full  relative">
                                                    <Image
                                                        src={img15}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                                <div className="w-full h-full  relative">
                                                    <Image
                                                        src={img15r}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="mt-6">
                                            <div className="">Bước 2: Thiết lập nơi lưu trữ
                                            </div>
                                            <div className=""> Mặc định, Onedrive chọn lưu trữ trong ổ đĩa hệ điều hàn
                                                h, ta thực hiện đổi nơi lưu trữ sang ổ đĩa dữ liệu để tránh ổ đĩa hệ điều hà
                                                nh bị đầy ={">"} Click “Change location” </div>
                                            <div className="flex justify-center mt-3 gap-1">
                                                <div className="w-[650px] h-[580px]   relative">
                                                    <Image
                                                        src={img16}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="mt-6">
                                            <div className="">Bước 3: Chọn ổ đĩa dữ liệu, sau đó click “Select Folder” </div>
                                            <div className="w-full h-[450px] flex items-center mt-3 gap-1">
                                                <div className="w-full h-full  relative">
                                                    <Image
                                                        src={img17}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                                <div className="w-full h-full  relative">
                                                    <Image
                                                        src={img17r}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full h-[450px] flex items-center mt-3 gap-1">
                                                <div className="w-full h-full  relative">
                                                    <Image
                                                        src={img18}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                                <div className="w-full h-full  relative">
                                                    <Image
                                                        src={img18r}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="mt-6">
                                            <div className="">Bước 4: Hoàn tất thiết lập Onedrive, click “Open my OneDrive folder” để mở nơi lưu trữ đã thiết lập.
                                            </div>
                                            <div className="flex justify-center mt-3 gap-1">
                                                <div className="w-[580px] h-[530px]  relative">
                                                    <Image
                                                        src={img19}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="mt-6">
                                            <div className="">Bước 5: Hoàn tất thiết lập Onedrive, click “Open my OneDrive folder” để mở nơi lưu trữ đã thiết lập.
                                            </div>
                                            <div className="flex justify-center mt-3 gap-1">
                                                <div className="w-full h-[400px]  relative">
                                                    <Image
                                                        src={img20}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaperRoll />
                </div>
            </div>
            <div className="w-full h-full mt-[50px]">
                {/* Title Divider */}
                <div className="max-w-[1270px] h-[48px] flex items-center justify-center rounded-[20px] bg-[#B11226] my-[48px] mx-auto px-[17px]">
                    <div className="w-full h-[2px] bg-white rounded-full"></div>
                    <span className="flex-none text-[30px] leading-[45px] text-white font-[700] mx-[53px] uppercase">
                        Cổng thông tin đào tạo
                    </span>
                    <div className="w-full h-[2px] bg-white rounded-full"></div>
                </div>

                {/* Background with Curved Edges */}
                <div className="max-w-[1382px] h-full mx-auto mt-[24px]">
                    <PaperRoll />
                    <div
                        className="relative w-[1300px] mx-auto min-h-screen bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${bg.src})`,
                        }}
                    >
                        <div className="w-full h-full z-20 absolute bg-white top-0 left-0" style={{ clipPath: `ellipse(5% 50% at 0% 50%)` }}></div>
                        <div className="w-full h-full z-20 absolute bg-white top-0 right-0" style={{ clipPath: `ellipse(5% 50% at 100% 50%)` }}></div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#FFFDEA] bg-opacity-90"></div>

                        {/* Content */}
                        <div className="flex flex-col gap-[48px] relative z-10 max-w-[1050px] mx-auto py-8 px-4 text-[20px] leading-[32px] text-[#323232]">
                            <div className="flex flex-col gap-1 mb-[60px]">
                                <div className="flex flex-col gap-[5px] mt-6">
                                    <span className="text-[22px] leading-[35px] font-[600]">
                                        1. Giới thiệu
                                    </span>
                                    <span>
                                        Cổng thông tin đào tạo (trang online) là nơi sinh viên có thể tra cứu
                                        các thông tin cần thiết liên quan tới đăng ký học phần, lịch học, lịch thi, kết quả h
                                        ọc tập, những thông báo…
                                    </span>
                                </div>
                                <div className="flex flex-col gap-[5px] mt-6">
                                    <span className="text-[22px] leading-[35px] font-[600]">
                                        2. Mục đính sử dụng
                                    </span>
                                    <ul className="list-disc mx-[32px]">
                                        <li>Tra cứu thông tin cá nhân, thông tin chương trình đào tạo, thông tin tài chính, kết quả đăng ký môn học,…</li>
                                        <li>Thực hiện các chức năng trực tuyến như đăng ký học phần, thanh toán học phí, đánh giá rèn luyện,…</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-[5px] mt-6">
                                    <span className="text-[22px] leading-[35px] font-[600]">
                                        3. Cách sử dụng
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <div className="">Bước 1: Truy cập địa chỉ cổng thông tin đào tạo: https://online.qbsc.edu.vn  </div>
                                        <div className="">Bước 2: Sinh viên có thể đăng nhập vào cổng thông tin đào tạo bằng 2 cách:</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[5px] mt-6">
                                    <span className="text-[22px] leading-[35px] font-[600]">
                                        3.1. Đăng nhập bằng tài khoản do Phòng Đào tạo cung cấp:
                                    </span>
                                    <ul className="list-disc mx-[32px]">
                                        <li>Tên đăng nhập: mã số sinh viên</li>
                                        <li>Mật khẩu: ngày tháng năm sinh (ddmmyyyy nếu bạn chưa đổi mật khẩu)</li>
                                        <li>Nhấp vào đăng nhập</li>
                                    </ul>
                                    <div className="flex flex-col gap-1">
                                        <div className="mt-4 flex flex-col gap-2">
                                            <span className="text-[22px] leading-[35px] font-[600]">
                                                3.2. Bằng email Văn Lang
                                            </span>
                                            <ul className="list-disc mx-[32px]">
                                                <li>Nhấp chọn mục Office 365 for Student </li>
                                                <li>Ở trang tiếp theo, nhập vào địa chỉ email QBSC và mật khẩu của bạn </li>
                                                <li>Nhấp vào đăng nhập (sign in)</li>
                                            </ul>
                                            <div className="flex justify-between mt-3 gap-1">
                                                <div className="w-[370px] h-[680px] relative">
                                                    <Image
                                                        src={img21}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                                <div className="w-[620px] h-[570px] relative">
                                                    <Image
                                                        src={img22}
                                                        alt="Landscape picture"
                                                        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full h-[656px] relative mt-4">
                                                <Image
                                                    src={img23}
                                                    alt="Landscape picture"
                                                    className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover overflow-hidden"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaperRoll />
                </div>
            </div>
        </div>
    );
}
