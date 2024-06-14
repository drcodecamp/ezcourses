import { ReactNode } from 'react'
import classes from './text.module.css'

type TextVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'p'
type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

interface TextProps {
  bold?: boolean
  variant?: TextVariants
  size?: TextSizes
  children: ReactNode
}

export default function Text({ bold, variant = 'p', size, children }: TextProps) {
  let fontClass = ''
  switch (size) {
    case 'xs':
      fontClass = classes.xs
      break
    case 'sm':
      fontClass = classes.sm
      break
    case 'md':
      fontClass = classes.md
      break
    case 'lg':
      fontClass = classes.lg
      break
    case 'xl':
      fontClass = classes.xl
      break
    case 'xxl':
      fontClass = classes.xxl
      break
  }
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={`${fontClass} ${classes.h1} ${bold ? classes.bold : ''}`}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          className={`${fontClass} ${classes.h2} ${bold ? classes.bold : ''}`}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          className={`${fontClass} ${classes.h3} ${bold ? classes.bold : ''}`}
        >
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          className={`${fontClass} ${classes.h4} ${bold ? classes.bold : ''}`}
        >
          {children}
        </h4>
      )
    case 'p':
      return (
        <p className={`${fontClass} ${classes.p} ${bold ? classes.bold : ''}`}>
          {children}
        </p>
      )
    default:
      return (
        <p className={`${fontClass} ${classes.p} ${bold ? classes.bold : ''}`}>
          {children}
        </p>
      )
  }
}
