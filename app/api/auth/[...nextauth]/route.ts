import NextAuth, { NextAuthOptions } from "next-auth"

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

import prisma from "@/src/lib/prisma";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { signInEmailPassword } from "@/src/auth/actions/actions";




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
          email: { label: 'Email', type:'email', placeholder:'Tu correo' },
          password: { label: 'Contraseña', type:'password', placeholder:'********' },
        },
        async authorize(credentials, req) {
          return await signInEmailPassword( credentials!.email, credentials!.password);
        }
      }),
    ],

}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST }

