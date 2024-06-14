import ErrorForm from '@/app/auth/_components/error-form'
import classes from '@/app/auth/layout.module.css'
import Text from '@/shared/typography/text'

const AuthErrorPage = () => {
  return (
    <div className={`${classes.container} ${classes.center}`}>
      <Text variant="h1" size="xxl">
        Oops...
      </Text>
      <ErrorForm />
    </div>
  )
}

export default AuthErrorPage
