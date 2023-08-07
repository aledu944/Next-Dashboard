import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

import prisma from "@/src/lib/prisma";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { signInEmailPassword } from "@/src/auth/actions/actions";
import async from '../../../(protected-routes)/server-side/product/[slug]/page';




export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),

    CredentialsProvider({
      name: 'Credrentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Tu correo' },
        password: { label: 'Contraseña', type: 'password', placeholder: '********' },
      },
      async authorize(credentials, req) {
        const user = await signInEmailPassword(credentials!.email, credentials!.password);
        // if ( !user ) return null;
        return user
      }
    }),
  ],

  //? FOR CREDENTIALS
  session: {
    strategy: 'jwt',
  },

  // CALLBACKS - PASAN DESPUES DE LA AUTENTICACION

  callbacks: {
    //? MANEJA EL INICIO DE SESION: MANEJO DE ROLES - BLOQUEO DE USUARIOS
    async signIn({ user }){
      return true;
    },

    //? MENEJA LA INFO DEL TOKEN
    async jwt({ token, user, account }){
      const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } });
      token.id = dbUser?.id!
      return token;
    },

    //? MENEJA LA INFORMACION DE LA SESSION
    async session({ session, token, user } : any){

      if( session && session.user ){
        session.user.id = token.id;
      }
      return session
    }
  }

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }

