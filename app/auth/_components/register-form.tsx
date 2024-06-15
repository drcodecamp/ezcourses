'use client'

import { Button } from '@/shared/button/button'
import classes from '@/app/auth/layout.module.css'
import Link from 'next/link'
import { appRoutes } from '@/constants/routes'
import React, { FC, PropsWithChildren, useState, useTransition } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { initialFeedback, IsValidType } from '@/app/auth/_components/login-form'
import { register } from '@/actions/register'
import { FormFeedback } from '@/shared/form/feedback'
import { NameInput } from '@/shared/input/name'
import { emailPattern, namePattern } from '@/util/patterns/patterns'
import { EmailInput } from '@/shared/input/email'
import { PasswordInput } from '@/shared/input/password'

const initialValidate = {
  name: null,
  email: null,
  password: null,
}

const RegisterForm: FC<PropsWithChildren> = () => {
  const [validate, setValidate] = useState<IsValidType>(initialValidate)
  const [isPending, startTransition] = useTransition()
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [feedback, setFeedback] = useState(initialFeedback)

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValidate({
      ...validate,
      password: null,
    })
    setInfo({
      ...info,
      password: e.target.value,
    })
    setValidate({
      ...validate,
      password: !e.target.value.includes(' '),
    })
  }

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidate({
      ...validate,
      email: null,
    })
    setInfo({
      ...info,
      email: e.target.value,
    })
    const isValidEmail = emailPattern.test(info.email)
    setValidate({
      ...validate,
      email: isValidEmail,
    })
  }
  const handleInput = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({
      ...info,
      [key]: e.target.value,
    })
  }
  const handleRegister = (e: React.MouseEvent<HTMLElement>) => {
    if (!info.name) {
      return setFeedback({
        type: 'error',
        message: 'Please enter your full name',
      })
    }
    if (info && info.name.length < 2) {
      return setFeedback({
        type: 'error',
        message: 'Full name please...',
      })
    }
    if (!namePattern.test(info.name)) {
      return setFeedback({
        type: 'error',
        message: 'Invalid name...',
      })
    }
    if (!info.email) {
      return setFeedback({
        type: 'error',
        message: 'Please enter your email',
      })
    }
    if (!emailPattern.test(info.email)) {
      return setFeedback({
        type: 'error',
        message: 'Please enter a valid email address',
      })
    }
    if (!info.password) {
      return setFeedback({
        type: 'error',
        message: 'Please enter a password',
      })
    }
    if (info.password.includes(' ')) {
      return setFeedback({
        type: 'error',
        message: 'Password should not contain spaces',
      })
    }
    if (info.password.length < 6) {
      return setFeedback({
        type: 'error',
        message: 'Password is too short',
      })
    }
    startTransition(() => {
      register(info).then((data) => {
        setFeedback(data)
      })
    })
  }
  return (
    <>
      <button className={classes.method}>
        <div className={classes.icon}>
          <FcGoogle />
        </div>
        Continue with Google
      </button>
      <button className={classes.method}>
        <div className={classes.icon}>
          <FaFacebook color="#4172e7" />
        </div>
        Continue with Facebook
      </button>
      <hr />
      <form className={classes.form}>
        <NameInput
          onInput={(e) => handleInput('name', e)}
          placeholder="Full name"
          disabled={isPending}
          value={info.name}
          type="text"
          fullWidth
          required
        />
        <EmailInput
          onInput={handleEmailInputChange}
          placeholder="Email"
          disabled={isPending}
          value={info.email}
          valid={validate.email}
          type="email"
          fullWidth
          required
        />
        <PasswordInput
          onInput={handlePasswordInputChange}
          placeholder="Password"
          disabled={isPending}
          value={info.password}
          valid={validate.password}
          fullWidth
          required
        />
        <FormFeedback type={feedback.type} message={feedback.message} />
        <Button
          height={50}
          variant="solid"
          onClick={handleRegister}
          disabled={isPending}
          ripple
        >
          Sign up
        </Button>
        <hr />
      </form>
      <p className={classes.center}>
        By registering i agree to the
        <span>
          <Link href={appRoutes.tos} color="primary">
            Terms of use
          </Link>
        </span>
        and
        <span>
          <Link href={appRoutes.privacy} color="primary">
            Privacy policy
          </Link>
        </span>
      </p>
      <p className={classes.center}>
        Already have an account?
        <span>
          <Link href={appRoutes.login}>Login</Link>
        </span>
      </p>
    </>
  )
}

export default RegisterForm
