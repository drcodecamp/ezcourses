import Text from '@/shared/typography/text'
import classes from '../layout.module.css'
import React, { FC, PropsWithChildren } from 'react'
import ForgotForm from '@/app/auth/_components/forgot-form'

const ForgotPage: FC<PropsWithChildren> = () => {
  return (
    <div className={classes.container}>
      <Text variant="h1" size="xxl">
        Forgot password?
      </Text>
      <ForgotForm />
    </div>
  )
}

export default ForgotPage
