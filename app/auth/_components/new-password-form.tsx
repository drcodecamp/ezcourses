'use client'

import classes from '@/app/auth/layout.module.css'
import { Button } from '@/shared/button/button'
import Link from 'next/link'
import { appRoutes } from '@/constants/routes'
import React, {
  FC,
  PropsWithChildren,
  useMemo,
  useState,
  useTransition,
} from 'react'
import { initialFeedback } from '@/app/auth/_components/login-form'
import FormFeedback from '@/shared/form/feedback'
import { PasswordInput } from '@/shared/input/password'
import { useSearchParams } from 'next/navigation'
import { newPassword } from '@/actions/new-password'

const NewPasswordForm: FC<PropsWithChildren> = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState({
    password: '',
  })
  const [feedback, setFeedback] = useState({
    type: '',
    message: '',
  })

  const isFormSatisfied = useMemo(() => {
    if (!state.password) return null
    return state.password.length >= 6 && !state.password.includes(' ')
  }, [state])

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      password: e.target.value,
    })
  }

  const onClick = async () => {
    if (state.password.length < 6) {
      return setFeedback({
        type: 'error',
        message: 'Password must be at least 6 characters.',
      })
    }
    if (state.password.includes(' ')) {
      return setFeedback({
        type: 'error',
        message: 'Password should not contain spaces',
      })
    }
    setFeedback(initialFeedback)
    startTransition(() => {
      newPassword(state, token).then((data) => {
        setFeedback(data)
      })
      /*      return new Promise((r) => {
        setTimeout(() => {
          r(1 as any)
        }, 2000)
      })*/
    })
  }

  return (
    <>
      <PasswordInput
        onInput={handlePasswordInputChange}
        placeholder="Password"
        disabled={isPending}
        value={state.password}
        valid={isFormSatisfied}
        fullWidth
        required
      />
      <FormFeedback
        type={feedback?.type || 'success'}
        message={feedback?.message}
      />
      {feedback.type === 'success' ? (
        <Link href={appRoutes.login} className={classes.center}>
          Back to login
        </Link>
      ) : (
        <Button
          onClick={onClick}
          height={50}
          variant="solid"
          isPending={isPending}
          disabled={!isFormSatisfied}
          ripple
        >
          Save password
        </Button>
      )}
      {feedback.type === 'success' ? (
        <></>
      ) : (
        <>
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
      )}
    </>
  )
}

export default NewPasswordForm
