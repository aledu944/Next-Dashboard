import NextAuth, { NextAuthOptions } from "next-auth"

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

import prisma from "@/src/lib/prisma";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";




export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? '',
      }),
      CredentialsProvider({
        name:'Credrentials',
        credentials: {
          username: { label: 'Email', type:'email', placeholder:'Tu correo' },
          password: { label: 'Contraseña', type:'password' }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      }),
    ],

}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST }

