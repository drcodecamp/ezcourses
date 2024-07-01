'use client'

import classes from './avatar.module.css'
import React from 'react'

type Props = {
  thumb?: string
  name: string
}

export const Avatar: React.FC<Props> = ({ thumb, name }) => {
  return (
    <div className={classes.icon}>
      {thumb ? (
        <img
          className={classes.image}
          src={thumb ?? 'https://placehold.co/30x30'}
          alt="User Avatar"
        />
      ) : (
        <div>{name?.charAt(0) || ' '}</div>
      )}
    </div>
  )
}

export default Avatar
