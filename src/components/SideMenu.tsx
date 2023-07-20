import { MENU_OPTIONS } from '../constants/menu-options'
import { SideMenuAvatar } from './SideMenuAvatar'
import { SideMenuItem } from './SideMenuItem'

export const SideMenu = () => {
    return (
        <nav className='w-full shadow-md rounded-lg md:w-2/12 p-5'>
            <SideMenuAvatar/>
            <ul>
                {
                    MENU_OPTIONS.map(item => (
                        <SideMenuItem key={ item.path } item={ item }/>
                    ))
                }
            </ul>
        </nav>
    )
}
