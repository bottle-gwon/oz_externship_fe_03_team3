import { Bookmark, Calendar, Eye, Users } from 'lucide-react'

export default function TestRecruitCard() {
  return (
    <div className="outBox">
      <div aria-label="이미지" className="imgBox" />

      <div>
        <div aria-label="제목" className="title">
          제목 예시
        </div>

        <div aria-label="모집인원수" className="expected_personnel">
          <Users /> 5명
        </div>

        <div aria-label="마감일" className="due_date">
          <Calendar /> 2025-10-30
        </div>

        <div aria-label="강의제목" className="lectures">
          파이썬, 딥러닝
        </div>
        <div aria-label="강의목록" className="description">
          주 2회 온라인
        </div>

        <div aria-label="태그" className="tags">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">
            #AI
          </span>
        </div>
      </div>

      <div>
        <div aria-label="조회수" className="viewCount">
          <Eye /> 412
        </div>
        <div aria-label="북마크" className="bookmarkCount">
          <Bookmark /> 8
        </div>
      </div>
    </div>
  )
}
