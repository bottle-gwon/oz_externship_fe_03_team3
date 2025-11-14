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
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useManageDeleteMutation from '@/hooks/manage/useManageDeleteMutation'

export type RecruitCardProps = {
  recruit: Recruit
  isMine?: boolean
  cardClassName?: string
  imageClassName?: string
  onManageClick?: (recruit: Recruit) => void
  onDeleteSuccess?: (title: string) => void
  onDeleteError?: (title: string) => void
}

const RecruitCard = ({
  recruit,
  isMine = false,
  cardClassName = 'cursor-pointer hover:bg-gray-50 transition',
  imageClassName = 'h-27 w-35',
  onManageClick,
  onDeleteSuccess,
  onDeleteError,
}: RecruitCardProps) => {
  const {
    uuid,
    thumbnail_img_url,
    title,
    expected_headcount,
    tags,
    views_count,
    bookmark_count,
    lectures,
    is_bookmarked,
    close_at,
  } = recruit

  const navigate = useNavigate()

  const [confirmOpen, setConfirmOpen] = useState(false)

  const goDetail = () => navigate(`/recruit/${uuid}`)

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    navigate(`/recruit/write/${uuid}`)
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setConfirmOpen(true)
  }

  const { deleteRecruitmentMutation } = useManageDeleteMutation({
    onSuccess: () => {
      onDeleteSuccess?.(title)
    },
    onError: () => {
      onDeleteError?.(title)
    },
  })

  const confirmDelete = () => {
    deleteRecruitmentMutation.mutate({
      data: recruit.uuid,
      //실패 확인하고 싶을때
      // data: -1,
      newOne: { uuid: recruit.uuid, is_closed: recruit.is_closed },
    })
    setConfirmOpen(false)
  }

  const cancelDelete = () => {
    setConfirmOpen(false)
  }

  return (
    <>
      <RoundBox
        className={`outBox ${cardClassName}`}
        onClick={goDetail}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') goDetail()
        }}
      >
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

          <Vstack gap="xs" padding="none" className="flex-1 overflow-hidden">
            <Hstack
              gap="none"
              padding="none"
              className="items-start justify-between"
            >
              <h1
                aria-label="제목"
                className="line-clamp-2 flex-1 text-lg font-bold break-words text-gray-900 md:text-xl"
              >
                {title}
              </h1>
              <Hstack
                gap="sm"
                padding="xs"
                className="shrink-0 items-center text-sm leading-none text-gray-500"
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
                >
                  <Bookmark
                    className={`size-4 transition ${is_bookmarked ? 'text-amber-400' : 'text-gray-500'}`}
                    fill={is_bookmarked ? 'currentColor' : 'none'}
                    stroke="currentColor"
                  />
                  {bookmark_count}
                </button>
                {isMine && (
                  <span className="inline-flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="수정"
                      className="cursor-pointer text-gray-600 transition hover:text-blue-600"
                      onClick={(e) => handleEdit(e)}
                    >
                      <Pencil className="size-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="삭제"
                      className="cursor-pointer text-gray-600 transition hover:text-red-600"
                      onClick={(e) => handleDelete(e)}
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
              className="text-md mt-3 text-gray-600"
            >
              <Hstack
                gap="sm"
                padding="none"
                aria-label="모집인원수"
                className="items-center"
              >
                <Users className="size-4" />
                {/* 추후 svg 아이콘으로 추가 */}
                모집인원 : {expected_headcount ?? ''}명
              </Hstack>

              <Hstack
                gap="sm"
                padding="none"
                aria-label="마감일"
                className="items-center"
              >
                <Calendar className="size-4" />
                {/* 추후 svg 아이콘으로 추가 */}
                마감일 :{' '}
                {(close_at ?? '').slice(0, 10).replace(/-/g, '. ') + '.'}
              </Hstack>
            </Vstack>

            <Vstack gap="xs" padding="none" className="mt-2 text-gray-600">
              <Hstack gap="sm" padding="xs" className="text-md">
                강의 목록 :
              </Hstack>
              <ul className="list-inside list-disc pl-2">
                {lectures.map((lectures) => (
                  <li
                    key={lectures.uuid}
                    aria-label="강의목록"
                    className="text-md"
                  >
                    {lectures.title}-{lectures.instructor}
                  </li>
                ))}
              </ul>
            </Vstack>

            <Hstack
              gap="xs"
              padding="xs"
              className="mt-3 items-center justify-between"
            >
              <Hstack
                gap="sm"
                padding="none"
                aria-label="태그"
                className="flex-wrap"
              >
                {tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    color="primary"
                    isVivid={false}
                    className="!text-sm"
                  >
                    {tag.name}
                  </Tag>
                ))}
              </Hstack>
              {isMine && (
                <Hstack gap="none" padding="none" className="self-center">
                  <Button
                    color="blue"
                    className="gap-2 px-6 py-2 text-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      onManageClick?.(recruit)
                    }}
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
