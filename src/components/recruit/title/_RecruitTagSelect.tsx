import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import { dummyRecruitArray } from '@/testRoutes/testPages/hyejeong/dummy/dummyRecruitList'

const calcTagArray = () => {
  const tagRecords = dummyRecruitArray.reduce((outerAcc, recruit) => {
    const dict = recruit.tags.reduce(
      (innerAcc: Record<number, string>, tag) => {
        innerAcc[tag.id] = tag.name
        return innerAcc
      },
      {}
    )

    const newOuterAcc = { ...outerAcc, ...dict }
    return newOuterAcc
  }, {})

  const tagArray = Object.values(tagRecords).sort() as string[]
  return tagArray
}

interface RecruitTagSelectProps {
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>
}

const RecruitTagSelect = ({ setSelectedTag }: RecruitTagSelectProps) => {
  const tagArray = calcTagArray()

  const handleOptionSelect = (option: string | number) => {
    if (typeof option !== 'string') {
      throw new Error('---- 태그는 스트링이어야 합니다!')
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
          {tagArray.map((tag) => (
            <Select.Option key={tag}>{tag}</Select.Option>
          ))}
        </Select.Content>
      </Select>
    </Vstack>
  )
}

export default RecruitTagSelect
