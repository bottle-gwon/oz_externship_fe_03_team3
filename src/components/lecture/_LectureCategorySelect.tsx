import { Folder } from 'lucide-react'
import Select from '../commonInGeneral/select/Select'
import useLectureStore from '@/store/lecture/lectureStore'
import { useQuery } from '@tanstack/react-query'
import api from '@/api/api'
import type { LectureCategory } from '@/types'

const LectureCategorySelect = () => {
  const setSelectedCategory = useLectureStore(
    (state) => state.setSelectedCategory
  )

  const endpoint = '/lectures/categories'
  const { data } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data as LectureCategory[],
  })

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
        {data &&
          data.map((category) => (
            <Select.Option key={category.id}>{category.name}</Select.Option>
          ))}
      </Select.Content>
    </Select>
  )
}

export default LectureCategorySelect
