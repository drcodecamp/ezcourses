import classes from './layout.module.css'
import React, { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import bgImage from '@/assets/login-page-bg.png'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={classes.main}>
      <Image
        style={{ pointerEvents: 'none', objectFit: 'cover' }}
        src={bgImage}
        alt="login image"
        className={classes.bg}
      />
      {children}
    </main>
  )
}

export default Layout
