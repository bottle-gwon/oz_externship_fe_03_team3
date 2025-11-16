import { Folder } from 'lucide-react'
import Select from '../commonInGeneral/select/Select'
import useLectureStore from '@/store/lecture/lectureStore'
import { useQuery } from '@tanstack/react-query'
import api from '@/api/api'
import type { LectureCategory } from '@/types'

const LectureCategorySelect = () => {
  const selectedCategory = useLectureStore((state) => state.selectedCategory)
  const setSelectedCategory = useLectureStore(
    (state) => state.setSelectedCategory
  )

  const endpoint = '/lectures/categories'
  const { data } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data as LectureCategory[],
  })

  const filteredData = data
    ? data.filter((lectureCategory) => {
        return /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]+$/.test(lectureCategory.name)
      })
    : []

  const handleOptionSelect = (option: string | number) => {
    if (typeof option !== 'string') {
      throw new Error('---- 카테고리는 스트링이어야 합니다!')
    }

    setSelectedCategory(option)
  }

  return (
    <Select
      onOptionSelect={handleOptionSelect}
      value={selectedCategory ?? ''}
      label={selectedCategory === '' ? '전체 카테고리' : undefined}
    >
      <Select.Trigger icon={<Folder size={16} />}>전체 카테고리</Select.Trigger>
      <Select.Content>
        <Select.Option value="">전체 카테고리</Select.Option>
        {filteredData.slice(0, 15).map((category) => (
          <Select.Option key={category.id}>{category.name}</Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default LectureCategorySelect
