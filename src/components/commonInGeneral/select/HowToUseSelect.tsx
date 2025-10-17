import { ArrowBigDown } from 'lucide-react'
import Select from './Select'

const HowToUseSelect = () => {
  return (
    <Select
      onOptionSelect={(option) => console.log(`선택된 옵션입니다: ${option}`)}
    >
      <Select.Trigger>이걸 누르면 열립니다</Select.Trigger>

      <Select.Content>
        <Select.Option>이렇게 텍스트만 써도 되고</Select.Option>
        <Select.Option icon={<ArrowBigDown />}>
          아이콘을 넣고 싶으면 prop icon에 할당하시면 됩니다
        </Select.Option>
      </Select.Content>
    </Select>
  )
}

export default HowToUseSelect
