'use client'

import React, { useRef, useState } from 'react'
import classes from './button.module.css'
import Loader from '@/shared/loader/loader'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  ripple?: boolean
  isPending?: boolean
  height: number
  width?: number
  variant?: string
  disabled?: boolean
}

export const Button: React.FC<Props> = ({
  children,
  ripple,
  variant,
  height,
  width,
  isPending,
  ...props
}) => {
  const buttonRef = useRef(null)
  const [rippleVisible, setRippleVisible] = useState(false)
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 })

  const buttonWidth = width ? `${width}px` : 'auto'

  const handleAnimation = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      setRippleVisible(true)
      const rect = (e.target as HTMLButtonElement).getBoundingClientRect()
      setRipplePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setTimeout(() => {
        setRippleVisible(false)
      }, 350)
      props.onClick && props.onClick(e)
    }
  }

  const renderButton = () => {
    if (isPending) {
      return (
        <button
          onClick={(e) => e.preventDefault()}
          className={classes.pending}
          style={{ height: `${height}px`, width: buttonWidth }}
        >
          <div className={classes.content}>
            <Loader />
          </div>
        </button>
      )
    }
    if (variant === 'solid')
      return (
        <button
          {...props}
          onClick={handleAnimation}
          ref={buttonRef}
          className={classes.solid}
          style={{ height: `${height}px`, width: buttonWidth }}
        >
          <div className={classes.content}>
            {isPending ? <Loader /> : children}
          </div>
          {rippleVisible && (
            <span
              className={classes.ripple}
              style={{
                left: `${ripplePosition.x}px`,
                top: `${ripplePosition.y}px`,
              }}
            />
          )}
        </button>
      )
    if (variant === 'bordered')
      return (
        <button
          className={classes.bordered}
          {...props}
          style={{ height: `${height}px`, width: buttonWidth }}
        >
          {children}
        </button>
      )
    return (
      <button
        onClick={handleAnimation}
        ref={buttonRef}
        style={{ height: `${height}px`, width: buttonWidth }}
        {...props}
      >
        {children}
        {rippleVisible && (
          <span
            className={classes.ripple}
            style={{
              left: `${ripplePosition.x}px`,
              top: `${ripplePosition.y}px`,
            }}
          />
        )}
      </button>
    )
  }
  return renderButton()
}
