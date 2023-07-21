import React from 'react'
import { MENU_OPTIONS } from '../constants/menu-options'
import { SideMenuItem } from './SideMenuItem'

export const BottomNavigation = () => {
    return (
        <nav className='bottom-nav'>
            <ul className='flex justify-center gap-6 items-center'>
                {
                    MENU_OPTIONS.map(item => (
                        <SideMenuItem key={ item.path } item={ item }/>
                    ))
                }
            </ul>
        </nav>
    )
}
