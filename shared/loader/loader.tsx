import classes from './loader.module.css'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  size?: number
}

const Loader: React.FC<Props> = ({ size }) => {
  const style = {
    width: size || 8,
    height: size || 8,
    margin: '0 auto',
  }
  return <div style={{ ...style }} className={classes.loader}></div>
}

export default Loader
