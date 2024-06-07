'use client'

import Link from 'next/link'
import {Button} from '@/shared/button/button'
import {appRoutes} from '@/constants/routes'
import Text from '@/shared/typography/text'
import classes from '../layout.module.css'
import {FC, PropsWithChildren} from 'react'

const ForgotPage: FC<PropsWithChildren> = () => {
    return (
        <div className={classes.container}>
            <Text variant="h2" size="md">
                Forgot Password
            </Text>
            {/*<EmailInput placeholder="Email" type="email" fullWidth required />{' '}*/}
            <Button height={50} variant="solid" ripple>
                Restore
            </Button>
            <hr/>
            <p className={classes.center}>
                or
                <span>
          <Link href={appRoutes.login}>Login</Link>
        </span>
            </p>
            <p className={classes.center}>
                Don't have an account?
                <span>
          <Link href={appRoutes.register}>Sign up</Link>
        </span>
            </p>
        </div>
    )
}

export default ForgotPage
