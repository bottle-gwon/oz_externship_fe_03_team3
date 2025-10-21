import { ChevronDown } from 'lucide-react'
import { Hstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useSelectContext from './_useSelectContext'

const SelectTrigger = ({ children }: { children: string }) => {
  const { setIsOpened, selectedOption, selectedIcon, triggerRef } =
    useSelectContext()
  const handleClick = () => {
    setIsOpened((prev) => !prev)
  }

  const label = selectedOption ?? children

  return (
    <RoundBox
      ref={triggerRef}
      onClick={handleClick}
      className="cursor-pointer bg-white px-3 py-2 transition hover:bg-gray-50"
    >
      <Hstack>
        {selectedIcon ?? selectedIcon}
        <p
          className={`grow ${selectedOption ? 'text-gray-900' : 'text-gray-500'}`}
        >
          {label}
        </p>
        <ChevronDown />
      </Hstack>
    </RoundBox>
  )
}

export default SelectTrigger
