import Text from '@/shared/typography/text'
import classes from '../layout.module.css'
import React, { FC, PropsWithChildren } from 'react'
import NewPasswordForm from '@/app/auth/_components/new-password-form'

const NewPasswordPage: FC<PropsWithChildren> = () => {
  return (
    <div className={classes.container}>
      <Text variant="h1" size="xxl">
        Create new password
      </Text>
      <NewPasswordForm />
    </div>
  )
}

export default NewPasswordPage
