import { FC, PropsWithChildren } from 'react'
import './globals.css'
import Header from '@/shared/header/header'

export const metadata = {
  title: 'Best online courses.json platform online',
  description: 'This is this and that and do this',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
