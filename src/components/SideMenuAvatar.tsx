import Image from 'next/image'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export const SideMenuAvatar = async () => {
    const session = await getServerSession(authOptions);

    const image = session?.user?.image ?? 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600'
    const name = session?.user?.name ?? 'Nombre usuario'


    return (
        <div className='nav__menu--avatar'>
            <Image
                className='rounded-full object-cover max-w-[80px]'
                src={ image }
                height={ 80 }
                width={ 80 }
                alt='Nombre Usuario'
            />
            <p className='text-xl font-bold'>{ name }</p>
        </div>
    )
}
