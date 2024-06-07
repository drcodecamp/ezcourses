'use client'

import React, {ChangeEvent, FC, useRef, useState} from 'react'
import classes from './inputs.module.css'
import {namePattern} from '@/util/patterns/patterns'

interface NameInputProps {
    height?: number
    variant?: string
    endContent?: React.ReactElement
    placeholder?: string
    value?: string
    pattern?: RegExp
    fullWidth?: boolean
    hideStrength?: boolean
    width?: string | number
    disabled?: boolean
    type?: string
    required?: boolean

    onInput?(e: any): void
}

export const NameInput: FC<NameInputProps> = ({
                                                  height,
                                                  variant,
                                                  endContent,
                                                  placeholder,

                                                  value,
                                                  pattern,
                                                  fullWidth,
                                                  hideStrength,
                                                  ...props
                                              }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [isInvalid, setIsInvalid] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = inputRef.current?.value
        if (!inputValue) {
            setIsInvalid(false)
            return
        }
        const isValid = namePattern.test(inputValue)
        setIsInvalid(!isValid)
    }

    return (
        <div className={classes.container}>
            {endContent && <button>{endContent}</button>}
            <input
                onChange={handleInputChange}
                value={value}
                ref={inputRef}
                className={`${classes.input} ${
                    fullWidth ? classes.full : props.width
                } `}
                {...props}
            />
            <label
                className={isInvalid ? classes.invalid : ''}>{placeholder}</label>
        </div>
    )
}
