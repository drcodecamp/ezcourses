'use client'

import {
    AiOutlineAreaChart,
    AiOutlineCode,
    AiOutlineFire,
    AiOutlineFundProjectionScreen,
    AiOutlineHistory,
    AiOutlineLike,
    AiOutlineMoneyCollect,
    AiOutlineSetting,
} from 'react-icons/ai'
import Avatar from '@/shared/avatar/avatar'
import {LuAtom} from 'react-icons/lu'
import {BiMusic, BiPurchaseTagAlt} from 'react-icons/bi'
import {FaBagShopping} from 'react-icons/fa6'
import classes from './side-nav.module.css'
import Link from 'next/link'
import {appRoutes} from '@/constants/routes'

export default function SideNav() {
    return (
        <>
            <aside className={classes.aside}>
                <nav className={classes.nav}>
                    <Link href={appRoutes.home} className={classes.active}>
                        <AiOutlineFundProjectionScreen size={22}/> Home
                    </Link>
                    <Link href={appRoutes.home}>
                        <AiOutlineSetting size={22}/> Settings
                    </Link>
                </nav>
                <nav className={classes.nav}>
                    <details>
                        <summary> <h3>Subscriptions</h3></summary>
                        <Link href={appRoutes.home}>
                            <Avatar>Doctor Code</Avatar>
                        </Link>
                        <Link href={appRoutes.home}>
                            <Avatar>Doctor Code</Avatar>
                        </Link>
                        <Link href={appRoutes.home}>
                            <Avatar>Doctor Code</Avatar>
                        </Link>
                </details>
                </nav>
                <nav className={classes.nav}>
                    <details>
                        <summary><h3>Explore</h3></summary>

                        <Link href={appRoutes.home}>
                            <AiOutlineFire size={22}/>
                            Trending
                        </Link>
                        <Link href={appRoutes.home}>
                            <LuAtom size={22}/>
                            A.I
                        </Link>
                        <Link href={appRoutes.home}>
                            <AiOutlineCode size={22}/>
                            Development
                        </Link>
                        <Link href={appRoutes.home}>
                            <AiOutlineMoneyCollect size={22}/>
                            Business
                        </Link>
                        <Link href={appRoutes.home}>
                            <BiMusic size={22}/>
                            Music
                        </Link>
                        <Link href={appRoutes.home}>
                            <AiOutlineAreaChart size={22}/>
                            Trading
                        </Link>
                        <Link href={appRoutes.home}>
                            <BiPurchaseTagAlt size={22}/>
                            Marketing
                        </Link>
                        <Link href={appRoutes.home}>
                            <FaBagShopping size={22}/>
                            Lifestyle
                        </Link>
                    </details>
                </nav>
            </aside>
        </>
    )
}
