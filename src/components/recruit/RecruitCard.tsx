import { Bookmark, Calendar, Eye, Users } from 'lucide-react'

export default function TestRecruitCard() {
  return (
    <div className="outBox rounded-xl border border-gray-200 bg-white p-3">
      <div className="flex gap-3">
        <div
          aria-label="이미지"
          className="imgBox size-20 flex-none overflow-hidden rounded-lg bg-gray-200"
        ></div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3
              aria-label="제목"
              className="truncate text-base font-semibold text-gray-900"
            >
              제목 예시
            </h3>
            <div className="flex shrink-0 items-center gap-3 text-xs leading-none text-gray-500">
              <div
                aria-label="조회수"
                className="viewCount inline-flex items-center gap-1"
              >
                <Eye className="size-4" /> 412
              </div>
              <div
                aria-label="북마크"
                className="bookmarkCount inline-flex items-center gap-1"
              >
                <Bookmark className="size-4" /> 8
              </div>
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-1 text-sm text-gray-700">
            <div
              aria-label="모집인원수"
              className="expected_personnel inline-flex items-center gap-1"
            >
              <Users className="size-4" />
              모집인원 : 5명
            </div>
            <div aria-label="마감일" className="inline-flex items-center gap-1">
              <Calendar className="size-4" />
              마감일 : 2025.10.30.
            </div>
          </div>

          <div className="mt-2">
            <div aria-label="강의제목" className="lectures">
              파이썬시작하기
            </div>
            <ul className="mt-1 list-inside list-disc">
              <li
                aria-label="강의목록"
                className="description text-sm text-gray-600"
              >
                주 2회 온라인
              </li>
            </ul>
          </div>

          <div aria-label="태그" className="tags mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">
              #AI
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
