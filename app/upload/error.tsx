'use client'

import { FC, PropsWithChildren } from 'react'

const Error: FC<PropsWithChildren> = () => {
  return <div>cant find Clip {JSON.stringify({})}</div>
}

export default Error
