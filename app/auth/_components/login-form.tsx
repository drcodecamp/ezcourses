'use client'

import classes from '@/app/auth/layout.module.css'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { FormFeedback } from '@/shared/form/feedback'
import { Button } from '@/shared/button/button'
import Link from 'next/link'
import { appRoutes } from '@/constants/routes'
import { login } from '@/actions/login'
import React, { FC, PropsWithChildren, useState, useTransition } from 'react'
import { emailPattern } from '@/util/patterns/patterns'
import { EmailInput } from '@/shared/input/email'
import { PasswordInput } from '@/shared/input/password'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import Loader from '@/shared/loader/loader'

export const initialFeedback = {
  type: '',
  message: '',
}
const initialValidate = {
  email: null,
  password: null,
}
const initialInformation = {
  email: '',
  password: '',
}
export type IsValidType = {
  [k: string]: boolean | null
}

const LoginForm: FC<PropsWithChildren> = () => {
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email is used with another provider'
      : ''
  const [isProviderLoading, startProviderLoading] = useTransition()
  const [isPending, startTransition] = useTransition()
  const [provider, setProvider] = useState('')
  const [feedback, setFeedback] = useState({
    type: 'error',
    message: urlError,
  })
  const [validate, setValidate] = useState<IsValidType>(initialValidate)
  const [info, setInfo] = useState(initialInformation)

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
    if (e.target.value === '') {
      setInfo({
        ...info,
        email: '',
      })
      return setValidate({
        password: validate.password,
        email: null,
      })
    }
    setValidate({
      ...validate,
      email: emailPattern.test(e.target.value),
    })
    setInfo({
      ...info,
      email: e.target.value,
    })
  }

  const handleLogin = () => {
    setFeedback(initialFeedback)
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
        message: 'Please enter your password',
      })
    }
    if (info.password.includes(' ')) {
      return setFeedback({
        type: 'error',
        message: 'Password should not contain spaces',
      })
    }
    startTransition(() => {
      login(info).then((data) => {
        setFeedback(data)
      })
    })
  }

  const handleProviderLogin = (provider: string) => {
    if (isProviderLoading) return
    setProvider(provider)
    startProviderLoading(() => {
      signIn(provider).then(() => {
        setProvider('')
      })
    })
  }

  return (
    <>
      <button
        disabled={provider === 'github'}
        className={classes.method}
        onClick={() => handleProviderLogin('google')}
      >
        {provider === 'google' ? (
          <Loader />
        ) : (
          <>
            <div className={classes.icon}>
              <FcGoogle />
            </div>
            Continue with Google
          </>
        )}
      </button>
      <button
        disabled={provider === 'google'}
        className={classes.method}
        onClick={() => handleProviderLogin('github')}
      >
        {provider === 'github' ? (
          <Loader />
        ) : (
          <>
            <div className={classes.icon}>
              <FaGithub />
            </div>
            Continue with Github
          </>
        )}
      </button>
      <hr />
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
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
          hideStrength
          fullWidth
          required
        />
        <FormFeedback
          type={feedback?.type || 'success'}
          message={feedback?.message}
        />
        <Button
          isPending={isPending}
          height={50}
          variant="solid"
          ripple
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <hr />
        <p className={classes.center}>
          <span>
            <Link href={appRoutes.reset}>Forgot password?</Link>
          </span>
        </p>
        <p className={classes.center}>
          Don't have an account?
          <span>
            <Link href={appRoutes.register}>Sign up</Link>
          </span>
        </p>
      </form>
    </>
  )
}

export default LoginForm
