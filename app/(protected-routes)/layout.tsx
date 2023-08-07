import { Nunito } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

import { redirect } from 'next/navigation'
import { SideMenu } from '@/src/components'
import { BottomNavigation } from '@/src/components/BottomNavigation'

const nunito = Nunito({ subsets: ['latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {


    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/auth/signin');
    }


    return (
        <body className={`${nunito.className} flex flex-col md:flex-row relative`}>
            <SideMenu />
            <main className='w-full md:w-9/12 lg:w-10/12  h-screen md:overflow-y-scroll p-10'>
                {children}
            </main>
            <BottomNavigation />
        </body>
    )
}
