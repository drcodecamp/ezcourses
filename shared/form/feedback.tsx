import classes from './feedback.module.css'
import {IoHappyOutline} from 'react-icons/io5'
import {MdErrorOutline} from 'react-icons/md'
import React from 'react'

type Props = {
    message?: string
    type?: string
}

export const FormFeedback: React.FC<Props> = ({message = '', type = ''}) => {
    if (!message) return null
    return (
        <div
            className={`${type === 'error' ? classes.error : classes.success}`}>
            {type === 'error' ? (
                <MdErrorOutline style={{marginTop: 3}}/>
            ) : (
                <IoHappyOutline style={{paddingTop: 3}}/>
            )}{' '}
            {message}
        </div>
    )
}
export default FormFeedback
