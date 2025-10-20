import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { Tag } from 'lucide-react'

interface TagEmpty {
  keyword: string
  onClickAddTag: (newTag: string, isAdd: boolean) => void
}

const TagSearchEmpty = ({ keyword, onClickAddTag }: TagEmpty) => {
  return (
    <Vstack
      gap="lg"
      padding="xl"
      className="h-[372px] w-[672px] items-center justify-center border-b border-gray-200"
    >
      <RoundBox
        color=""
        className="bg-primary-50 border-primary-300 h-[72px] w-[624px] border-2 border-dashed"
      >
        {/* 새로 등록하시겠습니까? 안내멘트및 등록 버튼 */}
        <Hstack
          gap="none"
          className="h-full w-full items-center justify-between"
        >
          <Vstack gap="none" className="h-[36px] justify-center">
            <p className="text-primary-800 text-sm font-medium">{`'${keyword}' 태그를 새로 만드시겠습니까?`}</p>
            <p className="text-primary-600 text-xs">
              검색 결과에 원하는 태그가 없는 경우 새로 등록 할 수 있습니다.
            </p>
          </Vstack>
          <Button
            onClick={() => onClickAddTag(keyword, true)}
            className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 cursor-pointer text-white hover:text-white active:text-white"
          >
            <span>새로 등록하기</span>
          </Button>
        </Hstack>
      </RoundBox>

      {/* 검색 결과 없음 안내문 */}
      <Vstack
        gap="sm"
        className="h-[236px] w-[624px] items-center justify-center"
      >
        <Hstack
          gap="none"
          className="mb-1 size-16 items-center justify-center rounded-full bg-gray-100"
        >
          <Tag className="size-[25px] rotate-90 text-gray-400" />
        </Hstack>
        <p className="text-lg font-medium">검색된 결과가 없습니다.</p>
        <p className="text-base">
          다른 키워드로 검색하거나 새 태그로 검색해보세요
        </p>
      </Vstack>
    </Vstack>
  )
}

export default TagSearchEmpty
