import React from 'react'
import classes from './share.module.css'
import { FaShareAlt } from 'react-icons/fa'

type Props = {
  url: string
}

const Share: React.FC<Props> = () => {
  return (
    <button className={classes.button}>
      <FaShareAlt /> Share
    </button>
  )
}

export default Share
