import classes from './inputs.module.css'
import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  height?: string
  variant?: string
  endContent?: React.ReactNode
  placeholder?: string
  type?: string
  value?: string
  required: boolean
  disabled?: boolean
  pattern?: RegExp
  fullWidth?: boolean
  hideStrength?: boolean
  width?: string
  valid: boolean | null
}

export const EmailInput: React.FC<Props> = ({
  height,
  variant,
  endContent,
  placeholder,
  value,
  pattern,
  fullWidth,
  valid,
  hideStrength,
  ...props
}) => {
  return (
    <div className={classes.container}>
      {endContent && <button>{endContent}</button>}
      <input
        value={value}
        className={`${classes.input} ${
          fullWidth ? classes.full : props.width
        } `}
        {...props}
      />
      <label className={valid === null ? '' : valid ? '' : classes.invalid}>
        {placeholder}
      </label>
    </div>
  )
}
