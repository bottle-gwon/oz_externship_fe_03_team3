import { ArrowRight } from 'lucide-react'
import Button from '../button/Button'
import { useNavigate } from 'react-router'

export interface RedirectButtonProps {
  path: string // "/lecture" 혹은 "https://www.google.com"
  label: string // "홈으로" 등
  isExternal?: boolean // navigate을 쓸 거면 false(기본값), window.location.href를 쓴다면 true
}

const RedirectButton = ({
  path,
  label,
  isExternal = false,
}: RedirectButtonProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (isExternal) {
      window.location.href = path
      return
    }

    navigate(path)
  }

  return (
    <Button onClick={handleClick} color="primary" size="lg">
      {label}
      <ArrowRight size={16} />
    </Button>
  )
}

export default RedirectButton
