"use client";

import Image from "next/image";
import banner_nhap_hoc from "../../../assets/gioi-thieu/huong-dan-nhap-hoc/banner_nhap_hoc.png";
import bg from "../../../assets/gioi-thieu/huong-dan-nhap-hoc/bg.jpg";
import live_chat from "../../../assets/gioi-thieu/huong-dan-nhap-hoc/live_chat.png";
import logo from "../../../assets/gioi-thieu/huong-dan-nhap-hoc/logo.png";

export default function GuideAdmission() {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-[576px] flex-none relative">
                <Image
                    src={banner_nhap_hoc}
                    alt="Landscape picture"
                    className="w-full h-full"
                />
                <div className="absolute left-0 right-0 bottom-0 top-0 bg-[#323232CC] flex items-center justify-center text-[48px] leading-[72px] text-white font-[700] uppercase">
                    Hướng dẫn nhập học cho tân sinh viên
                </div>
            </div>
            <div
                className="bg-cover bg-center w-full h-full"
                style={{ backgroundImage: `url(${bg.src})` }} // Chú ý sửa .src
            >
                <div className="max-w-[1270px] h-[48px] flex items-center justify-center rounded-[10px] bg-[#444444] my-[48px] mx-auto">
                    <div className="w-[80%] h-[4px] bg-white rounded-full"></div>
                </div>
                <div className="h-[96px] w-full relative">
                    <div className="absolute w-1/2 h-[64px] rounded-r-[10px] bg-red-700 left-0 top-0 text-[36px] leading-[54px] font-[700] flex items-center justify-end text-white px-[20px] uppercase z-10">
                        A. Các thông tin quan trọng
                        <div className="w-[104px] h-[104px] flex-none flex items-center justify-center rounded-full absolute top-[16px] left-[28px]  border-[2px] border-[#A91B0D] bg-[#ED2427]">
                            <Image
                                src={live_chat}
                                alt="Landscape picture"
                                className="w-[78px] h-[78px]"
                            />
                        </div>
                    </div>
                    <div className="absolute w-[80%] h-[64px] rounded-l-[10px] bg-[#EEEEEE] right-0 bottom-0 text-[36px] leading-[54px] font-[700] flex items-center justify-end text-white px-[20px] uppercase">
                        <div className="w-[104px] h-[104px] flex-none flex items-center justify-center rounded-full absolute right-[28px]  border border-[#ED2427] bg-white">
                            <Image
                                src={logo}
                                alt="Landscape picture"
                                className="w-[78px] h-[78px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[80%] mx-auto mt-[100px] text-[20px] leading-[32px] text-[#323232] flex flex-col gap-[28px]">
                    <div className="">
                        <div className="h-[48px] rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            1. Tra cứu Kết quả trúng tuyển, Thư mời nhập học và Hướng dẫn
                        </div>
                        <div className="flex flex-col px-[28px] gap-6 py-6">
                            <div className="">Thí sinh có thể tra cứu Kết quả trúng tuyển + Thư mời nhập học + Hướng dẫn bằng 02 cách:</div>
                            <div className="flex items-center gap-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-1 rounded-full bg-[#323232]">
                                    </div>
                                    Tra cứu tại trang Tra cứu tuyển sinh:
                                </div>
                                <span>{" "}</span>
                                <span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]">https://portal.qbsc.edu.vn/public/TraCuuTuyenSinh
                                </span>
                            </div>
                            <div className="">
                                – Tra cứu tại tài khoản tuyển sinh HUFLIT (Tài khoản và mật khẩu của thí sinh đã được cấp khi đăng ký xét tuyển):
                                {" "}
                                <span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]">https://portal.qbsc.edu.vn/public/TraCuuTuyenSinh
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[48px] rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            2. Mốc thời gian dự kiến
                        </div>
                        <div className="flex flex-col px-[28px] gap-6 py-6">
                            <div className="">Từ <span className="font-[500]"> ngày 19/8 đến 22/8/2024</span>: Tân sinh viên làm thủ tục nhập học tại HUFLIT (thông tin chi tiết sẽ có trong thông báo nhập học).</div>
                            <div className="">Sau <span className="font-[500]">ngày 02/9/2024</span>: Tân sinh viên sẽ nhận được lịch học chính thức.</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[48px] rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            3. Học phí
                        </div>
                        <div className="flex flex-col px-[28px] gap-6 py-6">
                            <div className="">25.000.000đ là mức học phí HK1 áp dụng chung cho Tân sinh viên của 20 ngành đào tạo tại Trường. </div>
                            <div className="">Đối với Tân sinh viên học tập toàn khóa tại cơ sở Hóc Môn, chính sách giảm học phí 15% toàn khóa học sẽ được áp dụng vào học phí học kỳ 2. <span className="border-b border-[#0D85FD] text-[#0D85FD]">{"<"}Tải mẫu đơn{">"}</span> </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[48px] rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            4. Thời gian, địa điểm và một số lưu ý khi làm thủ tục nhập học tại Trường
                        </div>
                        <div className="flex flex-col px-[28px] gap-6 py-6">
                            <div className="">Thời gian nhập học: từ 19/8 đến 22/8/2024. Thí sinh xem thời gian nhập học chi tiết của cá nhân trong Thông báo nhập học gần nhất. </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-1 rounded-full bg-[#323232]">
                                    </div>
                                    Sáng từ 07g30 đến 12g00
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-1 rounded-full bg-[#323232]">
                                    </div>
                                    Chiều từ 13g30 đến 16g30
                                </div>
                                <div className="">Địa điểm: Trường Cao đẳng Quốc Bảo Sài Gòn: 828 Sư Vạn Hạnh, P13, Q10, TP. HCM.</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[48px] rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            5. Phương tiện di chuyển
                        </div>
                        <div className="flex flex-col px-[28px] gap-6 py-6">
                            <div className="">Nhà trường khuyến khích phụ huynh và tân sân sinh viên đến trường bằng phương tiện công cộng. Trong trường hợp, phụ huynh và tân sinh viên di chuyển bằng ôtô thì đỗ xe đúng nơi quy định trên đường Tô Hiến Thành.  </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[48px] rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            6. Phụ huynh đi cùng
                        </div>
                        <div className="flex flex-col px-[28px] gap-6 py-6">
                            <div className="">Vào ngày nhập học các bạn tân sinh viên nên đến trường cùng 01 phụ huynh để công tác tiếp đón được chu đáo nhất. HUFLIT có chuẩn bị phòng chờ cho phụ huynh và sẽ được hướng dẫn cụ thể trong quá trình nhập học.</div>
                        </div>
                    </div>
                </div>
                <div className="h-[144px] w-full relative">
                    <div className="absolute w-[80%] h-[64px] rounded-r-[10px] bg-[#EEEEEE] left-0 bottom-0 text-[36px] leading-[54px] font-[700] flex items-center justify-end text-white px-[20px] uppercase">
                    </div>
                    <div className="absolute w-3/5 h-[120px] rounded-l-[20px] bg-red-700 right-0 top-0 text-[36px] leading-[54px] font-[700] flex items-center justify-start text-white px-[20px] uppercase z-10">
                        B. HƯỚNG DẪN THỦ TỤC VÀ QUY TRÌNH NHẬP HỌC CHO TÂN SINH VIÊN K30
                    </div>
                </div>
                <div className="w-[80%] mx-auto mt-[100px] text-[20px] leading-[32px] text-[#323232] flex flex-col gap-[28px]">
                    <div className="">
                        <div className="h-[48px] rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            I. Quy trình nhập học chi tiết
                        </div>
                        <div className="flex flex-col px-[28px] gap-4 py-6">
                            <div className="">Các thí sinh năm 2024 trúng tuyển vào Trường Cao đẳng Quốc Bảo Sài Gòn (QBSC) sẽ làm thủ tục nhập học trực tiếp tại Trường theo 7 bước sau:</div>
                            <div className="px-3 flex flex-col gap-4">
                                <div className="">1. Nhận Thư mời nhập học và Hướng dẫn nhập học:
                                    {" "}
                                    <span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]">https://portal.qbsc.edu.vn/public/TraCuuTuyenSinh </span>
                                </div>
                                <div className="">2. Đóng học phí, lệ phí, phí bảo hiểm bằng cách chọn cổng thanh toán hoặc chuyển khoản vào tài khoản của trường đúng với số tiền ghi trong Giấy báo nhập học ít nhất 24h trước khi tới làm thủ tục nhập học.</div>
                                <div className="">3.Khai báo lý lịch sinh viên trực tuyến trước ngày làm thủ tục nhập học tại địa chỉ <span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]">https://nhaphoc.qbsc.edu.vn/</span> . Thông tin đăng nhập được cung cấp trong thư mời nhập học. Vui lòng sử dụng máy tính để khai báo lý lịch (không sử dụng điện thoại).</div>
                                <div className="">4. Chuẩn bị bản khai lý lịch sinh viên theo mẫu (bản giấy có xác nhận của chính quyền địa phương, tải mẫu theo  <span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]"> https://tinyurl.com/SYLLmauQBSC)</span>. Sinh viên có thể in bản khai này sau khi hoàn thành Bước 3 mà không phải nhập lại thông tin.</div>
                                <div className="">5. Nhận Giấy làm thủ tục nhập học, nhận Giấy báo nhập học (bản giấy), nộp Hồ sơ nhập học trực tiếp tại trường và nhận lịch Tuần “SHCD-SV” 2024 – 2025. </div>
                                <div className="">6. Chụp ảnh làm thẻ sinh viên.</div>
                                <div className="">7. Các tiện ích sinh viên (Balo QBSC và dây đeo thẻ sinh viên). Đăng ký xét các học bổng danh cho TSV và Quỹ hỗ trợ sinh viên của Trường.</div>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <div className="flex items-center h-[88px] max-w-[60%] min-w-[945px] rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            Các bước 1 – 3: thực hiện trực tuyến, bước 4 in và xác nhận tại địa phương, các bước 5 – 7 thực hiện trực tiếp tại trường.
                        </div>
                        <div className="">
                            <div className="flex items-center h-[48px] rounded-[15px] bg-[#9E4244] text-white font-[600] text-[22px] leading-[33px] px-[24px] w-fit mt-[40px]">
                                Bước 1. NHẬN THƯ MỜI NHẬP HỌC VÀ HƯỚNG DẪN NHẬP HỌC (TRỰC TUYẾN)
                            </div>
                            <div className="flex flex-col px-[28px] gap-4 py-6">
                                <div className="">Thí sinh trúng tuyển nhận Thư mời nhập học và Hướng dẫn nhập học tại <span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]">https://portal.huflit.edu.vn/public/tracuutuyensinh/</span></div>
                                <div className="">Sau đó, thí sinh đăng nhập vào hệ thống nhập học trực tuyến, gồm: mã số sinh viên và mật khẩu để khai báo lý lịch trực tuyến (trong Thư mời nhập học, mục Hướng dẫn). </div>
                                <div className=""><span className="font-[500]">Lưu ý:</span> Thí sinh phải sử dụng đúng tài khoản đối với ngành trúng tuyển để làm thủ tục nhập học.</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center h-[48px] rounded-[15px] bg-[#9E4244] text-white font-[600] text-[22px] leading-[33px] px-[24px] w-fit mt-[40px]">
                                Bước 2. ĐÓNG HỌC PHÍ, LỆ PHÍ, PHÍ BẢO HIỂM
                            </div>
                            <div className="flex flex-col px-[28px] gap-4 py-6">
                                <div className="">
                                    HUFLIT khuyến khích Tân sinh viên và phụ huynh thanh toán học phí trước ngày nhập được thông báo trong Thông báo nhập học ít nhất 24h để thủ tục nhập học được nhanh chóng và thuận tiện. Có thể lựa chọn 1 trong 3 cách sau để thanh toán học phí:
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4 font-[500]">
                                        <div className="w-1 h-1 rounded-full bg-[#323232]">
                                        </div>
                                        Cách 1: Thí sinh đóng học phí, lệ phí, phí bảo hiểm qua cổng thanh toán e-bills
                                    </div>
                                    <div className="">
                                        Chọn cổng thanh toán: <span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]">https://e-bills.vn/pay/qbsc/</span> , nhập mã sinh viên theo giấy báo trúng tuyển, chọn hình thức thanh toán và thực hiện thanh toán 1
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4 font-[500]">
                                        <div className="w-1 h-1 rounded-full bg-[#323232]">
                                        </div>
                                        Cách 2: Nộp học phí bằng tiền mặt tại các chi nhánh, phòng giao dịch thuộc hệ thống Ngân hàng nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank):
                                    </div>
                                    <div className="">
                                        Tân sinh viên và phụ huynh đến các Chi nhánh hoặc Phòng giao dịch thuộc hệ thống của Ngân hàng Agribank đề nghị được nộp học phí cho Trường Cao đẳng Quốc Bảo Sài Gòn (QBSC) qua cổng thanh toán bằng tiền mặt và thực hiện giao dịch theo hướng dẫn của Agribank.
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4 font-[500]">
                                        <div className="w-1 h-1 rounded-full bg-[#323232]">
                                        </div>
                                        Cách 3: Chuyển khoản
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="">Tân sinh viên và phụ huynh đóng học phí qua tài khoản ngân hàng của Nhà trường như sau:</div>
                                        <div className="">Đơn vị thụ hưởng: <span className="font-[500]">Trường Cao đẳng Quốc Bảo Sài Gòn</span></div>
                                        <div className="">Số tài khoản: <span className="font-[500]">042 100 393 5426 mở tại Vietcombank Chi nhánh Hùng Vương.</span></div>
                                    </div>
                                </div>
                                <div className="max-w-[900px] h-[240px] flex flex-col justify-between items-center text-black border border-black mx-auto py-5 px-[48px] font-[600]">
                                    <span>Nội dung ghi trên Giấy nộp tiền/Ủy nhiệm chi:</span>
                                    <span>Mã số sinh viên (MSSV) – Họ tên sinh viên – Số điện thoại sinh viên – Nhập học</span>
                                    <span>(Ví dụ:24DHxxxx – Nguyễn Văn A – 0903xxxxxx – Nhập học)</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center h-[48px] rounded-[15px] bg-[#9E4244] text-white font-[600] text-[22px] leading-[33px] px-[24px] w-fit mt-[40px]">
                                Bước 3. KHAI BÁO LÝ LỊCH SINH VIÊN TRƯỚC NGÀY LÀM THỦ TỤC NHẬP HỌC
                            </div>
                            <div className="flex flex-col px-[28px] gap-6 py-6">
                                <div className="flex flex-col gap-4">
                                    <span>Sinh viên đến làm thủ tục nhập học phải chuẩn bị bản khai lý lịch sinh viên theo mẫu (bản giấy có xác nhận của chính quyền địa phương).</span>
                                    <span>Sinh viên thực hiện khai báo lý lịch trực tuyến (sinh viên nên thực hiện bằng máy tính xách tay hoặc máy tính để bàn, kiểm tra trình duyệt cập nhật để có thể hoàn thành thuận lợi hơn). Đăng nhập và khai báo lý lịch tại cổng thông tin Nhập học trực tuyến https://nhaphoc.huflit.edu.vn/ (sử dụng tài khoản gồm: mã số sinh viên, mật khẩu đã được cấp ở Thư mời nhập học – xem lại hướng dẫn bước 1).</span>
                                    <span>Chọn nút <span className="font-medium">“Lưu thông tin”.</span></span>
                                    <span>Đối với Tân sinh viên đăng ký học toàn khóa học tại cơ sở Hóc Môn. Thực hiện đầy đủ các bước như trên. Đồng thời, đăng ký bằng cách viết Phiếu đăng ký (<span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]">{"<"}Tải tại đây{">"}</span> hoặc nhận trực tiếp tại trường khi làm thủ tục nhập học).</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center h-[48px] rounded-[15px] bg-[#9E4244] text-white font-[600] text-[22px] leading-[33px] px-[24px] w-fit mt-[40px]">
                                Bước 4. IN BẢN KHAI LÝ LỊCH SINH VIÊN (ở Bước 3)
                            </div>
                            <div className="flex flex-col px-[28px] gap-4 py-6">
                                <div className="">Sinh viên in và xác nhận tại địa phương nơi cư trú để nộp. </div>
                                <div className="">Trường hợp nếu hệ thống không thể tải được file lí lịch, TSV có thể dùng file để thực hiện việc xác nhận SYLL tại địa phương. <span className="leading-[30px] font-[500] border-b border-[#0D85FD] text-[#0D85FD]">{"<"}Tải tại đây{">"}</span> </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center h-[48px] rounded-[15px] bg-[#9E4244] text-white font-[600] text-[22px] leading-[33px] px-[24px] w-fit mt-[40px]">
                                Bước 5. NHẬN GIẤY BÁO NHẬP HỌC, GIẤY LÀM THỦ TỤC NHẬP HỌC (BẢN GIẤY) VÀ NỘP HỒ SƠ NHẬP HỌC
                            </div>
                            <div className="flex flex-col px-[28px] gap-6 py-6">
                                <div className="">Nhận Giấy làm thủ tục nhập học, điền thông tin để làm thủ tục.</div>
                                <div className="">Nhận 02 Giấy báo nhập học (01 bản SV giữ lại, 01 bản nộp lại trong hồ sơ nhập học) tại Lầu 4 (khu B) </div>
                                <div className="">Sinh viên chuẩn bị các giấy tờ xếp theo thứ tự yêu cầu của thông báo nhập học, nhận túi đựng hồ sơ để điền thông tin, nộp và nhận biên nhận nộp hồ sơ; nhận 01 lịch “Tuần SHCD-SV” năm học 2024 – 2025. </div>
                                <div className="">Nộp hồ sơ tại Lầu 4 hoặc 5 (khu B).</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center h-[48px] rounded-[15px] bg-[#9E4244] text-white font-[600] text-[22px] leading-[33px] px-[24px] w-fit mt-[40px]">
                                Bước 6. CHỤP HÌNH LÀM THẺ SINH VIÊN
                            </div>
                            <div className="flex flex-col px-[28px] gap-4 py-6">
                                <div className="">Chụp hình thẻ sinh viên tại phòng B34 (Lầu 3, khu B)</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center h-[48px] rounded-[15px] bg-[#9E4244] text-white font-[600] text-[22px] leading-[33px] px-[24px] w-fit mt-[40px]">
                                Bước 7. CÁC TIỆN ÍCH SINH VIÊN
                            </div>
                            <div className="flex flex-col px-[28px] gap-6 py-6">
                                <div className="">Nộp hồ sơ chuyển sinh hoạt Đoàn, sinh hoạt Đảng (nếu có); Hướng dẫn gia nhập Hội sinh viên Việt Nam; Tư vấn giới thiệu nhà trọ nếu có nhu cầu tại sảnh B. </div>
                                <div className="">Nhận quà tặng HUFLIT tại sảnh B.</div>
                                <div className="">Đăng ký học tại cơ sở Hóc Môn (áp dụng cho 8 ngành thuộc khoa Ngoại ngữ; Khoa CNTT, Khoa QTKD). </div>
                                <div className="">Xét học bổng Tân Sinh viên và Quỹ hỗ trợ sinh viên HUFLIT <span className="border-b border-[#0D85FD] text-[#0D85FD] font-[500]">{"<"}Xem chi tiết{">"}</span> </div>
                                <div className=""><span className="font-[500]">Chú ý:</span> Tân sinh viên có nhu cầu được cấp Giấy xác nhận sinh viên để hoãn NVQS, vay vốn Ngân hàng chính sách xã hội, giảm thuế TNCN và các nội dung khác liên quan, liên hệ bàn trực tiếp nhận cấp giấy tại sảnh lầu 4 – khu B.</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[48px] flex items-center rounded-[15px] bg-[#1F2251] text-white font-[600] text-[26px] leading-[39px] px-[24px] w-fit">
                            II. Thông tin cần thiết sau khi nhập học
                        </div>
                        <div className="flex flex-col px-[28px] gap-4 py-6">
                            <div className="">Sau khi làm thủ tục nhập học sinh viên nên thường xuyên theo dõi các trang thông tin chính thức của trường để luôn cập nhật thông tin mới nhất. Bên cạnh đó, các bạn nhớ tham gia buổi sinh hoạt công dân để nắm các thông tin và làm quen với môi trường mới. </div>
                            <div className="">2.1 Thời khóa biểu và kế hoạch học tập: <span className="border-b border-[#0D85FD] text-[#0D85FD] font-[500]">{"<"}Xem tại đây{">"}</span> </div>
                            <div className="">2.2 Ký hiệu phòng học và cơ sở: <span className="border-b border-[#0D85FD] text-[#0D85FD] font-[500]">{"<"}Xem tại đây{">"}</span> </div>
                            <div className="">2.3 Chương trình đào tạo: <span className="border-b border-[#0D85FD] text-[#0D85FD] font-[500]">{"<"}Xem tại đây{">"}</span> </div>
                            <div className="">2.4 Thông tin nhà trọ: <span className="border-b border-[#0D85FD] text-[#0D85FD] font-[500]">{"<"}[MHX24] HUFLIT – Google My Maps {">"}</span> </div>
                            <div className="">2.5 Thông tin về học bổng Tân sinh viên: <span className="border-b border-[#0D85FD] text-[#0D85FD] font-[500]">{"<"}Xem tại đây{">"}</span> </div>
                            <div className="">2.6 Các mẫu đơn: <span className="border-b border-[#0D85FD] text-[#0D85FD] font-[500]">{"<"}Xem tại đây{">"}</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
