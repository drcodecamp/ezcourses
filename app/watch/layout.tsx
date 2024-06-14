import classes from './layout.module.css'
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main className={classes.main}>{children}</main>
}

export default Layout
