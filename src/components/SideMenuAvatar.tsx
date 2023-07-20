import Image from 'next/image'
import React from 'react'

export const SideMenuAvatar = () => {
    return (
        <div className='nav__menu--avatar'>
            <Image
                className='rounded-full max-h-10 object-cover max-w-[40px]'
                src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                height={ 50 }
                width={ 50 }
                alt='Nombre Usuario'
            />
            <p>Nombre Usuario</p>
        </div>
    )
}
