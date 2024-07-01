import React from 'react'
import classes from './thanks.module.css'
import { FaFire } from 'react-icons/fa'

type Props = {
  url: string
}

const Thanks: React.FC<Props> = () => {
  return (
    <button className={classes.button}>
      <FaFire /> Thanks
    </button>
  )
}

export default Thanks
