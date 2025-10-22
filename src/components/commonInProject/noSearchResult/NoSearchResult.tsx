import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import useStudyHubStore from '@/store/store'
import { Search } from 'lucide-react'

const NoSearchResult = () => {
  const setIsClearingSearch = useStudyHubStore(
    (state) => state.setIsClearingSearch
  )
  const setIsFocusingSearch = useStudyHubStore(
    (state) => state.setIsFocusingSearch
  )

  return (
    <RoundBox
      color="mono-dim"
      className="gap-oz-xl flex flex-col items-center justify-center py-12"
    >
      <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-gray-100">
        <Search size={24} />
      </div>

      <Vstack className="items-center">
        <h2 className="text-xl font-semibold">검색 결과가 없습니다</h2>
        <p className="text-gray-500">
          다른 키워드로 검색해보거나 필터를 조정해주세요
        </p>
      </Vstack>

      <Hstack>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setIsClearingSearch(true)}
        >
          필터 초기화
        </Button>
        <Button variant="outlined" onClick={() => setIsFocusingSearch(true)}>
          새로운 검색
        </Button>
      </Hstack>
    </RoundBox>
  )
}

export default NoSearchResult
