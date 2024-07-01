import classes from '@/shared/header/header.module.css'
import Link from 'next/link'
import { appRoutes } from '@/constants/routes'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Button } from '@/shared/button/button'
import { MdMenu } from 'react-icons/md'
import React from 'react'
import { auth } from '@/auth'
import Avatar from '@/shared/avatar/avatar'

export const HeaderActions = async () => {
  const session = await auth()
  return (
    <>
      <nav className={`${classes.nav}`}>
        <Link href={appRoutes.cart} className={classes.icon}>
          <RiShoppingCartLine size={22} />
        </Link>
        {session ? (
          <Avatar thumb={session?.user.image} name={session?.user.name} />
        ) : (
          <>
            <Link href={appRoutes.login}>
              <Button height={40} variant="solid" ripple>
                Sign in
              </Button>
            </Link>
            <Link href={appRoutes.register}>
              <Button height={40} variant="bordered">
                Sign up
              </Button>
            </Link>
          </>
        )}
      </nav>
      <nav className={`${classes.mobile}`}>
        <Button height={40} className={classes.icon}>
          <MdMenu size={24} />
        </Button>
      </nav>
    </>
  )
}

export default HeaderActions
