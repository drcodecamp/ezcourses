'use client'

import classes from './avatar.module.css'
import React, {ReactNode} from 'react'

type Props = {
    children: ReactNode
    thumb?: string
    session?: any
}

export const Avatar: React.FC<Props> = ({thumb, session}) => {
    return (
        <div className={classes.avatar}>
            {thumb ? (
                <div className={classes.image}>
                    <img
                        src={session?.user.img ?? 'https://placehold.co/30x30'}
                        alt="User Avatar"
                    />
                </div>
            ) : (
                <div className={classes.icon}>{''}</div>
            )}
            {JSON.stringify(session)}
        </div>
    )
}

export default Avatar
