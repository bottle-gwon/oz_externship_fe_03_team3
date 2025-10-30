import {
  Bookmark,
  Calendar,
  Eye,
  FileText,
  Pencil,
  Trash2,
  Users,
} from 'lucide-react'
import RoundBox from '../../commonInGeneral/roundBox/RoundBox'
import type { Recruit } from '@/types'
import Tag from '@/components/commonInProject/tag/Tag'
import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import ManageModal from '../manageModal/ManageModal'
import { dummyApplicantArray } from '@/testRoutes/testPages/hyejeong/dummy/dummyApplicantList'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'

export type RecruitCardProps = {
  recruit: Recruit
  isMine?: boolean
  cardClassName?: string
  imageClassName?: string
}

const RecruitCard = ({
  recruit,
  isMine = false,
  cardClassName = '',
  imageClassName = 'h-20 w-28',
}: RecruitCardProps) => {
  const {
    id,
    thumbnail_img_url,
    title,
    expected_headcount,
    due_date,
    tags,
    views_count,
    bookmark_count,
    lectures,
  } = recruit

  const navigate = useNavigate()
  const [manageOpen, setManageOpen] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const handleEdit = () => {
    navigate(`/recruit/write?edit=${id}`)
  }

  const handleDelete = () => {
    setConfirmOpen(true)
  }

  const confirmDelete = () => {
    // 실제 삭제 API 연동 전까지는 카드만 숨김
    setIsDelete(true)
    setConfirmOpen(false)
  }

  const cancelDelete = () => {
    setConfirmOpen(false)
  }

  const handleBookmark = () => {
    setBookmarked((on) => !on)
  }

  if (isDelete) return null

  return (
    <>
      <RoundBox className={`outBox ${cardClassName}`}>
        <Hstack padding="xs">
          <RoundBox
            isBordered={false}
            borderStyle="none"
            padding="none"
            radius="lg"
            className={`${imageClassName} flex-none overflow-hidden bg-gray-200`}
            aria-label="공고 이미지"
          >
            <img
              src={thumbnail_img_url}
              alt="imgBox"
              className={imageClassName}
            />
          </RoundBox>

          <Vstack gap="xs" padding="none" className="flex-1">
            <Hstack
              gap="none"
              padding="none"
              className="items-start justify-between"
            >
              <h1
                aria-label="제목"
                className="truncate text-base font-bold text-gray-900"
              >
                {title}
              </h1>
              <Hstack
                gap="sm"
                padding="xs"
                className="shrink-0 items-center text-[11px] leading-none text-gray-500"
              >
                <span
                  aria-label="조회수"
                  className="viewCount inline-flex items-center gap-1"
                >
                  <Eye className="size-4" /> {views_count}
                </span>
                <button
                  type="button"
                  aria-label="북마크"
                  className="bookmarkCount inline-flex items-center gap-1"
                  onClick={handleBookmark}
                >
                  <Bookmark
                    className={`size-4 ${bookmarked ? 'text-amber-400' : 'text-gray-500'}`}
                    fill={bookmarked ? 'currentColor' : 'none'}
                    stroke="currentColor"
                  />
                  {bookmark_count}
                </button>
                {isMine && (
                  <span className="inline-flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="수정"
                      className="text-gray-500 hover:text-blue-600"
                      onClick={handleEdit}
                    >
                      <Pencil className="size-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="삭제"
                      className="text-gray-500 hover:text-red-600"
                      onClick={handleDelete}
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </span>
                )}
              </Hstack>
            </Hstack>

            <Vstack
              gap="lg"
              padding="xs"
              className="mt-2 text-xs text-gray-500"
            >
              <Hstack
                gap="xs"
                padding="none"
                aria-label="모집인원수"
                className="items-center"
              >
                <Users className="size-4" />
                {/* 추후 svg 아이콘으로 추가 */}
                모집인원 : {expected_headcount ?? ''}명
              </Hstack>

              <Hstack
                gap="xs"
                padding="none"
                aria-label="마감일"
                className="items-center"
              >
                <Calendar className="size-4" />
                {/* 추후 svg 아이콘으로 추가 */}
                마감일 :{' '}
                {(due_date ?? '').slice(0, 10).replace(/-/g, '. ') + '.'}
              </Hstack>
            </Vstack>

            <Vstack gap="xs" padding="none" className="mt-2 text-gray-500">
              <Hstack gap="sm" padding="xs" className="text-xs">
                강의 목록 :
              </Hstack>
              <ul className="list-inside list-disc pl-2">
                {lectures.map((lectures) => (
                  <li
                    key={lectures.id}
                    aria-label="강의목록"
                    className="text-xs"
                  >
                    {lectures.title}-{lectures.instructor}
                  </li>
                ))}
              </ul>
            </Vstack>

            <Hstack
              gap="xs"
              padding="xs"
              className="items-center justify-between"
            >
              <Hstack
                gap="sm"
                padding="none"
                aria-label="태그"
                className="flex-wrap"
              >
                {tags.map((tag) => (
                  <Tag key={tag.id} color="primary" isVivid={false}>
                    {tag.name}
                  </Tag>
                ))}
              </Hstack>
              {isMine && (
                <Hstack gap="none" padding="none" className="self-center">
                  <Button
                    color="blue"
                    className="gap-2 px-6 py-2 text-xs"
                    onClick={() => setManageOpen(true)}
                  >
                    <FileText className="size-4" />
                    {/* 추후 svg 아이콘으로 추가 */}
                    <span>지원내역</span>
                  </Button>
                </Hstack>
              )}
            </Hstack>
          </Vstack>
        </Hstack>
      </RoundBox>

      <ManageModal
        isOn={manageOpen}
        onClose={setManageOpen}
        recruitContent={title}
        applicantArray={dummyApplicantArray}
      />

      <ConfirmationModal isOn={confirmOpen} onClose={cancelDelete}>
        <ConfirmationModal.Title>{`'${title}' 을(를) 삭제하시겠습니까?`}</ConfirmationModal.Title>
        <ConfirmationModal.Content>
          <p className="text-sm">
            해당 항목이 즉시 삭제되며, 이 작업은 복구될 수 없습니다.
          </p>
        </ConfirmationModal.Content>
        <ConfirmationModal.ButtonSection>
          <Button onClick={cancelDelete}>취소</Button>
          <Button onClick={confirmDelete} color="danger">
            삭제
          </Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>
    </>
  )
}

export default RecruitCard
