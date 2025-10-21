import { type JSX } from 'react'
import { Hstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useSelectContext from './_useSelectContext'
import Text from '../text/Text'

const SelectOption = ({
  icon,
  children,
}: {
  icon?: JSX.Element
  children: string
}) => {
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
      className="bg-white px-3 py-2 hover:bg-gray-50"
    >
      <Hstack>
        {icon && icon}
        <Text>{children}</Text>
      </Hstack>
    </RoundBox>
  )
}

export default SelectOption
