import { ArrowBigDown } from 'lucide-react'
import Select from './Select'
import { useState } from 'react'
import Text from '../text/Text'

const HowToUseSelect = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <>
      <Text>{JSON.stringify({ selectedOption })}</Text>
      <Select onOptionSelect={(option) => setSelectedOption(option)}>
        <Select.Trigger>이걸 누르면 열립니다</Select.Trigger>

        <Select.Content>
          <Select.Option>이렇게 텍스트만 써도 되고</Select.Option>
          <Select.Option icon={<ArrowBigDown />}>
            아이콘을 넣고 싶으면 prop icon에 할당하시면 됩니다
          </Select.Option>
        </Select.Content>
      </Select>
    </>
  )
}

export default HowToUseSelect
