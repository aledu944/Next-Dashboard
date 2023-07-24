
import { SideMenuItem } from './SideMenuItem'
import { SideMenuAvatar } from './SideMenuAvatar'
import { MENU_OPTIONS } from '../constants/menu-options'
import { SignOutButton } from './SignOutButton'

export const SideMenu = async () => {

    return (
        <nav className='hidden md:block w-full shadow-xl shadow-indigo-100 rounded-3xl sm:w-3/12 lg:w-2/12 p-5 bg-white'>
            <SideMenuAvatar/>
            <ul>
                {
                    MENU_OPTIONS.map(item => (
                        <SideMenuItem key={ item.path } item={ item }/>
                    ))
                }
            </ul>
            <SignOutButton/>
        </nav>
    )
}
