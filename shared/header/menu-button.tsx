'use client'

import classes from './menu-button.module.css'
import React from 'react'

export const MenuButton: React.FC = ({ ...props }) => {
  return (
    <div className={classes.burger} {...props}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default MenuButton
