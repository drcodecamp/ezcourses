import classes from '@/app/auth/layout.module.css'
import Text from '@/shared/typography/text'
import VerificationForm from '@/app/auth/_components/verification-form'

const Page = () => {
  return (
    <div className={`${classes.container} ${classes.center}`}>
      <Text variant="h1" size="xxl">
        New Verification
      </Text>
      <VerificationForm />
    </div>
  )
}

export default Page
