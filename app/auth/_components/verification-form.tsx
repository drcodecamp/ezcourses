'use client'

import Link from 'next/link'
import { appRoutes } from '@/constants/routes'
import React, { useCallback, useEffect, useState, useTransition } from 'react'
import Loader from '@/shared/loader/loader'
import classes from './verification-form.module.css'
import { useSearchParams } from 'next/navigation'
import { newVerification } from '@/actions/new-verification'
import FormFeedback from '@/shared/form/feedback'

const VerificationForm = () => {
  const [isPending, startTransition] = useTransition()
  const [feedback, setFeedback] = useState({
    type: '',
    message: '',
  })
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (!token) {
      setFeedback({
        type: 'error',
        message: 'No token was found.',
      })
      return
    }
    startTransition(() => {
      newVerification(token)
        .then((data) => {
          setFeedback(data)
        })
        .catch(() => {
          setFeedback({
            type: 'error',
            message: 'Something went wrong!',
          })
        })
    })
  }, [token])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <div className={classes.container}>
      {isPending && (
        <>
          <Loader size={20} />
          <p>We are verifying your account...</p>
        </>
      )}
      <>
        <FormFeedback type={feedback.type} message={feedback.message} />
        {feedback.type === 'error' && (
          <Link href={appRoutes.home}>Go back</Link>
        )}
      </>
    </div>
  )
}

export default VerificationForm
