import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import MicrosoftEntraID from 'next-auth/providers/microsoft-entra-id'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ISSUER,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials

        // Kiểm tra tính hợp lệ của email và password trước khi gọi API
        if (!email || !password) {
          console.log('Thiếu email hoặc mật khẩu.')
          throw new Error('Vui lòng nhập đầy đủ email và mật khẩu.')
        }

        console.log('Authorize callback:', { email, password })

        try {
          const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          })

          if (!response.ok) {
            console.log('Tài khoản người dùng không tồn tại!')
            return null
          }

          const data = await response.json()

          if (data && data.result) {
            console.log('Authorize response data:', data.result)
            return { id: data.userId, accessToken: data.result }
          }
        } catch (error) {
          console.error('Lỗi khi gửi yêu cầu đăng nhập:', error)
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // When logging in with credentials, `user` contains `accessToken`
      if (user) {
        token.id = user.id
        token.accessToken = user.accessToken // Store accessToken in JWT token
      }

      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.accessToken = token.accessToken as string // Set accessToken in session

      return session
    },
  },
  session: {
    maxAge: 1 * 60 * 60, // Expire after 1 hour for testing
    updateAge: 24 * 60 * 60, // Optionally refresh session every 24 hours
  },
})
