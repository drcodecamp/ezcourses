import Link from 'next/link'
import { appRoutes } from '@/constants/routes'
import classes from './header.module.css'
import React from 'react'
import HeaderActions from '@/shared/header/header-actions'

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <span className={classes.logo}>
          <Link href={appRoutes.home}>
            ez<span className={classes.span}>mentor</span>
          </Link>
        </span>
      </div>
      <HeaderActions />
    </header>
  )
}

export default Header
