import Button from '@/components/commonInGeneral/button/Button'

const LoggedOutButtonMany = () => {
  // TODO: 로그인 URL 받으면 교체해야 함
  const redirectToLogin = () =>
    (window.location.href = import.meta.env.VITE_LOGIN_PAGE_URL)
  // TODO: 회원가입 URL 받으면 교체해야 함
  const redirectToSignup = () =>
    (window.location.href = import.meta.env.VITE_SIGNUP_PAGE_URL)
  return (
    <>
      <Button variant="ghost" size="lg" onClick={redirectToLogin}>
        로그인
      </Button>
      <Button color="primary" size="lg" onClick={redirectToSignup}>
        회원가입
      </Button>
    </>
  )
}

export default LoggedOutButtonMany
