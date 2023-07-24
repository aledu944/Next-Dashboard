'use client'


import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5"

export const SignOutButton = () => {
    
    return (
        <button className='nav__menu--item w-full' onClick={() => signOut()}>
            <span><IoLogOutOutline size={ 20 }/></span>
            <span>Cerrar Sesion</span>
        </button>
    )
}
