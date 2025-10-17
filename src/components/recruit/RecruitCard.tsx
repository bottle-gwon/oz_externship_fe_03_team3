import { Bookmark, Calendar, Eye, Users } from 'lucide-react'

;<div className="outBox">
  <div aria-label="이미지" className="imgBox"></div>

  <div>
    <div aria-label="제목" className="title"></div>
    <div aria-label="모집인원수" className="expected_personnel">
      <Users />
    </div>
    <div aria-label="마감일" className="due_date">
      <Calendar />
    </div>
    <div aria-label="강의제목" className="lectures"></div>
    <div aria-label="강의목록" className="description"></div>
    <div aria-label="태그" className="tags"></div>
  </div>

  <div>
    <div aria-label="조회수" className="viewCount">
      <Eye />
    </div>
    <div aria-label="북마크" className="bookmarkCount">
      <Bookmark />
    </div>
  </div>
</div>
