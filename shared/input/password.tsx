'use client'

import React, {FormEvent, ReactElement, useState} from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import classes from './inputs.module.css'
import {checkPasswordStrength} from '@/util/password/password-str'

type Props = {
    onInput?(
        e: React.ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>
    ): void
    type?: string
    required: boolean
    disabled?: boolean
    height?: string | number
    variant?: string
    endContent?: ReactElement
    hideStrength?: boolean
    placeholder?: string
    fullWidth?: boolean
    value: string
    pattern?: string
    isPending?: boolean
    width?: string | number
    valid: boolean | null
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'>

export const PasswordInput = ({
                                  height,
                                  variant,
                                  endContent,
                                  hideStrength,
                                  placeholder,
                                  fullWidth,
                                  valid,
                                  value,
                                  pattern,
                                  isPending,
                                  ...props
                              }: Props) => {
    const [isDisplayed, setDisplayed] = useState(false)
    const handleDisplay = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setDisplayed(!isDisplayed)
    }
    const strength = checkPasswordStrength(value)
    return (
        <div className={classes.container}>
            <button onClick={handleDisplay}>
                {isDisplayed ? <FaEyeSlash/> : <FaEye/>}
            </button>
            <input
                value={value}
                type={isDisplayed ? 'text' : 'password'}
                className={`${classes.input} ${
                    fullWidth ? classes.full : props.width
                } `}
                {...props}
            />
            <label
                className={valid === null ? '' : valid ? '' : classes.invalid}>
                {placeholder}
            </label>
            {!hideStrength && (
                <div className={classes.strength}>
                    <div
                        className={`${classes.bar} ${
                            strength === 1 && value.length > 0 && valid ? classes.active : ''
                        }`}
                    ></div>
                    <div
                        className={`${classes.bar} ${strength === 2 ? classes.active : ''}`}
                    ></div>
                    <div
                        className={`${classes.bar} ${strength === 3 ? classes.active : ''}`}
                    ></div>
                    <div
                        className={`${classes.bar} ${strength === 4 ? classes.active : ''}`}
                    ></div>
                </div>
            )}
        </div>
    )
}
