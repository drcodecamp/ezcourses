import React from 'react'
import classes from './like.module.css'
import { BiLike } from 'react-icons/bi'

type Props = {
  url: string
}

const Share: React.FC<Props> = () => {
  return (
    <button className={classes.button}>
      <BiLike size={22} />
    </button>
  )
}

export default Share
