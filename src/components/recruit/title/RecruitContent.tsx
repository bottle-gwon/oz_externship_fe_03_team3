import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import RecommendSection from '@/components/recommendSection/RecommendSection'
import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import { dummyRecruitArray } from '@/testRoutes/testPages/hyejeong/dummy/dummyRecruitList'
import useStudyHubStore from '@/store/store'
import RecruitSubHeader from './_RecruitSubHeader'
import RecruitSearchInput from './_RecruitSearchInput'
import RecruitTagSelect from './_RecruitTagSelect'
import { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import NoSearchResult from '@/components/commonInProject/noSearchResult/NoSearchResult'
import RecruitArrangementSelect from './_RecruitArrangementSelect'
import type { RecruitArrangementInText } from '@/types'

const dummyGetRecruitWithParametersApi = (
  debounceValue: string,
  tag: string | null,
  arrangementInText: RecruitArrangementInText
) => {
  const setRecruitArray = useStudyHubStore.getState().setRecruitArray

  const filteredRecruitArray = dummyRecruitArray
    .filter((recruit) => recruit.title.includes(debounceValue))
    .filter((recruit) => {
      if (!tag || tag === '전체 태그') {
        return true
      }
      const nameArray = recruit.tags.map((tempTag) => tempTag.name)
      return nameArray.includes(tag)
    })
    .sort((a, b) => {
      switch (arrangementInText) {
        case '최신순':
          return 1
        case '조회수 높은 순':
          return b.views_count - a.views_count
        case '북마크 많은 순':
          return b.bookmark_count - a.bookmark_count
      }
    })

  setRecruitArray(filteredRecruitArray)
}

const RecruitContent = () => {
  const [isSearching, setIsSearching] = useState(false)
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const recruitArray = useStudyHubStore((state) => state.recruitArray)

  const isLoggedIn = Boolean(accessToken)

  const [searchText, setSearchText] = useState('')
  const [debounceValue, cancel] = useDebounce(searchText, 500)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedArrangementInText, setSelectedArrangementInText] =
    useState<RecruitArrangementInText>('최신순')

  useEffect(() => {
    dummyGetRecruitWithParametersApi(
      debounceValue,
      selectedTag,
      selectedArrangementInText
    )

    if (debounceValue === '') {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }, [debounceValue, selectedTag, selectedArrangementInText])

  return (
    <Container className="py-oz-xxl flex flex-col items-center bg-gray-50">
      <RecruitSubHeader isLoggedIn={isLoggedIn} />
      <RecommendSection
        type="recruit"
        isLoggedIn={isLoggedIn}
        recommendedArray={dummyRecruitArray.slice(0, 3)}
      />
      <Vstack gap="xxl" className="px-oz-xxl w-full">
        <RoundBox
          isShadowed={false}
          color="mono-bright"
          padding="xl"
          radius="lg"
          className="justify-center"
        >
          <RecruitSearchInput
            searchText={searchText}
            setSearchText={setSearchText}
            cancelDebounce={cancel}
          />

          <Hstack gap="none" className="gap-9">
            <RecruitTagSelect setSelectedTag={setSelectedTag} />
            <RecruitArrangementSelect
              setSelectedArrangementInText={setSelectedArrangementInText}
            />
          </Hstack>
        </RoundBox>

        <Vstack gap="none">
          <Vstack gap="none" className="mb-oz-xl text-lg font-semibold">
            전체 공고({recruitArray.length})
          </Vstack>
          {isSearching && recruitArray.length === 0 && <NoSearchResult />}
          {recruitArray.length > 0 && (
            <Vstack gap="none" className="items-center gap-12">
              <Vstack gap="none" className="w-full">
                {recruitArray.map((recruit) => (
                  <RecruitCard key={recruit.uuid} recruit={recruit} />
                ))}
              </Vstack>
              <Button
                variant="contained"
                status="enabled"
                size="lg"
                className="mb-oz-xxl"
              >
                + 더 많은 공고 보기
              </Button>
            </Vstack>
          )}
        </Vstack>
      </Vstack>
    </Container>
  )
}

export default RecruitContent
