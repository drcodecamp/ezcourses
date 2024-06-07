import classes from '../layout.module.css'
import Text from '@/shared/typography/text'
import LoginForm from '@/app/auth/_components/login-form'
import {FC, PropsWithChildren} from 'react'

const LoginPage: FC<PropsWithChildren> = () => {
    return (
        <div className={classes.container}>
            <Text variant="h1" size="xxl">
                Sign In
            </Text>
            <LoginForm/>
        </div>
    )
}

export default LoginPage
