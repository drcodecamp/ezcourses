'use client'

import classes from './inputs.module.css'
import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    height?: string
    variant?: string
    endContent?: React.ReactNode
    fullWidth?: boolean
    isInvalid: boolean
    width?: string
}

export const Input: React.FC<Props> = ({
                                           height,
                                           variant,
                                           endContent,
                                           isInvalid,
                                           fullWidth,
                                           ...props
                                       }) => {
    return (
        <div className={classes.container}>
            {endContent && <button>{endContent}</button>}
            <input
                {...props}
                className={`${classes.input} ${
                    fullWidth ? classes.full : props.width
                } `}
            />
            <label className={isInvalid ? classes.invalid : ''}>
                {props.placeholder || 'Here'}
            </label>
        </div>
    )
}

export default Input
