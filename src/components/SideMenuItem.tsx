'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props{
    item: { name:string, path:string, icon: JSX.Element }
}

export const SideMenuItem = ({ item }: Props) => {

    const pathname = usePathname()

    return (
        <Link href={ item.path } className={`nav__menu--item ${ pathname === item.path ? 'nav__link--active' : '' }`}>
            <span>
                { item.icon }
            </span>
            { item.name }
        </Link>
    )
}
