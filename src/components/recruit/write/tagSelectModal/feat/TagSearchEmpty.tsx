import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import TagIcon from '@/assets/tag.svg'
import useTagStore from '@/store/tag/tagStore'

const TagSearchEmpty = () => {
  const tagSearchKeyword = useTagStore((state) => state.tagSearchKeyword)
  const currentTagArray = useTagStore((state) => state.currentTagArray)
  const addTagMutate = useTagStore((state) => state.addTagMutate)
  const setTagSearchInput = useTagStore((state) => state.setTagSearchInput)
  const setTagSearchKeyword = useTagStore((state) => state.setTagSearchKeyword)
  const setPage = useTagStore((state) => state.setPage)

  const onClickAddTag = (newTag: string) => {
    if (addTagMutate) {
      addTagMutate(newTag)
      setTagSearchInput('')
      setTagSearchKeyword('')
      setPage(1)
    }
  }

  const status = currentTagArray.includes(tagSearchKeyword)
    ? 'disabled'
    : 'enabled'

  return (
    <Vstack
      gap="lg"
      padding="xl"
      className="-mx-6 h-[372px] w-[672px] items-center justify-center"
    >
      <RoundBox
        color="primary"
        className="bg-primary-50 border-primary-300 h-[72px] w-[624px] border-2 border-dashed"
      >
        {/* 새로 등록하시겠습니까? 안내멘트및 등록 버튼 */}
        <Hstack
          gap="none"
          className="h-full w-full items-center justify-between"
        >
          <Vstack gap="none" className="h-[36px] justify-center">
            <p className="text-primary-800 text-sm font-medium">{`'${tagSearchKeyword}' 태그를 새로 만드시겠습니까?`}</p>
            <p className="text-primary-600 text-xs">
              검색 결과에 원하는 태그가 없는 경우 새로 등록 할 수 있습니다.
            </p>
          </Vstack>
          <Button
            status={status}
            onClick={() => onClickAddTag(tagSearchKeyword)}
            color="primary"
          >
            새로 등록하기
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
          <img src={TagIcon} />
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
