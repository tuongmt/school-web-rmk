import NextAuth, { DefaultSession } from 'next-auth'

// declare module 'next-auth' {
//   interface Session {
//     user: {
//       userRoles: {
//         id: string
//         userId: string
//         roleId: string
//       }[]
//     } & DefaultSession['user']
//   }

//   interface User {
//     userRoles: {
//       id: string
//       userId: string
//       roleId: string
//     }[]
//   }
// }

// next-auth.d.ts
declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      accessToken?: string // Add accessToken to Session.user
    } & DefaultSession['user']
    accessToken?: string // Add accessToken to the root of Session
  }

  interface User {
    id: string
    accessToken: string
  }

  interface JWT {
    id: string
    accessToken: string
  }
}
