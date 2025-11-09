import { Folder } from 'lucide-react'
import Select from '../commonInGeneral/select/Select'
import useLectureStore from '@/store/lecture/lectureStore'

const LectureCategorySelect = () => {
  const setSelectedCategory = useLectureStore(
    (state) => state.setSelectedCategory
  )
  const categoryArray: string[] = []
  // TODO: API 연결하면 calc... 와 교체하기

  const handleOptionSelect = (option: string | number) => {
    if (typeof option !== 'string') {
      throw new Error('---- 카테고리는 스트링이어야 합니다!')
    }
    setSelectedCategory(option)
  }

  return (
    <Select onOptionSelect={handleOptionSelect}>
      <Select.Trigger icon={<Folder size={16} />}>전체 카테고리</Select.Trigger>
      <Select.Content>
        <Select.Option>전체 카테고리</Select.Option>
        {categoryArray.map((category) => (
          <Select.Option key={category}>{category}</Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default LectureCategorySelect
