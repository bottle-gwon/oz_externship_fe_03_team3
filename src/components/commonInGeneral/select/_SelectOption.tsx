import { type JSX, useState } from 'react'
import { Hstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useSelectContext from './_useSelectContext'

const SelectOption = ({
  icon,
  children,
}: {
  icon?: JSX.Element
  children: string
}) => {
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false)
  const { onOptionSelect, setIsOpened, setSelectedOption, setSelectedIcon } =
    useSelectContext()
  const handleClick = () => {
    setSelectedIcon(icon ?? null)

    setIsOpened(false)
    setSelectedOption(children)

    onOptionSelect(children)
  }

  // TODO: 나중에 p 태그는 Text로 교체
  return (
    <RoundBox
      isBordered={false}
      onClick={handleClick}
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
      className={isMouseEntered ? 'bg-gray-100' : ''}
    >
      <Hstack>
        {icon && icon}
        <p>{children}</p>
      </Hstack>
    </RoundBox>
  )
}

export default SelectOption
