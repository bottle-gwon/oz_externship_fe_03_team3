import { Bookmark, Calendar, Eye, Users } from 'lucide-react'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import type { ReactNode } from 'react'

type RecruitCardProps = {
  title?: string
  expectedPersonnel?: number
  due_date?: string
  lectures?: string[]
  tags?: string[]
  viewCount?: number
  bookmarkCount?: number
  isMine?: boolean
  topRight?: ReactNode
  dateTagRight?: ReactNode
  footerRight?: ReactNode
  cardClassName?: string
  imageClassName?: string
}

const RecruitCard = ({
  title = '제목',
  expectedPersonnel = 5,
  due_date = '2025.10.25.',
  lectures = ['강의목록', '강의목록2'],
  tags = ['AI', '백앤드', '프론트앤드'],
  viewCount = 30,
  bookmarkCount = 0,
  isMine = false,
  topRight,
  dateTagRight,
  footerRight,
  cardClassName = '',
  imageClassName = 'h-20 w-28',
}: RecruitCardProps) => {
  return (
    <RoundBox
      color="mono"
      isBordered
      padding="xl"
      radius="md"
      className={`outBox bg-white ${cardClassName}`}
    >
      <div className="flex gap-3">
        <RoundBox
          color="mono"
          isBordered={false}
          padding="none"
          radius="lg"
          className={`imgBox ${imageClassName} flex-none overflow-hidden bg-gray-200`}
          aria-label="공고 이미지"
        ></RoundBox>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h1
              aria-label="제목"
              className="truncate text-xl font-bold text-gray-900"
            >
              {title}
            </h1>
            <div className="flex shrink-0 items-center gap-3 text-xs leading-none text-gray-500">
              <span
                aria-label="조회수"
                className="viewCount inline-flex items-center gap-1"
              >
                <Eye className="size-4" /> {viewCount}
              </span>
              <span
                aria-label="북마크"
                className="bookmarkCount inline-flex items-center gap-1"
              >
                <Bookmark className="size-4" /> {bookmarkCount}
              </span>
              {isMine && topRight}
            </div>
          </div>

          <div className="h-2" />

          <div className="mt-2 flex flex-col gap-1 text-sm text-gray-700">
            <div
              aria-label="모집인원수"
              className="expected_personnel inline-flex items-center gap-1"
            >
              <Users className="size-4" />
              {/* 추후 svg 아이콘으로 추가 */}
              모집인원 : {expectedPersonnel ?? ''}명
            </div>

            <div className="h-2" />

            <div className="inline-flex flex-wrap items-center gap-2">
              <span
                aria-label="마감일"
                className="inline-flex items-center gap-1"
              >
                <Calendar className="size-4" />
                {/* 추후 svg 아이콘으로 추가 */}
                마감일 : {due_date ?? ''}
              </span>
              {isMine && dateTagRight}
            </div>
          </div>

          <div className="h-2" />

          <div className="mt-2">
            <div className="text-sm">강의 목록 :</div>
            <ul className="lectures mt-1 list-inside list-disc">
              {lectures.map((text) => (
                <li
                  key={text}
                  aria-label="강의목록"
                  className="description text-sm text-gray-600"
                >
                  {text}
                  {/* 추후 확정 api 확인하여 강사명도 어떻게 추가할지 고민 현재 api확인 바로는 RECM-003강의목록, 강사명 없음*/}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2 grid grid-cols-[1fr_auto] items-start gap-x-3 gap-y-2">
            <div aria-label="태그" className="tags mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <RoundBox
                  key={tag}
                  color="mono"
                  isBordered={false}
                  padding="none"
                  radius="sm"
                  className="bg-yellow-100 px-3 py-1 text-[12px] text-yellow-800"
                >
                  {tag}
                </RoundBox>
              ))}
            </div>
            {isMine && (
              <div className="row-span-2 self-center">{footerRight}</div>
            )}
          </div>
        </div>
      </div>
    </RoundBox>
  )
}

export default RecruitCard
