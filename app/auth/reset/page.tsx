import Text from '@/shared/typography/text'
import classes from '../layout.module.css'
import React, { FC, PropsWithChildren } from 'react'
import ResetForm from '@/app/auth/_components/reset-form'

const ForgotPage: FC<PropsWithChildren> = () => {
  return (
    <div className={classes.container}>
      <Text variant="h1" size="xxl">
        Reset password
      </Text>
      <ResetForm />
    </div>
  )
}

export default ForgotPage
