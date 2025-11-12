import Button from '@/components/commonInGeneral/button/Button'
import NotFoundContent from '@/components/commonInGeneral/error/NotFoundContent'
import { ArrowRight } from 'lucide-react'

const RedirectButton = () => {
  const handleClick = () => {
    window.location.href = import.meta.env.VITE_LANDING_PAGE_URL
  }

  return (
    <Button onClick={handleClick} color="primary" size="lg">
      홈으로
      <ArrowRight size={16} />
    </Button>
  )
}

const GlobalNotFoundPage = () => {
  return <NotFoundContent redirectButton={RedirectButton()} />
}

export default GlobalNotFoundPage
