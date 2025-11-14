import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import TagCard from './TagCard'
import TagPagination from './TagPagination'
import type { TagApiResponse } from '@/types'
import TagSearchEmpty from './TagSearchEmpty'
import TagSkeleton from '../skeleton/TagSkeleton'
import TagPaginationSkeleton from '../skeleton/TagPaginationSkeleton'
import useTagStore from '@/store/tag/tagStore'
import TagEmpty from './TagEmpty'

// 페이지 네이션 타입

// 이후 API 연결할때 테스트
// interface TagLoading {
//   isPending: boolean      //isPending
//   isPaginating: boolean   //페이지네이션으로 이동시(isFetching)
// }

// {tags, page, page_size, total_count} :TagApiResponse
// api 적용시 사용
interface TagListInterface {
  responseData: TagApiResponse
}

const TagList = ({ responseData }: TagListInterface) => {
  const currentTagArray = useTagStore((state) => state.currentTagArray)
  const tagListLoading = useTagStore((state) => state.tagListLoading)

  // if (!responseData) {
  //   return
  // }
  //Todo 현재는 페이지 네이션을 해도 스켈레톤이 출력되지만 이후api 연동할때 분기 처리 할것
  if (tagListLoading === 'pending' || tagListLoading === 'searching') {
    return (
      <Vstack
        gap="xl"
        className="-mx-6 -mb-6 h-[426px] w-[672px] items-center justify-center"
      >
        <TagSkeleton />
        <TagPaginationSkeleton />
      </Vstack>
    )
  }

  // 검색 결과 없음 새로운 태그 추가
  if (responseData?.count === 0) {
    return <TagSearchEmpty />
  }

  return (
    <Vstack
      gap="xl"
      className="-mx-6 -mb-6 h-[426px] w-[672px] items-center justify-center"
    >
      {tagListLoading === 'paginating' && <TagSkeleton />}

      {!(tagListLoading === 'paginating') && (
        <Vstack gap="sm" className="h-[314px] items-center justify-start">
          <Hstack className="w-full items-start justify-start self-start">
            <p className="text-sm font-medium">{`사용가능한 태그 (${responseData?.count || 0}개)`}</p>
          </Hstack>
          {responseData?.results?.map((el) => (
            <TagCard
              key={el.id + el.name}
              name={el.name}
              isChecked={currentTagArray.includes(el.name)}
            />
          ))}
          {!responseData && <TagEmpty />}
        </Vstack>
      )}

      {responseData && <TagPagination />}
    </Vstack>
  )
}

export default TagList
