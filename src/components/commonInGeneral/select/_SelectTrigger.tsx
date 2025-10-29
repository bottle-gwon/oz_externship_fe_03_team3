import { ChevronDown } from 'lucide-react'
import { Hstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useSelectContext from './_useSelectContext'
import type { JSX } from 'react'

interface SelectTriggerProps {
  icon?: JSX.Element
  children: string
}

const SelectTrigger = ({ icon, children }: SelectTriggerProps) => {
  const { setIsOpened, selectedChildren, selectedIcon, triggerRef } =
    useSelectContext()

  const handleClick = () => {
    setIsOpened((prev) => !prev)
  }

  const label = selectedChildren ?? children

  return (
    <RoundBox
      ref={triggerRef}
      onClick={handleClick}
      className="cursor-pointer bg-white px-3 py-2 transition hover:bg-gray-50"
    >
      <Hstack className="items-center">
        <div className="text-gray-400">{selectedIcon ?? icon}</div>
        <p
          className={`grow ${selectedChildren ? 'text-gray-900' : 'text-gray-500'}`}
        >
          {label}
        </p>
        <ChevronDown />
      </Hstack>
    </RoundBox>
  )
}

export default SelectTrigger
