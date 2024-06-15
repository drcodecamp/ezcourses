'use client'

import classes from '@/app/auth/layout.module.css'
import { Button } from '@/shared/button/button'
import Link from 'next/link'
import { appRoutes } from '@/constants/routes'
import React, { FC, PropsWithChildren, useState } from 'react'
import { emailPattern } from '@/util/patterns/patterns'
import { EmailInput } from '@/shared/input/email'

const ForgotForm: FC<PropsWithChildren> = () => {
  const [isValid, setValidate] = useState<null | boolean>(null)
  const [email, setEmail] = useState('')

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidate(emailPattern.test(e.target.value))
    setEmail(e.target.value)
  }

  const isPending = false

  return (
    <>
      <EmailInput
        onInput={handleEmailInputChange}
        placeholder="Email"
        disabled={isPending}
        value={email}
        valid={isValid}
        type="email"
        fullWidth
        required
      />
      <Button
        height={50}
        variant="solid"
        disabled={!isValid}
        isPending={false}
        ripple
      >
        Restore
      </Button>
      <hr />
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
    </>
  )
}

export default ForgotForm
