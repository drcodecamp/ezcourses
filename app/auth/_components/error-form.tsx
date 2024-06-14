import { FormFeedback } from '@/shared/form/feedback'
import Link from 'next/link'
import { appRoutes } from '@/constants/routes'
import React from 'react'

const ErrorForm = () => {
  return (
    <>
      <FormFeedback type={'error'} message="oops an error occurred" />
      <Link href={appRoutes.home}>Go back</Link>
    </>
  )
}

export default ErrorForm
