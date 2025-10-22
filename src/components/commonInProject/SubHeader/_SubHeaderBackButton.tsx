import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

interface BackButtonProps {
  isBackButtonVisible?: boolean
}

const SubHeaderBackButton = ({
  isBackButtonVisible = false,
}: BackButtonProps) => {
  const navigate = useNavigate()
  const handleBack = () => navigate(-1)

  return (
    <>
      {isBackButtonVisible && (
        <button
          onClick={handleBack}
          className="mr-4 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#F3F4F6] py-2 hover:bg-[#E5E7EB]"
        >
          <ArrowLeft size={17} className="text-[#3B4350]" />
        </button>
      )}
    </>
  )
}

export default SubHeaderBackButton
