'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { IconLanguage, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'

export default function LoginPage() {
  const { theme, setTheme } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const router = useRouter()

  const toggleTheme = () => {
    //Nếu theme đang là dark thì khi nhấn sẽ chuyển thành light và ngược lại
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    // Reset lỗi trước khi kiểm tra
    setEmailError('')
    setPasswordError('')

    let isValid = true

    // Kiểm tra tính hợp lệ của email
    if (!email) {
      setEmailError('Vui lòng nhập email.')
      isValid = false
    }

    // Kiểm tra tính hợp lệ của password
    if (!password) {
      setPasswordError('Vui lòng nhập mật khẩu.')
      isValid = false
    }

    if (!isValid) return // Ngăn việc gửi yêu cầu nếu có lỗi

    // Gọi signIn từ next-auth
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    // Kiểm tra kết quả đăng nhập
    if (result?.error) {
      toast.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.')
      setEmail('')
      setPassword('')
    } else {
      console.log(result?.ok)
      router.push('/')
    }
  }

  const handleMicrosoftLogin = async () => {
    // Call the signIn function from next-auth for Microsoft login
    await signIn("microsoft-entra-id", { redirect: true }); // Redirects automatically on successful login
  };

  return (
    <div className="flex flex-col items-center w-full md:w-3/4 gap-5">
      <div className="flex flex-col w-full text-center gap-2 md:gap-3">
        <div className="relative flex justify-center items-center">
          <h1 className="text-base md:text-2xl font-bold">Đăng nhập</h1>
          <div className="absolute flex gap-2 right-0 text-blue-600">
            <button
              className="flex items-center justify-center size-6 md:size-8"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <IconSun size={16} className="md:size-18 dark:text-white" />
            </button>
            <button className="flex items-center justify-center size-6 md:size-8">
              <IconLanguage size={16} className="md:size-18 dark:text-white" />
            </button>
          </div>
        </div>
        <span className="text-xs md:text-sm">
          Đăng nhập vào hệ thống của Trường Cao Đẳng ...
        </span>
      </div>
      <Button
        onClick={handleMicrosoftLogin}
        className="flex gap-2 md:gap-3 w-full px-12 md:px-16 bg-white border rounded text-blue-600 border-blue-600 hover:shadow-md md:mt-2 dark:text-black dark:border-black"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ff5722"
              d="M6 6H22V22H6z"
              transform="rotate(-180 14 14)"
            />
            <path
              fill="#4caf50"
              d="M26 6H42V22H26z"
              transform="rotate(-180 34 14)"
            />
            <path
              fill="#ffc107"
              d="M26 26H42V42H26z"
              transform="rotate(-180 34 34)"
            />
            <path
              fill="#03a9f4"
              d="M6 26H22V42H6z"
              transform="rotate(-180 14 34)"
            />
          </svg>
        </div>
        Đăng nhập với Tài khoản Microsoft
      </Button>
      <div className="w-full flex items-center justify-center my-4">
        <div className="border-t flex-grow"></div>
        <span className="mx-4">HOẶC</span>
        <div className="border-t flex-grow"></div>
      </div>
      <form
        className="flex flex-col w-full gap-2 md:gap-3"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm md:text-base font-semibold">
            Tên người dùng <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Nhập tên người dùng"
            className="py-1.5 px-2 border rounded-sm outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm md:text-base font-semibold"
          >
            Mật khẩu <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Nhập mật khẩu"
            className="py-1.5 px-2 border rounded-sm outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-red-600 text-xs">{passwordError}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox name="remember" id="remember" />
            <label
              htmlFor="remember"
              className="ml-2 text-xs md:text-sm font-semibold"
            >
              Duy trì đăng nhập
            </label>
          </div>
          <Link
            href="/auth/forgot-pass"
            className="ml-2 text-xs md:text-sm font-semibold text-blue-600 dark:text-white"
          >
            Quên mật khẩu?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full py-2 px-12 md:px-16 bg-blue-600 border border-blue-600 rounded mt-4 hover:shadow-md dark:text-white"
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  )
}
