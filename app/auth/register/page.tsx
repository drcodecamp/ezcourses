import classes from '../layout.module.css'
import Text from '@/shared/typography/text'
import RegisterForm from '@/app/auth/_components/register-form'
import { FC, PropsWithChildren } from 'react'

const RegisterPage: FC<PropsWithChildren> = () => {
  return (
    <div className={classes.container}>
      <Text variant="h1" size="xxl">
        Sign Up
      </Text>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
