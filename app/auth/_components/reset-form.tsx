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
import { emailPattern } from '@/util/patterns/patterns'
import { EmailInput } from '@/shared/input/email'
import { reset } from '@/actions/reset'
import { initialFeedback } from '@/app/auth/_components/login-form'
import FormFeedback from '@/shared/form/feedback'

const ResetForm: FC<PropsWithChildren> = () => {
  const [state, setState] = useState({
    email: '',
  })
  const [isPending, startTransition] = useTransition()
  const [feedback, setFeedback] = useState({
    type: '',
    message: '',
  })

  const isFormSatisfied = useMemo(() => {
    if (!state.email) return null
    return emailPattern.test(state.email)
  }, [state])

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      email: e.target.value,
    })
  }

  const onClick = () => {
    setFeedback(initialFeedback)
    startTransition(() => {
      reset(state).then((data) => {
        setFeedback(data)
      })
    })
  }

  return (
    <>
      <EmailInput
        onInput={handleEmailInputChange}
        placeholder="Email"
        disabled={isPending}
        value={state.email}
        valid={isFormSatisfied}
        type="email"
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
          disabled={!isFormSatisfied}
          isPending={isPending}
          ripple
        >
          Restore
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

export default ResetForm
