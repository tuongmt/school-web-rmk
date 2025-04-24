export interface Links {
    label: string
    href?: string
    children?: {
        label: string
        href: string
    }[]
}

export const navLinks: Links[] = [
    {
        label: "Giới thiệu",
        href: "/gioi-thieu",
        children: [
            {
                label: "Thông điệp của chủ tịch HDQT",
                href: "/a",
            },
            {
                label: "Tự tin chọn CD Quốc Bảo",
                href: "/",
            },
            {
                label: "Triết lý giáo dục",
                href: "/",
            },
            {
                label: "Sứ mệnh – Tầm nhìn – Mục tiêu",
                href: "/",
            },
            {
                label: "Giá trị cốt lõi",
                href: "/",
            },
            {
                label: "Hoạt động của CBGV",
                href: "/",
            },
        ],
    },
    {
        label: "Tuyển sinh",
        href: "/tuyen-sinh",
        children: [
            {
                label: "Cao đẳng chính quy",
                href: "/",
            },
            {
                label: "Đăng ký xét tuyển trực tuyến",
                href: "/",
            },
            {
                label: "Lăng kính ngành nghề",
                href: "/",
            },
            {
                label: "Hiểu đúng – Chọn đúng",
                href: "/",
            },
            {
                label: "Học phí",
                href: "/",
            },
            {
                label: "Hướng dẫn nhập học",
                href: "/huong-dan-nhap-hoc",
            },
            {
                label: "Hướng dẫn đăng nhập Email",
                href: "/huong-dan-dang-nhap-email",
            },
            {
                label: "Quy chế tuyển sinh",
                href: "/",
            },
        ],
    },
    {
        label: "Đào tạo",
        href: "/dao-tao",
        children: [],
    },
    {
        label: "Hành chính",
        href: "/hanh-chinh",
        children: [
            {
                label: "Quy chế -  Quy định",
                href: "/",
            },
            {
                label: "Biểu mẫu đào tạo",
                href: "/",
            },
            {
                label: "Công khai giáo dục",
                href: "/",
            },
            {
                label: "Kế hoạch đào tạo",
                href: "/",
            },
        ],
    },
    {
        label: "Thông báo",
        href: "/thong-bao",
        children: [],
    },
    {
        label: "Tin tức & Góc báo chí",
        href: "/tin-tuc-bao-chi",
        children: [
            {
                label: "Báo chí nói gì về CD Quốc Bảo",
                href: "/",
            },
            {
                label: "Video",
                href: "/",
            },
        ],
    },
]
