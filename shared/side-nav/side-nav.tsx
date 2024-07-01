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
import { LuAtom } from 'react-icons/lu'
import { BiMusic, BiPurchaseTagAlt } from 'react-icons/bi'
import { FaBagShopping } from 'react-icons/fa6'
import classes from './side-nav.module.css'
import Link from 'next/link'
import { appRoutes } from '@/constants/routes'

const SideNav = () => {
  return (
    <>
      <aside className={classes.aside}>
        <nav className={classes.nav}>
          <Link href={appRoutes.home} className={classes.active}>
            <AiOutlineFundProjectionScreen /> Home
          </Link>
          <Link href={appRoutes.settings}>
            <AiOutlineSetting /> Settings
          </Link>
        </nav>
        <nav className={classes.nav}>
          <details open>
            <summary>
              <h3>You</h3>
            </summary>
            <Link href={appRoutes.home}>
              <AiOutlineFundProjectionScreen /> Your courses
            </Link>
            <Link href={appRoutes.home}>
              <AiOutlineHistory /> History
            </Link>
            <Link href={appRoutes.home}>
              <AiOutlineLike /> Liked
            </Link>
          </details>
        </nav>
        <nav className={classes.nav}>
          <details open>
            <summary>
              <h3>Subscriptions</h3>
            </summary>
            <Link href={appRoutes.home}>
              <Avatar name="Doctor Code" />
              <span>Doctor Code</span>
            </Link>
            <Link href={appRoutes.home}>
              <Avatar name="Doctor Code" />
              <span>Doctor Code</span>
            </Link>
            <Link href={appRoutes.home}>
              <Avatar name="Doctor Code" />
              <span>Doctor Code</span>
            </Link>
          </details>
        </nav>
        <nav className={classes.nav}>
          <details open>
            <summary>
              {' '}
              <h3>Explore</h3>
            </summary>

            <Link href={appRoutes.home}>
              <AiOutlineFire />
              Trending
            </Link>
            <Link href={appRoutes.home}>
              <LuAtom />
              A.I
            </Link>
            <Link href={appRoutes.home}>
              <AiOutlineCode />
              Development
            </Link>
            <Link href={appRoutes.home}>
              <AiOutlineMoneyCollect />
              Business
            </Link>
            <Link href={appRoutes.home}>
              <BiMusic />
              Music
            </Link>
            <Link href={appRoutes.home}>
              <AiOutlineAreaChart />
              Trading
            </Link>
            <Link href={appRoutes.home}>
              <BiPurchaseTagAlt />
              Marketing
            </Link>
            <Link href={appRoutes.home}>
              <FaBagShopping />
              Lifestyle
            </Link>
          </details>
        </nav>
      </aside>
    </>
  )
}

export default SideNav
