import { useEffect, type ReactNode } from 'react'
import useDropdownContext from './_useDropdownContext'
import RoundBox from '../roundBox/RoundBox'
import DropdownContent from './_DropdownContent'

const DropdownMenu = ({
  children,
  onChange,
}: {
  children: ReactNode
  onChange: (value: string) => void
}) => {
  const { selectedMenuValue } = useDropdownContext()

  useEffect(() => {
    if (!selectedMenuValue) {
      return
    }
    onChange(selectedMenuValue)
  }, [selectedMenuValue, onChange])

  return (
    <DropdownContent>
      <RoundBox padding="none" className="w-[192px]">
        {children}
      </RoundBox>
    </DropdownContent>
  )
}

export default DropdownMenu
