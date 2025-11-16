import api from '@/api/api'
import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import useRecruitStore from '@/store/recruit/recruitStore'
import type { RecruitTag } from '@/types'
import { useQuery } from '@tanstack/react-query'

const RecruitTagSelect = () => {
  const setSelectedTag = useRecruitStore((state) => state.setSelectedTag)

  const endpoint = '/recruitments/tags'
  const { data } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data.results as RecruitTag[],
  })

  const handleOptionSelect = (option: string | number) => {
    if (typeof option !== 'string') {
      throw new Error('---- 태그는 스트링이어야 합니다!')
    }
    if (option === '전체 태그') {
      setSelectedTag('')
      return
    }
    setSelectedTag(option)
  }

  return (
    <Vstack gap="none" className="w-full">
      <p className="mb-oz-sm">태그</p>

      <Select onOptionSelect={handleOptionSelect}>
        <Select.Trigger>전체 태그</Select.Trigger>
        <Select.Content>
          <Select.Option>전체 태그</Select.Option>
          {data &&
            data.map((tag) => (
              <Select.Option key={tag.id}>{tag.name}</Select.Option>
            ))}
        </Select.Content>
      </Select>
    </Vstack>
  )
}

export default RecruitTagSelect
